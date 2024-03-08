import { useEffect, useState } from "react"
import fetchUsers from "../../api/fetchUsers"
import avatar from "../../img/avatar.svg"
import {
  UserCard,
  UserCardPhoto,
  UserCardText,
  UserName,
  UserPosition,
  UserPositionWrapper,
  UserTag,
} from "./styled"
import Skeleton from "../Skeleton/Skeleton"

const UserList = () => {
  const [userList, setUserList] = useState([])
  const [type, setType] = useState("all")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersResult = await fetchUsers(type)
        setUserList(usersResult)
        setLoading(false)
      } catch (e) {
        setError(true)
        setUserList([])
      }
    }
    getUsers()
    // eslint-disable-next-line
  }, [type])

  if (loading) {
    return [...Array(7)].map((item, idx) => {
      return (
        <UserCard>
          <Skeleton width={"72px"} height={"72px"} />
          <UserCardText>
            <UserName>
              <Skeleton width={"200px"} height={"20px"} />
            </UserName>
            <UserPositionWrapper>
              <UserPosition>
                <Skeleton width={"70px"} height={"20px"} />
              </UserPosition>
            </UserPositionWrapper>
          </UserCardText>
        </UserCard>
      )
    })
  }

  return (
    <div>
      {userList.map((user) => {
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
      })}
    </div>
  )
}

export default UserList
