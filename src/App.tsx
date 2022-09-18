import tabs from './apis/tabs'
import rooms from './apis/rooms'
import './App.css'
import BottomTabs from './components/BottomTabs'
import RoomList from './components/RoomList'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'

function App() {
  return (
    <div className="App" >
      <div css={{
        position: 'sticky',
        backgroundColor: 'white',
        top: 0,
        boxShadow: '0 2px 5px rgb(0 0 0 / 10%)',
      }}>
        <SearchBar containerCss={{ padding: '24px 14px', paddingBottom: 0 }} />
        <Tabs items={tabs} />
      </div>
      <RoomList items={rooms} containerCss={{ height: '100%' }} />
      <BottomTabs />
    </div>
  )
}

export default App

