
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { MailFilled} from '@ant-design/icons'
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
        style={{height:'70px',width:'800px'}}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    {/* <Meta
      avatar={<Avatar src="/public/image/girl.png" style={{width:'250px',height:'250px'}} />}
      title="Contact Me!"
      description="This is the description"
      style={{height:'300px'}}
    /> */}
    <div style={{display:'flex'}}>
    <Avatar src="/public/image/girl.png" style={{width:'250px',height:'250px'}} />
    <div className='ml-40 mt-7'>
        <p className='text-2xl'>Elaine Chen</p>
        <p><MailFilled /> amy8611020923@gmail.com</p>
        <p>222</p>
        <p>333</p>
    </div>
    </div>
  </Card>
  </div>
  </>
    )

}

export default Contact