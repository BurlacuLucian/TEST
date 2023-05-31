import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import React, { useState } from "react";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const NewPage: React.FC = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);

  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{ maxWidth: 600 }}
      >
        <br></br>
        <Form.Item label="Payment">
          <Radio.Group>
            <Radio value="apple"> Cash </Radio>
            <Radio value="pear"> Credit/Debit Card </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Form.Item label="Surname">
          <Input />
        </Form.Item>
        <Form.Item label="Location">
          <TreeSelect
            treeData={[
              {
                title: "Anenii Noi",
                value: "aneniinoi",
                children: [{ title: "Floreni", value: "floreni" }],
              },
              {
                title: "Causeni",
                value: "causeni",
                children: [
                  { title: "Ciuflesti", value: "ciuflesti" },
                  { title: "Cainari", value: "cainari" },
                  { title: "Taraclia", value: "taraclia" },
                ],
              },
              {
                title: "Nisporeni",
                value: "nisporeni",
                children: [
                  { title: "Balauresti", value: "balauresti" },
                  { title: "Zberoaia", value: "zberoaia" },
                ],
              },
            ]}
          />
        </Form.Item>

        <Form.Item label="When">
          <RangePicker />
        </Form.Item>
        <Form.Item label="People">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Coments">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Accept" valuePropName="checked">
          <Switch />
          <p>
            The money left in advance is not returned. Information about you is
            strictly confidential.
          </p>
        </Form.Item>
        <Form.Item
          label="Passport photo"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item >
          <Button >Reserve</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <NewPage />;
