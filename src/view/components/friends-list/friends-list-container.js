import {connect} from 'react-redux'
import FriendsList from './friends-list'
import { addFriend } from '../../../store/actions'

function mapStateToProps (state) {
  return {
    friends: [...state.friends].filter(filtered).sort(sortByName).map(mapFriend)
  }
}

const mapDispatchToProps = dispatch => ({
  addFriend: ()=> dispatch(addFriend("Maria Luchia Huante"))
})

export const FriendsListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsList);

function sortByName(a, b){
  const nameAInLowerCase=a.name.toLowerCase();
  const nameBInLowerCase =b.name.toLowerCase()
  if (nameAInLowerCase < nameBInLowerCase)
    return -1
  if (nameAInLowerCase > nameBInLowerCase)
    return 1
  return 0
}

const filtered = ({name})=> name.length > 15;

const mapFriend = ({id , name}) => ({id , name: `${name} - количество символов ${name.length}` })
