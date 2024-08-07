import { useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Anchor, Drawer, Button } from "antd";

const { Link } = Anchor;

export default function AppHeader() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleNavigation = (e, href) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { state: { target: href } });
    } else {
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
    setVisible(false);
  };

  return (
    <nav className='container'>
      <div className='header'>
        <section>
          <a className='logo'>CHARLES</a>
          <a className='name'>Bryant</a>
        </section>
        <div className='mobileHidden'>
          <Anchor
            targetOffset={65}
            onClick={(e) => handleNavigation(e, e.target.getAttribute("href"))}
          >
            <Link href='#hero' title='Home' />
            <Link href='#about' title='About' />
            <Link href='#work' title='Work' />
            <Link href='#contact' title='Contact' />
          </Anchor>
        </div>
        <div className='mobileVisible'>
          <Button type='primary' onClick={showDrawer} className='menu-button'>
            <span className='material-symbols-outlined'>menu</span>
          </Button>
          <Drawer
            placement='right'
            closable={false}
            onClose={onClose}
            open={visible}
            className='drawer'
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              height: "100vh",
              width: "80vw",
              maxWidth: "400px",
            }}
          >
            <div style={{ paddingRight: 0 }}>
              <Anchor
                targetOffset={65}
                onClick={(e) =>
                  handleNavigation(e, e.target.getAttribute("href"))
                }
              >
                <Link href='#hero' title='Home' />
                <Link href='#about' title='About' />
                <Link href='#work' title='Work' />
                <Link href='#contact' title='Contact' />
              </Anchor>
            </div>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
