import { useEffect, useRef, useState } from "react";

let isPointerDown = false;
let prevY = 0

const RoomListHandle = ({
    isCollabsed,
    onHandleMoveEnd,
}: {
    isCollabsed: boolean,
    onHandleMoveEnd: () => void,
}) => {
    const box = useRef<HTMLDivElement>(null);
    const [y, setY] = useState(0);

    useEffect(() => {
        const handlePointerMove = (e: PointerEvent) => {
            if (isPointerDown) {
                setY(e.clientY - prevY)
            }
        }

        const handlePointerUp = () => {
            isPointerDown = false;
            onHandleMoveEnd();
            setY(0);
        }

        const handlePointerDown = (e: PointerEvent) => {
            prevY = e.clientY
            isPointerDown = true;
        }
        document.addEventListener('pointermove', handlePointerMove)
        document.addEventListener('pointerup', handlePointerUp)
        box.current?.addEventListener('pointerdown', handlePointerDown)

        return () => {
            document.removeEventListener('pointermove', handlePointerMove)
            document.removeEventListener('pointerup', handlePointerUp)
            document.removeEventListener('pointerdown', handlePointerDown)
        }
    }, [])

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
                    transition: 'all 0.5s',
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    transform: isCollabsed ? `translateY(calc(100% - 80px + ${y}px))` : 'translateY(0px)',
                    ":active": {
                        transition: 'all 0s'
                    }
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