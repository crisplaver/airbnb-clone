import tabs from './apis/tabs'
import rooms from './apis/rooms'
import './App.css'
import BottomTabs from './components/BottomTabs'
import RoomList from './components/RoomList'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import FilterModal from './components/FilterModal'
import { ReactComponent as MapIcon } from './assets/map.svg'

import { useEffect, useState } from 'react'
import Map from './components/Map'
import RoomListHandle from './components/RoomListHandle'

function App() {
  const [isShownBottomTabs, setIsShownBottomTabs] = useState(true);
  const [isOpenFilterModal, setIsOpenFilterModal] = useState(false);
  const [isCollabsed, setIsCollabsed] = useState(false);

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

      <Map />

      <RoomListHandle
        isCollabsed={isCollabsed}
        onHandleMoveEnd={() => setIsCollabsed(false)}
      />

      <RoomList
        items={rooms}
        onScroll={scrollY => {
          if (scrollY > 20) {
            setIsShownBottomTabs(false)
          }
          else if (scrollY < 0) {
            setIsShownBottomTabs(true)
          }
        }}
        isCollabsed={isCollabsed}
      />

      {!isCollabsed &&
        <div
          css={{
            transform: isShownBottomTabs ? 'translateY(0px)' : 'translateY(66px)',
            transition: 'transform 0.2s ease',
            position: 'fixed',
            bottom: 0,
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div
            onClick={() => setIsCollabsed(true)}
            css={{
              backgroundColor: 'black',
              bottom: 0,
              color: 'white',
              alignSelf: 'center',
              marginBottom: 24,
              padding: '11px 19px',
              fontSize: 12,
              borderRadius: 24,
              display: 'flex',
              flexDirection: 'row',
              transition: 'all 0.2s',
              fontWeight: 600,
              ":hover": {
                transform: 'scale(1.04)',
              },
            }}
          >
            지도
            <MapIcon css={{ marginLeft: 8 }} />
          </div>
          <BottomTabs
            containerCss={{

            }}
          />
        </div>
      }
    </div>
  )
}

export default App

