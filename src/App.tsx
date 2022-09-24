import tabs from './apis/tabs'
import rooms from './apis/rooms'
import './App.css'
import BottomTabs from './components/BottomTabs'
import RoomList from './components/RoomList'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import FilterModal from './components/FilterModal'
import { useEffect, useState } from 'react'

function App() {
  const [isShownBottomTabs, setIsShownBottomTabs] = useState(true);
  const [isOpenFilterModal, setIsOpenFilterModal] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpenFilterModal ? 'hidden' : ''
  }, [isOpenFilterModal])

  // #### FilterModal이 마지막에 정의되면 보이지 않는 이유?
  return (
    <div className="App">
      {isOpenFilterModal && <FilterModal onClickClose={() => setIsOpenFilterModal(false)} />}
      <div
        css={{
          position: 'sticky',
          backgroundColor: 'white',
          top: 0,
          boxShadow: '0 2px 5px rgb(0 0 0 / 10%)',
          zIndex: 100,
        }}>
        <SearchBar containerCss={{ padding: '24px 14px', paddingBottom: 0 }} onClickFilter={() => setIsOpenFilterModal(true)} />
        <Tabs items={tabs} />
      </div>
      <RoomList
        items={rooms}
        onScroll={scrollY => {
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

