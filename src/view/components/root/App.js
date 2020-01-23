import React from 'react'
import './App.css'
import Header from '../header/header'
import { store } from '../../../store'
import { Provider } from 'react-redux'
import {FriendsListContainer} from '../friends-list/friends-list-container'

function App () {
  return (

    <div className="App">
      <Provider store={store}>
        <div className={'root'}>
          <Header/>
          <FriendsListContainer/>
        </div>
      </Provider>
    </div>
  )
}

export default App
