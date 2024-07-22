import axios from "axios";

const API_URL = "http://localhost:5105/api/JobDetail";

export const fetchJobs = async () => {
  const response = await axios.get(`${API_URL}/find-all`);
  return response.data.payload;
};

export const fetchRunningJobs = async () => {
  const response = await axios.get(`${API_URL}/running-jobs`);
  return response.data.payload.map((job) => job.jobId);
};

export const startStopJob = async (id, action) => {
  await axios.post(`${API_URL}/${action}-job/${id}`);
};

export const deleteJob = async (id) => {
  await axios.delete(`${API_URL}/delete/${id}`);
};

export const updateJob = async (job) => {
  await axios.put(`${API_URL}/update`, job);
};

export const createJob = async (job) => {
  await axios.post(`${API_URL}/create-job`, job);
};
