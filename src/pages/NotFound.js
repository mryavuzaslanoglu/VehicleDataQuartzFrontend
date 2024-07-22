import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledResult = styled(Result)`
  .ant-result-image {
    height: 300px;
    margin-bottom: 32px;
    img {
      height: 100%;
    }
  }
`;

const NotFound = () => {
  return (
    <StyledResult
      status="404"
      title="404 - Sayfa Bulunamadı"
      subTitle="Üzgünüz, aradığınız sayfayı bulamadık. Belki de bir paralel evrende mevcuttur?"
      extra={[
        <Button type="primary" key="console">
          <Link to="/">Ana Sayfaya Dön</Link>
        </Button>,
        <Button key="parallelUniverse">
          <Link to="/parallel-universe">Paralel Evrene Git</Link>
        </Button>,
      ]}
    />
  );
};

export default NotFound;
