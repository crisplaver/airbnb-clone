import usePointer from "../hooks/usePointer";

const RoomListHandle = ({
    isCollabsed,
    onPointerMoveEnd,
}: {
    isCollabsed: boolean,
    onPointerMoveEnd: () => void,
}) => {
    const {
        y,
        box,
        isPointerPressed,
        setY
    } = usePointer({
        onPointerMoveEnd: () => {
            onPointerMoveEnd();
            setY(0)
        }
    })

    return (
        <div
            css={{
                position: 'fixed',
                height: '100%',
                width: '100%',
                bottom: 0,
                zIndex: -100
            }}>
            <div
                ref={box}
                css={{
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    transition: isPointerPressed ? 'all 0s' : 'all 0.5s',
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    transform: isCollabsed ? `translateY(calc(100% - 80px + ${y}px))` : 'translateY(0px)'
                }}
            >
                <div
                    css={{
                        marginTop: 32,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        "::before": {
                            position: 'absolute',
                            top: -24,
                            content: '""',
                            borderRadius: 4,
                            height: 4,
                            width: 40,
                            backgroundColor: 'rgba(32,32,32,0.2)'
                        }
                    }}>
                    <div
                        css={{
                            fontSize: 14,
                            fontWeight: 600,
                        }}
                    >
                        국립공원 70개
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomListHandle;