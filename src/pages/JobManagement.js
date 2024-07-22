import React, { useState } from "react";
import { Form, message } from "antd";
import moment from "moment";
import Toolbar from "../components/Toolbar";
import JobTable from "../components/JobTable";
import JobModal from "../components/JobModal";
import JobDetailModal from "../components/JobDetailModal";
import useJobManagement from "../hooks/useJobManagement";
import "@fortawesome/fontawesome-free/css/all.min.css";

const JobManagement = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [viewingJob, setViewingJob] = useState(null);
  const [form] = Form.useForm();
  const [searchId, setSearchId] = useState("");

  const {
    data,
    loading,
    runningJobs,
    handleJobStartStop,
    handleDeleteJob,
    handleSaveJob,
    fetchJobs,
  } = useJobManagement();

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingJob(null);
    form.resetFields();
  };

  const handleDetailCancel = () => {
    setIsDetailModalVisible(false);
    setViewingJob(null);
  };

  const handleSave = async () => {
    try {
      const values = await form.validateFields();
      const updatedJob = {
        ...values,
        startTime: values.startTime.format("YYYY-MM-DDTHH:mm:ss"),
        endTime: values.endTime.format("YYYY-MM-DDTHH:mm:ss"),
      };

      await handleSaveJob(updatedJob, editingJob !== null);
      message.success(
        `Job başarıyla ${editingJob ? "güncellendi" : "oluşturuldu"}`
      );
      handleCancel();
      fetchJobs();
    } catch (error) {
      console.error("Validation failed:", error);
      message.error("Job kaydedilemedi. Lütfen tüm alanları doldurun.");
    }
  };

  const handleEdit = (record) => {
    setEditingJob(record);
    form.setFieldsValue({
      ...record,
      startTime: moment(record.startTime),
      endTime: moment(record.endTime),
    });
    setIsModalVisible(true);
  };

  const handleView = (record) => {
    setViewingJob(record);
    setIsDetailModalVisible(true);
  };

  const handleAddNew = () => {
    setEditingJob(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const filteredData = data.filter((item) =>
    item.id.toString().includes(searchId)
  );

  return (
    <>
      <Toolbar
        searchId={searchId}
        setSearchId={setSearchId}
        onAddNew={handleAddNew}
      />
      <JobTable
        data={filteredData}
        loading={loading}
        runningJobs={runningJobs}
        onStartStop={handleJobStartStop}
        onDelete={handleDeleteJob}
        onEdit={handleEdit}
        onView={handleView}
      />
      <JobModal
        visible={isModalVisible}
        onCancel={handleCancel}
        onSave={handleSave}
        form={form}
        editingJob={editingJob}
      />
      <JobDetailModal
        visible={isDetailModalVisible}
        onCancel={handleDetailCancel}
        job={viewingJob}
      />
    </>
  );
};

export default JobManagement;
