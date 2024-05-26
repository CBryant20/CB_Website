import { useState } from "react";

import { Anchor, Drawer, Button } from "antd";
const { Link } = Anchor;

import CBlogo from "../../images/CBlogo.png";

export default function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const anchorItems = [
    { key: "hero", href: "#Hero", title: "Home" },
    { key: "about", href: "#About", title: "About" },
    { key: "work", href: "#Work", title: "Work" },
    { key: "contact", href: "#Contact", title: "Contact" },
  ];

  return (
    <nav>
      <div>
        <section>
          <a>CHARLES</a>
          <a>Bryant</a>
        </section>
        <div className='mobileHidden'>
          <Anchor targetOffset='65' items={anchorItems} />
        </div>
        <div className='mobileVisible'>
          <Button type='primary' onClick={showDrawer}>
            <a href='#' className='material-symbols-outlined'>
              menu
            </a>
          </Button>
          <Drawer
            placement='right'
            closable={false}
            onClose={onClose}
            open={visible}
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
