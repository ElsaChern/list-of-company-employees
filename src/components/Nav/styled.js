import { styled } from 'styled-components'

const LinksWrapper = styled.div`
  /*padding: 8px 16px;*/
  border-bottom: 0.33px solid rgba(195, 195, 198, 1);
`;

const LinksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 8px 16px 0px 16px;
  padding: 0px;
`;

const LinkItem = styled.li`
  padding: 8px 12px;
  font-size: 15px;
  font-weight: 600;
  color: ${(props) => props.isSelected ? "rgba(5, 5, 16, 1)" : "rgba(151, 151, 155, 1)"};
  border-bottom: ${(props) => props.isSelected ? "2px solid rgba(101, 52, 255, 1)" : "none"};
  list-style: none;
  cursor: pointer;

  &:hover {
    color: rgba(5, 5, 16, 1);
  }

  /*&:active {
    color: rgba(5, 5, 16, 1);
    border-bottom: 2px solid rgba(101, 52, 255, 1);
  }*/
`;


export {LinksWrapper, LinksList, LinkItem };