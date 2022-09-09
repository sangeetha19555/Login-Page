import { Form, Input } from "antd";
import React from "react";

export const PersonalInfo = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <Form.Item
            name="firstName"
            label="FirstName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-6">
          <Form.Item
            name="lastName"
            label="LasttName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-6">
          <Form.Item
            name="age"
            label="Age"
            rules={[
              {
                required: true,
                message: "Please input your Age",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        <div className="col-md-6">
          <Form.Item
            name="mobileNumber"
            label="Mobile Number"
            rules={[
              {
                required: true,
                message: "Please input your mobile number!",
              },
            ]}
          >
            <Input placeholder="e.g. 9123456780" />
          </Form.Item>
        </div>
        <div className="col-md-6">
          <Form.Item name="dob" label="D.O.B" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-6">
          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </div>
      </div>
    </div>
  );
};
