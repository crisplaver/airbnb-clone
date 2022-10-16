import { ReactComponent as CheckIcon } from '../assets/check.svg';

const Switch = ({
    isSelected,
    onClick
}: {
    isSelected: boolean,
    onClick: () => void
}) => {
    return (
        <button
            onClick={onClick}
            css={{
                padding: '1px 6px',
                backgroundColor: isSelected ? 'black' : 'rgb(176,176,176)',
                borderRadius: 32,
                width: 48,
                height: 32,
                position: 'relative',
                cursor: 'pointer',
                border: 0
            }}
        >
            <div
                css={{
                    height: 28,
                    width: 28,
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    position: 'absolute',
                    bottom: 0,
                    left: 2,
                    top: 2,
                    transition: 'all 250ms',
                    transform: isSelected ? 'translateX(16px)' : 'translateX(0px)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <CheckIcon css={{ visibility: isSelected ? 'visible' : 'hidden' }} />
            </div>
        </button>
    )
}

export default Switch