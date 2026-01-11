const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/auth');
const {
    createTeacher,
    getAllTeachers,
    getAllStudents
} = require('../controllers/adminController');

router.use(protect);
router.use(admin);

router.post('/teachers', createTeacher);
router.get('/teachers', getAllTeachers);
router.get('/students', getAllStudents);

module.exports = router;
