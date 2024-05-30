import AppHeader from "./components/framework/Navbar";
import AppFooter from "./components/framework/Footer";

import { Outlet } from "react-router-dom";

import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

import "./Root.scss";
import "antd/dist/reset.css";

export default function Root() {
  return (
    <>
      <Layout className='main-layout'>
        <Header className='header'>
          <AppHeader />
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer className='footer'>
          <AppFooter />
        </Footer>
      </Layout>
    </>
  );
}
