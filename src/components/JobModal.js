import React from "react";
import { Modal, Form, Input, DatePicker, Button } from "antd";
import moment from "moment";

const JobModal = ({ visible, onCancel, onSave, form, editingJob }) => {
  return (
    <Modal
      title={editingJob ? "Job Düzenle" : "Job Oluştur"}
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          İptal Et
        </Button>,
        <Button key="submit" type="primary" onClick={onSave}>
          Kaydet
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        {editingJob && (
          <Form.Item label="ID" name="id">
            <Input disabled />
          </Form.Item>
        )}
        {editingJob && (
          <Form.Item label="Job ID" name="jobId">
            <Input disabled />
          </Form.Item>
        )}
        <Form.Item
          label="Job Name"
          name="jobName"
          rules={[{ required: true, message: "Lütfen job adını girin!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Triggered URL"
          name="triggeredUrl"
          rules={[{ required: true, message: "Lütfen Triggered URL girin!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Cron Expression"
          name="cronExpression"
          rules={[{ required: true, message: "Lütfen cron ifadesini girin!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Başlangıç Tarihi"
          name="startTime"
          rules={[
            { required: true, message: "Lütfen başlangıç tarihini girin!" },
          ]}
        >
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>
        <Form.Item
          label="Bitiş Tarihi"
          name="endTime"
          rules={[{ required: true, message: "Lütfen bitiş tarihini girin!" }]}
        >
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default JobModal;
