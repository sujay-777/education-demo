const express = require('express');
const fs = require('fs');
const router = express.Router();
const {
    createCourse,
    getAllCourses,
    getTeacherCourses,
    getCourseById,
    getEnrolledCourses,
    enrollInCourse
} = require('../controllers/courseController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

// Routes
router.get('/', getAllCourses);
router.get('/my-courses', protect, getTeacherCourses);
router.get('/enrolled', protect, getEnrolledCourses);
router.post('/', protect, createCourse);

// Parameterized Routes (Must be at the bottom)
router.get('/:id', getCourseById);
router.post('/:id/enroll', protect, enrollInCourse);

const { uploadToDrive } = require('../services/googleDriveService');

router.post('/upload', protect, upload.fields([{ name: 'video', maxCount: 1 }, { name: 'thumbnail', maxCount: 1 }]), async (req, res) => {
    try {
        const files = req.files;
        const responseData = {};
        const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

        const handleUpload = async (fieldName) => {
            if (files[fieldName]) {
                const file = files[fieldName][0];

                // If it's a video, upload to Google Drive
                if (fieldName === 'video' && folderId) {
                    const result = await uploadToDrive(file.path, file.originalname, folderId);
                    // Remove local file after successful upload
                    fs.unlinkSync(file.path);
                    return result.webViewLink; // Store the link
                } else {
                    // For thumbnails or if no folderId, keep local (for now)
                    return `/uploads/${file.filename}`;
                }
            }
            return null;
        };

        if (files.video) {
            responseData.videoUrl = await handleUpload('video');
        }
        if (files.thumbnail) {
            responseData.thumbnailUrl = await handleUpload('thumbnail');
        }

        res.status(200).json(responseData);
    } catch (error) {
        console.error('Upload Error:', error);
        res.status(500).json({ message: 'Upload failed: ' + error.message });
    }
});

module.exports = router;
