export const ADD_FRIEND = 'ADD_FRIEND'

export const addFriend = (name) => (
  {
    type: ADD_FRIEND,
    payload: {id:  Math.random(), name}
  }
)
