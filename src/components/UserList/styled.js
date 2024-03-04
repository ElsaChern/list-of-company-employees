import { styled } from 'styled-components'

const UserCard = styled.div`
  display: flex;
  margin: 16px;
`

const UserCardPhoto = styled.img`
  width: 72px;
  height: 72px;
  background-size: cover;
  border-radius: 100px;
  margin: 6px 0px;
`

const UserCardText = styled.div`
  margin: 12px 16px;
`

const UserName = styled.span`
  font-size: 16px;
  font-weight: 500;
`

const UserTag = styled.span`
  margin: 4px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(151, 151, 155, 1);
`

const UserPositionWrapper = styled.div`
  margin-bottom: 11px;
`

const UserPosition = styled.span`
  font-size: 13px;
  color: rgba(85, 85, 92, 1);
`

export {
  UserCard,
  UserCardPhoto,
  UserCardText,
  UserName,
  UserTag,
  UserPositionWrapper,
  UserPosition,
}
