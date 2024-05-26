import { useState } from "react";

import { Anchor, Drawer, Button } from "antd";
const { Link } = Anchor;

import CBlogo from "../images/CBlogo.png";

export default function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav>
      <div>
        <section>
          <a>CHARLES</a>
          <a>Bryant</a>
        </section>
        <div className='mobileHidden'>
          <Anchor targetOffset='65'>
            <Link href='#Hero' title='Home' />
            <Link href='#About' title='About' />
            <Link href='#Work' title='Work' />
            <Link href='#Contact' title='Contact' />
          </Anchor>
        </div>
        <div className='mobileVisible'>
          <Button type='primary' onClick={showDrawer}>
            <img src={CBlogo} alt='CB Logo' />
          </Button>
          <Drawer
            placement='right'
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset='65'>
              <Link href='#Hero' title='Home' />
              <Link href='#About' title='About' />
              <Link href='#Work' title='Work' />
              <Link href='#Contact' title='Contact' />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
