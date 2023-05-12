
import {secondRoute} from '../router';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import {Outlet,NavLink} from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;


function getItem(label,path, key, icon, children) {
  return {
    key,
    icon,
    children,
    label:<NavLink to={path}>{label}</NavLink>
  };
}
function renderHome(secondRoute){
    let arr=[];
    secondRoute && secondRoute.forEach((item,index)=>{
         arr.push(getItem(item.title,item.path, index, item.icon));
    })
    return arr
}

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <h3
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
            lineHeight:'32px',
            color:"#fff",
            fontSize:'20px',
            textAlign:'center'
          }}
        >若依管理系统</h3>
        <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" items={renderHome(secondRoute)} />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
            {localStorage.getItem("user")?"欢迎"+localStorage.getItem("user")+"到来":'未登录'}
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          
          <div
            style={{
              padding: 24,
              minHeight: 360,
              marginTop:20,
              background: colorBgContainer,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Home;