import { styled } from 'styled-components';

const SearchDiv = styled.div`
  position: relative;
  display: flex;
  margin: 6px 16px;
`;

const Input = styled.input`
  background: rgba(247, 247, 248, 1);
  width: 100%;
  padding: 12px 44px;
  border-radius: 16px;
  border: none;

  &:focus {
    outline: auto;
  }
`;

const SearchIconContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
`;

const SortIconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  cursor: pointer;
`;

export { SearchDiv, Input, SearchIconContainer, SortIconContainer };
