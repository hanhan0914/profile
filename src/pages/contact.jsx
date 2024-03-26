import { useState } from 'react';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Card, Tooltip, Modal } from 'antd';
import {
  MailTwoTone,
  GithubOutlined,
  IdcardOutlined,
  WechatOutlined,
} from '@ant-design/icons';
// const { Meta } = Card;

function Contact() {
  const [showQrcode, setShowQrcode] = useState(false);
  const handlePopup = () => {
    setShowQrcode(true);
  };
  const handleCancelPopup = () => {
    setShowQrcode(false);
  };

  return (
    <>
      <div id="contact" className="text-4xl mb-8 text-white">
        Contact Me
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Card
          style={{
            width: '60%',
            textAlign: 'center',
          }}
          cover={
            <img
              alt="example"
              src="image/gray2.jpg"
              style={{ height: '70px', width: '100%' }}
            />
          }
          actions={[
            //   <SettingOutlined key="setting" />,
            <>
              <Tooltip title="My GitHub" placement="top">
                <a
                  href="https://github.com/hanhan0914"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubOutlined key="github" style={{ fontSize: '30px' }} />
                </a>
              </Tooltip>
            </>,
            <>
              <Tooltip title="My Fiverr" placement="top">
                <a
                  href="https://www.fiverr.com/elainechen_dev?up_rollout=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IdcardOutlined style={{ fontSize: '30px' }} />
                </a>
              </Tooltip>
            </>,
            <>
              <Tooltip title="My WeChat" placement="top">
                <WechatOutlined
                  onClick={handlePopup}
                  style={{ fontSize: '30px' }}
                />
              </Tooltip>
            </>,
          ]}
        >
          {/* <Meta
      avatar={<Avatar src="/public/image/girl.png" style={{width:'250px',height:'250px'}} />}
      title="Contact Me!"
      description="This is the description"
      style={{height:'300px'}}
    /> */}
          <div style={{ display: 'flex' }}>
            <Avatar
              src="image/girl.png"
              style={{ width: '30%', height: '80%' }}
            />
            <div
              style={{ width: '60%', marginLeft: '5px', fontFamily: 'fantasy' }}
            >
              <p style={{ textAlign: 'left', fontSize: '1.5vw' }}>
                Elaine Chen
              </p>
              <br />
              <p style={{ textAlign: 'left', fontSize: '1.3vw' }}>
                If you have any ideas to share with me or are interested in
                business collaboration, email me :{' '}
              </p>

              <p style={{ textAlign: 'left', fontSize: '1.3vw' }}>
                <MailTwoTone twoToneColor="	#0072E3" /> amy8611020923@gmail.com
              </p>
              <br />

              <p style={{ textAlign: 'left', fontSize: '1.3vw' }}>
                or contact through following platforms ⇩
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Modal visible={showQrcode} footer={null} onCancel={handleCancelPopup}>
        <p>This is my WeChat QR code. Add me and let's chat!</p>
        <br />
        <img
          src="image/wechat.png"
          style={{ width: '300px', marginLeft: '50px' }}
        />
      </Modal>
    </>
  );
}

export default Contact;
