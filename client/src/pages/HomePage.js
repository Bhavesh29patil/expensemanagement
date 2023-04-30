import React, { useState, useEffect } from "react";
import { Modal, Form, Select, Input, message, Table ,DatePicker} from "antd";
import Layout from "../components/Layout";
import axios from "axios";
import Spinner from "../components/Spinner";
const {RangePicker}= DatePicker;

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allTransection, setAllTransection] = useState([]);
  const [frequency, setFrequency] = useState("7");
  const [selectedDates,setselectedDates] = useState([])

  //table data
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Category",
      dataIndex: "date",
    },
    {
      title: "Reference",
      dataIndex: "reference",
    },
    {
      title: "Actions",
    },
  ];

  //useEffecct Hook

  useEffect(() => {
    const getALLTransaction = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        setLoading(true);
        const res = await axios.post("/transection/get-transection", {
          userid: user._id,
          frequency,
          selectedDates,
        });
        setLoading(false);
        setAllTransection(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
        setLoading(false);

        message.error("fetch issue with transection");
      }
    };
    getALLTransaction();
  }, [frequency,selectedDates]);

  const handleSubmit = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      setLoading(true);
      await axios.post("/transection/add-transection", {
        ...values,
        userid: user._id,
      });
      setLoading(false);
      message.success("Transection Added Successfully");
      setShowModal(false);
    } catch (error) {
      setLoading(false);
      message.error("failed to add transection");
    }
  };

  return (
    <Layout>
      {loading && <Spinner />}
      <div className="filters">
        <div>
          <h6>Select Frequency</h6>
          <Select value={frequency} onChange={(values) => setFrequency(values)}>
            <Select.Option value="7">Last 1 week</Select.Option>
            <Select.Option value="30">Last 1 month</Select.Option>
            <Select.Option value="365">Last 1 year</Select.Option>
            <Select.Option value="custom">custom</Select.Option>
          </Select>
          {frequency === 'custom '&& <RangePicker value={selectedDates} onChange={(values)=>setselectedDates(values)}/>}
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            add new
          </button>
        </div>
      </div>
      <div className="content">
        <Table columns={columns} dataSource={allTransection} />
      </div>
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
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="expense">Expense</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Category" name="category">
            <Select>
              <Select.Option value="salary">salary</Select.Option>
              <Select.Option value="tip">tip</Select.Option>
              <Select.Option value="project">project</Select.Option>
              <Select.Option value="food">food</Select.Option>
              <Select.Option value="movie">movie</Select.Option>
              <Select.Option value="bills">bills</Select.Option>
              <Select.Option value="medical">medical</Select.Option>
              <Select.Option value="fees">fees</Select.Option>
              <Select.Option value="tax">tax</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Date" name="date">
            <Input type="date" />
          </Form.Item>
          <Form.Item label="Reference" name="reference">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="description" name="description">
            <Input type="text" />
          </Form.Item>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </Form>
      </Modal>
    </Layout>
  );
};

export default HomePage;
