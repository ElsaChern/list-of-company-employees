import { FilterRight, Search } from 'react-bootstrap-icons';
import {
  Input,
  SearchDiv,
  SearchIconContainer,
  SortIconContainer,
} from './styled';

const SearchBar = () => {
  return (
    <SearchDiv>
      <SearchIconContainer>
        <Search width={22} height={22} color="lightgray" />
      </SearchIconContainer>
      <Input placeholder="Введи имя, тег, почту..."></Input>
      <SortIconContainer>
        <FilterRight width={24} height={24} color="lightgray" />
      </SortIconContainer>
    </SearchDiv>
  );
};

export default SearchBar;
