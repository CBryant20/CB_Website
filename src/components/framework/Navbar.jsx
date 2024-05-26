import { useState } from "react";

import { Anchor, Drawer, Button } from "antd";

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
    <nav className='container'>
      <div className='header'>
        <section>
          <a className='logo' href='http://charleswbryant.com'>
            CHARLES
          </a>
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
            <Anchor targetOffset='65' items={anchorItems} />
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
