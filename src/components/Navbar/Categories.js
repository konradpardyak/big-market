import { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '../icons/MenuIcon';
import IconButton from '../shared/IconButton';
import MenuCard from '../shared/MenuCard';
import { MenuCardHeader, MenuCardList, MenuCardListItem, HorizlontalLine } from '../shared/MenuCardElements';
import SearchBar from './SearchBar';

const StyledCategories = styled.div`
  display: flex;
  align-items: center;
`
const Categories = () => {
  const [categoriesToggleState, setCategoriesToggleState] = useState(false);

  const handleCategoriesToggleChange = () => {
    setCategoriesToggleState(!categoriesToggleState);
  }

  return(
    <StyledCategories>
      <IconButton onClick={handleCategoriesToggleChange}>
        <MenuIcon size ="2.2rem"/>
      </IconButton>
      <MenuCard position="left" isOpen={categoriesToggleState} onToggleChange={handleCategoriesToggleChange}>
        <MenuCardHeader onToggleChange={handleCategoriesToggleChange}>Categories</MenuCardHeader>
        <MenuCardList>
          <MenuCardListItem><h6>All Categories</h6></MenuCardListItem>
          
          <MenuCardListItem><h6>Home</h6></MenuCardListItem>
          <MenuCardListItem>Lamps</MenuCardListItem>
          <MenuCardListItem>Decorations</MenuCardListItem>
          <MenuCardListItem>Carpets</MenuCardListItem>
          <MenuCardListItem>Paint</MenuCardListItem>
          
          <MenuCardListItem><h6>Furniture</h6></MenuCardListItem>
          <MenuCardListItem>Livingroom</MenuCardListItem>
          <MenuCardListItem>Bedroom</MenuCardListItem>
          <MenuCardListItem>Bathroom</MenuCardListItem>
          <MenuCardListItem>Kitchen</MenuCardListItem>
          
          <MenuCardListItem><h6>Outdoor</h6></MenuCardListItem>
          <MenuCardListItem>Doors & Gates</MenuCardListItem>
          <MenuCardListItem>Materials</MenuCardListItem>
          <MenuCardListItem>Grills</MenuCardListItem>
          <MenuCardListItem>Garden</MenuCardListItem>
          <MenuCardListItem>Plants</MenuCardListItem>
          
          <MenuCardListItem><h6>Garage</h6></MenuCardListItem>
          <MenuCardListItem>Auto</MenuCardListItem>
          <MenuCardListItem>Tools</MenuCardListItem>
          
          <MenuCardListItem><h6>Others</h6></MenuCardListItem>
        </MenuCardList>
      </MenuCard>
      <SearchBar />
    </StyledCategories>
  )
}

export default Categories;
