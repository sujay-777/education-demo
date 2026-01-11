const express = require('express');
const router = express.Router();
const {
    createCourse,
    getAllCourses,
    getTeacherCourses,
    getCourseById
} = require('../controllers/courseController');
const { protect } = require('../middleware/auth');

// Public Routes
router.get('/', getAllCourses);
router.get('/:id', getCourseById);

// Protected Routes
router.post('/', protect, createCourse);
router.get('/my/courses', protect, getTeacherCourses); // Changed to /my/courses to avoid conflict with :id if not careful, but usually static paths go first in Express

module.exports = router;
