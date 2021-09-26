import { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import Button from '../shared/Button';
import IconButton from '../shared/IconButton';
import SearchIcon from '../icons/SearchIcon';
import DropdownMenu from '../shared/DropdownMenu';

const StyledSearchBar = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 1.25rem;
  height: 2.5rem;
  margin-left: .5rem;
  padding: 0 3px;
  &:focus-within {
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, .25);
  }
  @media (min-width: 600px) {
    margin-right: .5rem;
  }
`
const StyledCategoriesDropdown = styled.div`
  position: relative;
`
const StyledButton = styled(Button)`
  min-width: 126px;
`
const StyledInput = styled.input`
  flex-grow: 1;
  margin-left: .5rem;
  width: 0;
  height: 2rem;
  font-size: 1rem;
  line-height: 2rem;
  font-family: inherit;
  border: none;
  outline: none;
`
const StyleIconButton = styled(IconButton)`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`
const SearchBar = () => {
  const categoriesDropdownRef = useRef();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (isDropdownOpen && categoriesDropdownRef.current && !categoriesDropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }

  }, [isDropdownOpen]);

  return(
    <StyledSearchBar>
      <StyledCategoriesDropdown ref={categoriesDropdownRef}>
        <StyledButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>{selectedCategory}</StyledButton>
        <DropdownMenu isOpen={isDropdownOpen}>
          <ul>
            <li onClick={() => setSelectedCategory("All Categories")}><h6>All Categories</h6></li>
            <span/>
            <li onClick={() => setSelectedCategory("Home")}><h6>Home</h6></li>
            <li onClick={() => setSelectedCategory("Lamps")}>Lamps</li>
            <li onClick={() => setSelectedCategory("Decoration")}>Decorations</li>
            <li onClick={() => setSelectedCategory("Decoration")}>Carpets</li>
            <li onClick={() => setSelectedCategory("Paint")}>Paint</li>
            <span/>
            <li onClick={() => setSelectedCategory("Furniture")}><h6>Furniture</h6></li>
            <li onClick={() => setSelectedCategory("Livingroom")}>Livingroom</li>
            <li onClick={() => setSelectedCategory("Bedroom")}>Bedroom</li>
            <li onClick={() => setSelectedCategory("Bathroom")}>Bathroom</li>
            <li onClick={() => setSelectedCategory("Kitchen")}>Kitchen</li>
            <span/>
            <li onClick={() => setSelectedCategory("Outdoor")}><h6>Outdoor</h6></li>
            <li onClick={() => setSelectedCategory("Doors & Gates")}>Doors & Gates</li>
            <li onClick={() => setSelectedCategory("Materials")}>Materials</li>
            <li onClick={() => setSelectedCategory("Grills")}>Grills</li>
            <li onClick={() => setSelectedCategory("Garden")}>Garden</li>
            <li onClick={() => setSelectedCategory("Plants")}>Plants</li>
            <span/>
            <li onClick={() => setSelectedCategory("Garage")}><h6>Garage</h6></li>
            <li onClick={() => setSelectedCategory("Auto")}>Auto</li>
            <li onClick={() => setSelectedCategory("Tools")}>Tools</li>
            <span/>
            <li onClick={() => setSelectedCategory("Others")}><h6>Others</h6></li>
          </ul>
        </DropdownMenu>
      </StyledCategoriesDropdown>
      <StyledInput type="text" placeholder="Search Products"></StyledInput>
      <StyleIconButton>
        <SearchIcon size="1.5rem"/>
      </StyleIconButton>
    </StyledSearchBar>
  )
}

export default SearchBar;
