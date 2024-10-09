const express = require('express');
const router = express.Router();
const { getAllJobs, createJob } = require('../controllers/jobsController');

// GET all jobs
router.get('/', getAllJobs);

// POST a new job
router.post('/', createJob);

module.exports = router;
