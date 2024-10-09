// Simulating job data, replace with a database query later
const jobs = [
    { id: 1, title: 'Frontend Developer', details: 'Remote, React.js experience required' },
    { id: 2, title: 'Backend Developer', details: 'Node.js and Express.js required' },
    { id: 3, title: 'UX/UI Designer', details: 'Experience with Figma required' },
  ];
  
  // Get all jobs
  const getAllJobs = (req, res) => {
    res.json(jobs);
  };
  
  // Create a new job
  const createJob = (req, res) => {
    const newJob = req.body;
    jobs.push(newJob);
    res.status(201).json(newJob);
  };
  
  module.exports = { getAllJobs, createJob };
  