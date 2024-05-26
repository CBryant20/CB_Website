import { Outlet } from "react-router-dom";

import AppHeader from "./components/framework/Navbar";
// import AppFooter from "./components/framework/Footer";
import AppHome from "./components/views/Home";
// import Sidebar from "./components/framework/Sidebar";

import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

// import "antd/dist/antd.css";

export default function Root() {
  return (
    <>
      <Layout className='mainLayout'>
        <Header>
          <AppHeader />
        </Header>
        <Content>
          {/* <aside>
            <Sidebar />
          </aside> */}
          <section>
            <AppHome />
            <Outlet />
          </section>
        </Content>
        {/* <Footer>
          <AppFooter />
        </Footer> */}
      </Layout>
    </>
  );
}
