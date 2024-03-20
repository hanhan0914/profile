
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;



function Contact(){
    
  

    return(
        <>
        <div style={{border:'solid 1px green'}}>
      <div>Contact Me!</div>
      <Card
    style={{
      width: 800,
      
    }}
    cover={
      <img
        alt="example"
        src="/public/image/gray2.jpg"
        style={{height:'80px',width:'800px'}}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="Contact Me!"
      description="This is the description"
      style={{height:'300px'}}
    />
  </Card>
  </div>
  </>
    )

}

export default Contact