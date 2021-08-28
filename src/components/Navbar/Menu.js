import { useState } from 'react';
import MenuIcon from '../icons/MenuIcon';
import IconButton from '../shared/IconButton';
import MenuCard from '../shared/MenuCard';
import MenuCardHeader from '../shared/MenuCardHeader';

const Menu = () => {
  const [menuToggleState, setMenuToggleState] = useState(false);

  const handleMenuToggleChange = () => {
    setMenuToggleState(!menuToggleState);
  }

  return(
    <>
      <IconButton onClick={handleMenuToggleChange}>
        <MenuIcon size ="2.2rem"/>
      </IconButton>
      <MenuCard position="right" isOpen={menuToggleState} onToggleChange={handleMenuToggleChange}>
        <MenuCardHeader onToggleChange={handleMenuToggleChange}>Quick Links</MenuCardHeader>
      </MenuCard>
    </>
  )
}

export default Menu;
