import React from 'react';
import { Card, Space } from 'antd';
import classes from './Home.module.css';



const Home: React.FC = () => (
  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
    <Card className={classes.card} title="Himalayan mountains" size="small">
      <p>Card content</p>
      <img className={classes.img} src='https://i.natgeofe.com/n/c9107b46-78b1-4394-988d-53927646c72b/1095.jpg'/>
    </Card>
    <Card className={classes.card} title="Card" size="small">
      <p>Card content</p>
      <img className={classes.img} src='https://i.natgeofe.com/n/c9107b46-78b1-4394-988d-53927646c72b/1095.jpg'/>
    </Card>
    <Card className={classes.card} title="Card" size="small">
      <p>Card content</p>
      <img className={classes.img} src='https://i.natgeofe.com/n/c9107b46-78b1-4394-988d-53927646c72b/1095.jpg'/>
    </Card>
  </Space>
);

export default Home;