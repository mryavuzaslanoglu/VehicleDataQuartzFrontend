import React, { useState, useEffect } from "react";
import { Row, Col, Card, Statistic, List } from "antd";
import {
  ClockCircleOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalJobs: 0,
    runningJobs: 0,
    completedJobs: 0,
    failedJobs: 0,
  });

  const [recentJobs, setRecentJobs] = useState([]);

  useEffect(() => {
    setStats({
      totalJobs: 100,
      runningJobs: 15,
      completedJobs: 80,
      failedJobs: 5,
    });

    setRecentJobs([
      { id: 1, name: "Job 1", status: "Completed" },
      { id: 2, name: "Job 2", status: "Running" },
      { id: 3, name: "Job 3", status: "Failed" },
      { id: 4, name: "Job 4", status: "Completed" },
      { id: 5, name: "Job 5", status: "Running" },
    ]);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic title="Total Jobs" value={stats.totalJobs} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Running Jobs"
              value={stats.runningJobs}
              valueStyle={{ color: "#1890ff" }}
              prefix={<ClockCircleOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Completed Jobs"
              value={stats.completedJobs}
              valueStyle={{ color: "#3f8600" }}
              prefix={<CheckCircleOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Failed Jobs"
              value={stats.failedJobs}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ExclamationCircleOutlined />}
            />
          </Card>
        </Col>
      </Row>
      <h2 style={{ marginTop: "20px" }}>Recent Jobs</h2>
      <List
        bordered
        dataSource={recentJobs}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.name}
              description={`Status: ${item.status}`}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Dashboard;
