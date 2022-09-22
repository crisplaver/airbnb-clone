import { Interpolation, Theme } from "@emotion/react"
import { ReactComponent as SearchIcon } from '../assets/search.svg';
import { ReactComponent as FilterIcon } from '../assets/filter.svg';

const SearchBar = ({ containerCss }: { containerCss: Interpolation<Theme> }) => {
    return (
        <div css={containerCss}>
            <div
                css={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    boxShadow: '0 3px 10px rgb(0 0 0 / 10%)',
                    borderRadius: '1000px',
                    padding: '8px 0px'
                }}>
                <div css={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1
                }}>
                    <div css={{ padding: '0 16px 0 20px' }}>
                        <SearchIcon />
                    </div>
                    <div css={{ flex: 1 }}>
                        <div css={{ fontSize: 14, fontWeight: 600, lineHeight: '20px' }}>어디로 여행가세요?</div>
                        <div css={{ fontSize: 12, color: '#717171', lineHeight: '16px' }}>어디든지 • 언제든지 일주일 • 게스트 추가</div>
                    </div>
                </div>
                <button
                    style={{
                        border: 0,
                        background: 'transparent',
                        margin: 0,
                        padding: 0
                    }}>
                    <div css={{
                        border: '1px solid #DDDDDD',
                        borderRadius: 25,
                        height: 36,
                        width: 36,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0px 10px'
                    }}>
                        <FilterIcon />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default SearchBar