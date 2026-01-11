const Course = require('../models/Course');
const User = require('../models/User');

// @desc    Create a new course
// @route   POST /api/courses
// @access  Private (Teacher/Admin)
const createCourse = async (req, res) => {
    try {
        const {
            title,
            subtitle,
            description,
            category,
            level,
            language,
            price,
            currency,
            sections,
            thumbnail
        } = req.body;

        const course = await Course.create({
            title,
            subtitle,
            description,
            category,
            level,
            language,
            price,
            currency,
            sections,
            thumbnail,
            instructor: req.user._id,
            status: 'Active' // Default to Active for now
        });

        res.status(201).json(course);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error: ' + error.message });
    }
};

// @desc    Get all courses (Public)
// @route   GET /api/courses
// @access  Public
const getAllCourses = async (req, res) => {
    try {
        const { keyword, category } = req.query;
        let query = { status: 'Active' };

        if (keyword) {
            query.title = { $regex: keyword, $options: 'i' };
        }
        if (category && category !== 'All') {
            query.category = category;
        }

        const courses = await Course.find(query)
            .populate('instructor', 'username email')
            .sort({ createdAt: -1 });

        res.json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Get courses by logged in teacher
// @route   GET /api/courses/my-courses
// @access  Private (Teacher)
const getTeacherCourses = async (req, res) => {
    try {
        const courses = await Course.find({ instructor: req.user._id })
            .sort({ createdAt: -1 });
        res.json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Get single course
// @route   GET /api/courses/:id
// @access  Public
const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id)
            .populate('instructor', 'username email profilePicture')
            .populate('reviews.user', 'username profilePicture');

        if (course) {
            res.json(course);
        } else {
            res.status(404).json({ message: 'Course not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    createCourse,
    getAllCourses,
    getTeacherCourses,
    getCourseById
};
