import React from "react";
import { Modal, Button } from "antd";
import moment from "moment";

const JobDetailModal = ({ visible, onCancel, job }) => {
  return (
    <Modal
      title="Job Detayları"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Kapat
        </Button>,
      ]}
    >
      {job && (
        <div>
          <p>
            <strong>ID:</strong> {job.id}
          </p>
          <p>
            <strong>Job ID:</strong> {job.jobId}
          </p>
          <p>
            <strong>Job Name:</strong> {job.jobName}
          </p>
          <p>
            <strong>Triggered URL:</strong> {job.triggeredUrl}
          </p>
          <p>
            <strong>Cron Expression:</strong> {job.cronExpression}
          </p>
          <p>
            <strong>Başlangıç Tarihi:</strong>{" "}
            {moment(job.startTime).format("YYYY-MM-DD HH:mm:ss")}
          </p>
          <p>
            <strong>Bitiş Tarihi:</strong>{" "}
            {moment(job.endTime).format("YYYY-MM-DD HH:mm:ss")}
          </p>
        </div>
      )}
    </Modal>
  );
};

export default JobDetailModal;
