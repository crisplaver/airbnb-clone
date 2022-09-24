import { ReactComponent as SearchTabIcon } from '../assets/searchTab.svg';
import { ReactComponent as WidhListTabIcon } from '../assets/wishListTab.svg';
import { ReactComponent as LoginTabIcon } from '../assets/loginTab.svg';
import { FunctionComponent, SVGProps, useState } from 'react';
import { Interpolation, Theme } from '@emotion/react';

const BottomTabs = ({ containerCss }: { containerCss: Interpolation<Theme> }) => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div css={containerCss}>
            <div style={{
                display: 'flex',
                backgroundColor: 'white',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                height: 65,
                borderTop: '1px solid #EBEBEB'
            }}>
                <Tab title='둘러보기' TabIcon={SearchTabIcon} selected={tabIndex === 0} onClick={() => setTabIndex(0)} />
                <Tab title='위시리스트' TabIcon={WidhListTabIcon} selected={tabIndex === 1} onClick={() => setTabIndex(1)} />
                <Tab title='로그인' TabIcon={LoginTabIcon} selected={tabIndex === 2} onClick={() => setTabIndex(2)} />
            </div>
        </div>
    )
}

const Tab = ({ title, TabIcon, selected, onClick }: { title: string, TabIcon: FunctionComponent<SVGProps<SVGSVGElement>>, selected: boolean, onClick: () => void }) => {
    return (
        <a css={{ display: 'flex', alignItems: 'center', flexDirection: 'column', maxWidth: '20%', flex: 1 }} onClick={onClick}>
            <div css={{ height: 30, marginBottom: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <TabIcon color={selected ? 'red' : 'rgb(176, 176, 176)'} />
            </div>
            <div css={{ fontSize: 12, fontWeight: 600, color: selected ? 'black' : 'rgb(113, 113, 113)' }}>{title}</div>
        </a>
    )
}

export default BottomTabs;