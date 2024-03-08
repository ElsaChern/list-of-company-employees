import apiInstance from "./apiInstance"

const fetchUsers = async (type) => {
  const params = { __example: type }

  const response = await apiInstance.get("", { params })

  return response.data.items
}

export default fetchUsers
