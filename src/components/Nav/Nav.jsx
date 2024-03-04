import { LinkItem, LinksList, LinksWrapper } from "./styled"
import { departmentList } from '../helpers/departmentConstants';

const Nav = () => {

  return (
    <LinksWrapper>
      <LinksList>
      {departmentList.map((item) => <LinkItem  key={item.value}>{item.label}</LinkItem>)} 
      </LinksList>
    </LinksWrapper>
  )
}

export default Nav
