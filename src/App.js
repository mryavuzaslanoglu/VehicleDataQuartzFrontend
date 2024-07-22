import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import Dashboard from "./pages/Dashboard";
import JobManagement from "./pages/JobManagement";
import NotFound from "./pages/NotFound";
import ParallelUniverse from "./pages/ParallelUniverse";

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">Job Yönetimi</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/dashboard">Dahsboard</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
          <Routes>
            <Route path="/" element={<JobManagement />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/jobs" element={<JobManagement />} />
            <Route path="/parallel-universe" element={<ParallelUniverse />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Job Management System ©{new Date().getFullYear()} Created by Your
        Company
      </Footer>
    </Layout>
  );
};

export default App;
