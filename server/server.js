const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Job Routes
const jobRoutes = require('./routes/jobs');
app.use('/api/jobs', jobRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
