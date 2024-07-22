import React, { useState, useEffect } from "react";
import { Result, Button, Spin } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SpinningContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(45deg, #ff00ff, #00ffff);
  animation: gradientBG 15s ease infinite;

  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const StyledResult = styled(Result)`
  .ant-result-title,
  .ant-result-subtitle {
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

const ParallelUniverse = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <SpinningContainer>
        <Spin size="large" tip="Paralel evrene geçiş yapılıyor..." />
      </SpinningContainer>
    );
  }

  return (
    <SpinningContainer>
      <StyledResult
        icon={<span style={{ fontSize: "72px" }}>🌌</span>}
        title="Paralel Evrene Hoş Geldiniz!"
        subTitle="Bu evrende her şey mümkün. Burada, tüm joblar hatasız çalışıyor ve deadlinelar asla yaklaşmıyor!"
        extra={[
          <Button type="primary" key="console">
            <Link to="/">Sıkıcı Gerçek Dünyaya Dön</Link>
          </Button>,
          <Button key="tryAgain">Başka Bir Paralel Evren Dene</Button>,
        ]}
      />
    </SpinningContainer>
  );
};

export default ParallelUniverse;
