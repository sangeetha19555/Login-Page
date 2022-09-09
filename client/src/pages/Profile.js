import React from "react";
import { DefaultLayout } from "../components/DefaultLayout";
import { Button, Form, message, Tabs } from "antd";
import { PersonalInfo } from "../components/PersonalInfo";

import axios from "axios";
import { API } from "./API";
import "../resources/common.css";

const { TabPane } = Tabs;
export const Profile = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  console.log("Profile Page", user.data._id);

  const onFinish = async (values) => {
    console.log(values, "values........");

    try {
      const result = await axios.post(`${API}api/user/update`, {
        ...values,
        _id: user.data._id,
      });

      localStorage.setItem("userInfo", JSON.stringify(result));
      message.success("Profile updated Successfull");
    } catch (error) {
      message.error("Profile update is Failed");
    }
  };
  return (
    <div>
      <DefaultLayout>
        <div className="profile_layout">
          <div className="update-profile p-4">
            <h4>Update Profile</h4>
            <hr />
            <Form
              layout="vertical"
              onFinish={onFinish}
              initialValues={user.data}
            >
              <Tabs defaultActiveKey="1">
                <TabPane tab="Personal Info" key="1">
                  <PersonalInfo />
                </TabPane>
              </Tabs>
              {/* Button */}
              <Button htmlType="submit" className="blackbutton">
                UPDATE
              </Button>
            </Form>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};
