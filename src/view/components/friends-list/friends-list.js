import React from 'react'


export default function FriendsList ({ friends, addFriend }) {

  return (
    <>
      <button onClick={addFriend}>add</button>
      <div>
        {friends.map(friend => <div key={friend.id}>
          {friend.name}
        </div>)}
      </div>
    </>
  )
}




