import React, { useState } from "react";
import { Modal, Form ,Select,Input} from "antd";
import Layout from "../components/Layout";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Layout>
      <div className="filters">
        <div>range filters</div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            add new
          </button>
        </div>
      </div>
      <div className="content"></div>
      <Modal
        title="Add transection"
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Amount" name="amount">
            <input type="text" />
          </Form.Item>

          <Form.Item label="type" name="type">
            <Select>
              
              <Select.Option value="income">
                Income
              </Select.Option>
              <Select.Option value="expense">
                Expense
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Category" name="category">
            <Select>
              
              <Select.Option value="salary">
                salary
              </Select.Option>
              <Select.Option value="tip">
                tip
              </Select.Option>
              <Select.Option value="project">
                project
              </Select.Option>
              <Select.Option value="food">
                food
              </Select.Option>
              <Select.Option value="movie">
                movie
              </Select.Option>
              <Select.Option value="bills">
                bills
              </Select.Option>
              <Select.Option value="medical">
                medical
              </Select.Option>
              <Select.Option value="fees">
                fees
              </Select.Option>
              <Select.Option value="tax">
                tax
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Date" name="date">
            <Input type='date' />
          </Form.Item>
          <Form.Item label="Reference" name="reference">
          <Input type="text"/>
          </Form.Item>
          <Form.Item label="description" name="description">
          <Input type="text"/>
          </Form.Item>
          <div className="d-flex justify-content-end">
            <button type='submit' className="btn btn-primary">Save</button>
          </div>
        </Form>
      </Modal>
    </Layout>
  );
};

export default HomePage;
