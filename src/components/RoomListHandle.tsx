import { useEffect, useRef, useState } from "react";

let isPointerPressed = false;
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
        const handleMouseMove = (e: any) => {
            if (isPointerPressed) {
                setY(e.clientY - prevY)
            }
        }

        const handleMouseUp = () => {
            isPointerPressed = false;
            onHandleMoveEnd();
            setY(0);
        }

        const handleMouseDown = (e: any) => {
            prevY = e.clientY
            isPointerPressed = true;
        }

        const handleTouchMove = (e: any) => {
            if (isPointerPressed) {
                setY(e.targetTouches[0].clientY - prevY)
            }
        }

        const handleTouchEnd = () => {
            isPointerPressed = false;
            onHandleMoveEnd();
            setY(0);
        }

        const handleTouchStart = (e: any) => {
            prevY = e.targetTouches[0].clientY
            isPointerPressed = true;
        }


        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
        box.current?.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('touchmove', handleTouchMove)
        document.addEventListener('touchend', handleTouchEnd)
        box.current?.addEventListener('touchstart', handleTouchStart)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
            box.current?.removeEventListener('mousedown', handleMouseDown)
            document.removeEventListener('touchmove', handleTouchMove)
            document.removeEventListener('touchend', handleTouchEnd)
            box.current?.removeEventListener('touchstart', handleTouchStart)
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