import { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '../icons/MenuIcon';
import IconButton from '../shared/IconButton';
import MenuCard from '../shared/MenuCard';
import { MenuCardHeader } from '../shared/MenuCardElements';
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
      </MenuCard>
      <SearchBar />
    </StyledCategories>
  )
}

export default Categories;
