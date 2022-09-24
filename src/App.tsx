import tabs from './apis/tabs'
import rooms from './apis/rooms'
import './App.css'
import BottomTabs from './components/BottomTabs'
import RoomList from './components/RoomList'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import { useState } from 'react'

function App() {
  const [isShownBottomTabs, setIsShownBottomTabs] = useState(true);
  return (
    <div className="App">
      <div
        css={{
          position: 'sticky',
          backgroundColor: 'white',
          top: 0,
          boxShadow: '0 2px 5px rgb(0 0 0 / 10%)',
          zIndex: 100,
        }}>
        <SearchBar containerCss={{ padding: '24px 14px', paddingBottom: 0 }} />
        <Tabs items={tabs} />
      </div>
      <RoomList items={rooms} onScroll={scrollY => {
        if (scrollY > 20) {
          setIsShownBottomTabs(false)
        }
        else if (scrollY < 0) {
          setIsShownBottomTabs(true)
        }
      }} />
      <BottomTabs containerCss={{
        transform: isShownBottomTabs ? 'translateY(0px)' : 'translateY(100%)',
        transition: 'transform 0.2s ease',
        position: 'fixed',
        bottom: 0,
        width: '100%'
      }} />
    </div>
  )
}

export default App

