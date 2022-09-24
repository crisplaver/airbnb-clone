import { keyframes } from '@emotion/react';
import { ReactComponent as CloseIcon } from '../assets/close.svg';

const FilterModal = ({ onClickClose }: { onClickClose: () => void }) => {
    // #### 닫기 아이콘의 position이 relative여야 hover 이미지가 제대로 표시되는 이유?

    const open = keyframes({
        '0%': {
            transform: 'translateY(100%)',
            opacity: 0
        },
        '100%': {
            transform: 'translateY(0)',
            opacity: 1
        },
    })

    const fadeIn = keyframes({
        '0%': {
            backgroundColor: 'rgba(0, 0, 0, 0)'
        },
        '100%': {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
        },
    })

    return (
        <div
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClickClose()
                }
            }}
            css={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                position: 'fixed',
                zIndex: 200,
                animationName: fadeIn,
                animationDuration: '400ms',
                paddingTop: 12,
                display: 'flex'
            }}
        >
            <div
                css={{
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    width: '100%',
                    bottom: 0,
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    animationName: open,
                    animationDuration: '400ms',
                }}
            >
                <header
                    css={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        minHeight: 48,
                        padding: '0px 24px',
                        borderBottom: '1px solid rgb(235, 235, 235)',
                    }}>
                    <button
                        onClick={onClickClose}
                        css={{
                            borderRadius: '50%',
                            border: 0,
                            padding: 0,
                            background: 'transparent',
                            position: 'relative',
                            "::before": {
                                content: '""',
                                width: 32,
                                height: 32,
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                borderRadius: '50%',
                                transform: 'translate(-50%, -50%)',
                            },
                            ":hover": {
                                "::before": {
                                    background: 'rgb(247, 247, 247)'
                                }
                            }
                        }}>
                        <CloseIcon css={{ position: 'relative' }} />
                    </button>
                    <div css={{ fontWeight: 800, fontSize: 16 }}>필터</div>
                    <div></div>
                </header>
                <div css={{ flex: 1, maxHeight: '100%' }}>내용</div>
                <footer css={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgb(235, 235, 235)' }}>
                    <button css={{ padding: 0, border: 0, background: 'transparent', fontSize: 16, fontWeight: 600, textDecoration: 'underline' }}>전체 해제</button>
                    <button css={{ border: 0, background: 'rgb(34, 34, 34)', color: 'white', padding: '14px 24px', fontSize: 16, fontWeight: 600, borderRadius: 8 }}>숙소 100개 표시</button>
                </footer>
            </div>
        </div>
    )
}

export default FilterModal;