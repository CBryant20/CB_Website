import { Outlet } from "react-router-dom";

import AppHeader from "./components/framework/Navbar";
import AppFooter from "./components/framework/Footer";
import AppHome from "./components/views/Home";

import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

import "./Root.scss";

export default function Root() {
  return (
    <>
      <Layout className='main-layout'>
        <Header className='header'>
          <AppHeader />
        </Header>
        <Content>
          <section>
            <AppHome />
            <Outlet />
          </section>
        </Content>
        <Footer className='footer'>
          <AppFooter />
        </Footer>
      </Layout>
    </>
  );
}
