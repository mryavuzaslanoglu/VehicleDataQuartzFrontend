import React from "react";
import { Input, Button, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Toolbar = ({ searchId, setSearchId, onAddNew }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
      }}
    >
      <Input
        placeholder="ID ile ara"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        style={{ width: 200 }}
      />
      <Tooltip title="Yeni Job">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={onAddNew}
          shape="circle"
        />
      </Tooltip>
    </div>
  );
};

export default Toolbar;
