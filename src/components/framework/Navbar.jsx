import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Anchor, Drawer, Button } from "antd";

const { Link } = Anchor;

export default function AppHeader() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const isProjectPage = location.pathname !== "/";

  return (
    <nav className='container'>
      <div className='header'>
        <section>
          <a className='logo'>CHARLES</a>
          <a className='name'>Bryant</a>
        </section>
        <div className='mobileHidden'>
          <Anchor targetOffset={65}>
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
          >
            {isProjectPage ? (
              <RouterLink className='back-button' to='/' onClick={onClose}>
                BACK
              </RouterLink>
            ) : (
              <Anchor targetOffset={65} onClick={onClose}>
                <Link href='#hero' title='Home' />
                <Link href='#about' title='About' />
                <Link href='#work' title='Work' />
                <Link href='#contact' title='Contact' />
              </Anchor>
            )}
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
