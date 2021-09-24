import { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import PersonIcon from '../icons/PersonIcon';
import IconButton from '../shared/IconButton';
import DropdownMenu from '../shared/DropdownMenu';

const StyledAccountDropdown = styled.div`
  display: none;
  @media (min-width: 600px) {
    margin-right: .75rem;
    display: block;
    position: relative;
  }
`

const AccountDropdown = () => {
  const accountDropdownRef = useRef();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (isDropdownOpen && accountDropdownRef.current && !accountDropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }

  }, [isDropdownOpen]);

  return(
    <StyledAccountDropdown ref={accountDropdownRef}>
      <IconButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <PersonIcon size="2rem" />
      </IconButton>
      <DropdownMenu isOpen={isDropdownOpen}>
        <ul>
          <li><h6>My Account</h6></li>
          <li>Orders list</li>
          <li>Coupons</li>
          <li>Delivery address</li>
          <li>Payment methods</li>
          <li>Account settings</li>
          <span/>
          <li>Sign Out</li>
        </ul>
      </DropdownMenu>
    </StyledAccountDropdown>
  )
}

export default AccountDropdown;
