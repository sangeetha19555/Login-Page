import React, { useEffect, useState } from "react";
import { Form, Input, Button, message, Spin } from "antd";
import "../resources/authentication.css";
import "../resources/common.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "./API";
export const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log(values);
    setLoading(true);
    try {
      const user = await axios.post(`${API}api/user/login`, values);
      message.success("Login Successfully");
      localStorage.setItem("userInfo", JSON.stringify(user));
      setLoading(false);
      navigate("/profile");
    } catch (error) {
      setLoading(false);
      message.error("Login Failed");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      navigate("/profile");
    }
  });

  return (
    <div className="login_signup_container">
      <div className="login_signup_container_btn">
        <Link to="/mainpage" className="login_signup_main_btn">
          Back to Homepage
        </Link>
      </div>
      <div className="auth-parent">
        {loading && <Spin size="large" className="loading_spin" />}
        <Form layout="vertical" onFinish={onFinish}>
          <h1>Login</h1>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password" type="password">
            <Input.Password />
          </Form.Item>

          <div className="d-flex justify-content-sm-between  mb-2">
            <Link to="/register">Click Here To Register</Link>

            <Button type="primary" htmlType="submit" className="blackbutton">
              LOGIN
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
