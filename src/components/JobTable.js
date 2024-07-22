import React from "react";
import { Table, Button, Tooltip, Popconfirm } from "antd";
import moment from "moment";

const JobTable = ({
  data,
  loading,
  runningJobs,
  onStartStop,
  onDelete,
  onEdit,
  onView,
}) => {
  const isJobExpired = (endTime) => {
    return moment(endTime).isBefore(moment());
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Job ID", dataIndex: "jobId", key: "jobId" },
    { title: "Job Name", dataIndex: "jobName", key: "jobName" },
    {
      title: "Cron Expression",
      dataIndex: "cronExpression",
      key: "cronExpression",
    },
    {
      title: "Başlangıç Tarihi",
      dataIndex: "startTime",
      key: "startTime",
      render: (text) => moment(text).format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      title: "Bitiş Tarihi",
      dataIndex: "endTime",
      key: "endTime",
      render: (text) => moment(text).format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      title: "Status",
      key: "status",
      render: (_, record) =>
        runningJobs.includes(record.jobId) ? (
          <i className="fas fa-circle" style={{ color: "green" }}></i>
        ) : (
          <i className="fas fa-circle" style={{ color: "red" }}></i>
        ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div>
          <Tooltip
            title={
              isJobExpired(record.endTime)
                ? "Zamanı geçmiş job çalıştırılamaz"
                : runningJobs.includes(record.jobId)
                ? "Jobı Durdur"
                : "Jobı Başlat"
            }
          >
            <Popconfirm
              title={`Jobı ${
                runningJobs.includes(record.jobId) ? "durdurmak" : "başlatmak"
              } istediğinize emin misiniz?`}
              onConfirm={() =>
                onStartStop(
                  record.id,
                  runningJobs.includes(record.jobId) ? "stop" : "start"
                )
              }
              okText="Evet"
              cancelText="Hayır"
              disabled={isJobExpired(record.endTime)}
            >
              <Button
                icon={
                  <i
                    className={`fas ${
                      runningJobs.includes(record.jobId)
                        ? "fa-pause"
                        : "fa-play"
                    }`}
                  ></i>
                }
                disabled={isJobExpired(record.endTime)}
              />
            </Popconfirm>
          </Tooltip>
          <Tooltip title="Jobı Sil">
            <Popconfirm
              title="Jobı silmek istediğinize emin misiniz?"
              onConfirm={() => onDelete(record.id)}
              okText="Evet"
              cancelText="Hayır"
            >
              <Button icon={<i className="fas fa-trash"></i>} />
            </Popconfirm>
          </Tooltip>
          <Tooltip title="Düzenle ve Görüntüle">
            <Button
              icon={<i className="fas fa-edit"></i>}
              onClick={() => onEdit(record)}
            />
          </Tooltip>
          <Tooltip title="Job Detayları">
            <Button
              icon={<i className="fas fa-eye"></i>}
              onClick={() => onView(record)}
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={data} rowKey="id" loading={loading} />
  );
};

export default JobTable;
