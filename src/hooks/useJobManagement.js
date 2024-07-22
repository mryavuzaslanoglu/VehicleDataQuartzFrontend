import { useState, useEffect } from "react";
import { message } from "antd";
import * as jobService from "../services/jobService";

const useJobManagement = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [runningJobs, setRunningJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
    fetchRunningJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const jobs = await jobService.fetchJobs();
      setData(jobs);
      setLoading(false);
    } catch (error) {
      message.error("Job detayları alınamadı");
      setLoading(false);
    }
  };

  const fetchRunningJobs = async () => {
    try {
      const jobs = await jobService.fetchRunningJobs();
      setRunningJobs(jobs);
    } catch (error) {
      message.error("Çalışan joblar alınamadı");
    }
  };

  const handleJobStartStop = async (id, action) => {
    try {
      await jobService.startStopJob(id, action);
      message.success(
        `Job başarıyla ${action === "start" ? "başlatıldı" : "durduruldu"}`
      );
      fetchRunningJobs();
    } catch (error) {
      message.error(
        `Job ${action === "start" ? "başlatılamadı" : "durdurulamadı"}`
      );
    }
  };

  const handleDeleteJob = async (id) => {
    try {
      await jobService.deleteJob(id);
      message.success("Job başarıyla silindi");
      fetchJobs();
    } catch (error) {
      message.error("Job silinemedi");
    }
  };

  const handleSaveJob = async (job, isEditing) => {
    try {
      if (isEditing) {
        await jobService.updateJob(job);
        message.success("Job başarıyla güncellendi");
      } else {
        await jobService.createJob(job);
        message.success("Job başarıyla oluşturuldu");
      }
      fetchJobs();
    } catch (error) {
      message.error("Job güncellenemedi veya oluşturulamadı");
    }
  };

  return {
    data,
    loading,
    runningJobs,
    handleJobStartStop,
    handleDeleteJob,
    handleSaveJob,
    fetchJobs,
    fetchRunningJobs,
  };
};

export default useJobManagement;
