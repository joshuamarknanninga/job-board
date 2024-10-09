export const fetchJobs = async () => {
    try {
      const response = await fetch('/api/jobs');
      const jobs = await response.json();
      return jobs;
    } catch (error) {
      console.error('Error fetching jobs:', error);
      return [];
    }
  };
  