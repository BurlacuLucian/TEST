import React from "react";
import { Layout, Space } from "antd";
import classes from "./Footer.module.css";

const { Footer } = Layout;


const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

const FooterElement: React.FC = () => (
  <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
    <Layout>
      <Footer className={classes.footer} >Test@test.com</Footer>
    </Layout>
  </Space>
);

export default FooterElement;
