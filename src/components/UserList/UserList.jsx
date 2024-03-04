import { useEffect, useState } from 'react'
import fetchUsers from '../../api/fetchUsers'
import avatar from '../../img/avatar.svg'
import {
  UserCard,
  UserCardPhoto,
  UserCardText,
  UserName,
  UserPosition,
  UserPositionWrapper,
  UserTag,
} from './styled'

const UserList = () => {
  const [userList, setUserList] = useState([])
  const [type, setType] = useState('all')
  const [error, setError] = useState(false)

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersResult = await fetchUsers(type)
        setUserList(usersResult)
      } catch (e) {
        setError(true)
        setUserList([])
      }
    }
    getUsers()
    // eslint-disable-next-line
  }, [type])

  return (
    <div>
      {error ? (
        <p>Ошибочка</p>
      ) : (
        userList.map((user) => {
          return (
            <UserCard key={user.id}>
              <a href={`/users/${user.id}`}>
                <UserCardPhoto src={avatar} key={user.id} />
              </a>
              <UserCardText>
                <UserName>
                  {user.firstName} {user.lastName}
                </UserName>
                <UserTag>{user.userTag}</UserTag>
                <UserPositionWrapper>
                  <UserPosition>{user.department}</UserPosition>
                </UserPositionWrapper>
              </UserCardText>
            </UserCard>
          )
        })
      )}
    </div>
  )
}

export default UserList
