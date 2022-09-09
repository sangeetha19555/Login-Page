import { Form, Input } from "antd";
import React from "react";

const { TextArea } = Input;
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
        {/* <div className="col-md-4">
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
        </div> */}

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
        {/* 
        <div className="col-md-4">
          <Form.Item
            name="portfolio"
            label="Portfolio"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div> 
        <div className="col-md-12">
          <Form.Item
            name="carrierobjective"
            label="Carrier Objective"
            rules={[{ required: true }]}
          >
            <TextArea />
          </Form.Item>
        </div>
        <div className="col-md-12">
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true }]}
          >
            <TextArea />
          </Form.Item>
        </div> */}
      </div>
    </div>
  );
};
