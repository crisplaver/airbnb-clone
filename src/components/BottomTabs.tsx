import { ReactComponent as SearchTabIcon } from '../assets/searchTab.svg';
import { ReactComponent as WidhListTabIcon } from '../assets/wishListTab.svg';
import { ReactComponent as LoginTabIcon } from '../assets/loginTab.svg';
import { FunctionComponent, SVGProps } from 'react';

const BottomTabs = () => {
    return (
        <div style={{
            display: 'flex',
            position: 'fixed',
            bottom: 0,
            backgroundColor: 'white',
            width: '100%',
            justifyContent: 'center',
            flexDirection: 'row'
        }}>
            <Tab title='둘러보기' TabIcon={SearchTabIcon} />
            <Tab title='위시리스트' TabIcon={WidhListTabIcon} />
            <Tab title='로그인' TabIcon={LoginTabIcon} />
        </div>
    )
}

const Tab = ({ title, TabIcon }: { title: string, TabIcon: FunctionComponent<SVGProps<SVGSVGElement>> }) => {
    return (
        <div css={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <TabIcon color='red'/>
            <div>{title}</div>
        </div>
    )
}

export default BottomTabs;