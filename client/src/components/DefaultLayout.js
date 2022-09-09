import { Button, Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../resources/defaultLayout.css";
export const DefaultLayout = (props) => {
  // const user = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/home">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("userInfo");
          navigate("/login");
        }}
      >
        <sapn>Logout</sapn>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="layout">
      <div className="header">
        <h1 onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
          CV
        </h1>

        <Dropdown overlay={menu} placement="bottomLeft">
          <Button className="menu-btn ">
            <span className="profile-box">
              <UserOutlined />
            </span>
          </Button>
        </Dropdown>
      </div>

      <div className="content">{props.children}</div>
    </div>
  );
};
