import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { TextArea } = Input;
const Contact = () => {

  function onFinish(values) {
    console.log('Received values of form: ', values);
  }

  return (
      <div className="block contactBlock" id="appContact">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Get in Touch</h2>
            <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum</p>
          </div>
          <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
          >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Full Name!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Full Name" />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your Email!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            <Form.Item
                name="phone">
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Phone" />
            </Form.Item>
            <Form.Item
                name="subject"
                rules={[{ required: true, message: 'Please input your Subject!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Subject" />
            </Form.Item>
            <Form.Item name="message">
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('I agree with terms and conditions')),
                  },
                ]}
            >
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
  );
}
export default Contact;