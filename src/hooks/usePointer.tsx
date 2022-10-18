import { RefObject, useEffect, useRef, useState } from "react"

const useGesture = ({
    ref,
    onMoveEnd,
    onMove
}: {
    ref: RefObject<HTMLDivElement>,
    onMoveEnd?: () => void,
    onMove?: (x: number, y: number) => { x?: number, y?: number } | void
}) => {
    const isPointerPressed = useRef(false);
    let prevX = 0;
    let prevY = 0;
    let lastX = 0;
    let lastY = 0;

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e: any) => {
            handleMove(e.clientX, e.clientY)
        }

        const handleMouseDown = (e: any) => {
            handleMoveStart(e.clientX, e.clientY)
        }

        const handleMouseUp = () => {
            handleMoveEnd()
        }

        const handleTouchMove = (e: any) => {
            handleMove(e.targetTouches[0].clientX, e.targetTouches[0].clientY)
        }

        const handleTouchStart = (e: any) => {
            handleMoveStart(e.targetTouches[0].clientX, e.targetTouches[0].clientY)
        }

        const handleTouchEnd = () => {
            handleMoveEnd();
        }

        const handleMoveStart = (clientX: number, clientY: number) => {
            prevX = clientX - lastX;
            prevY = clientY - lastY;
            isPointerPressed.current = true;
        }

        const handleMove = (clientX: number, clientY: number) => {
            if (isPointerPressed.current) {
                let x = clientX - prevX;
                let y = clientY - prevY;

                if (onMove) {
                    const result = onMove(x, y);
                    if (result?.x !== undefined) {
                        x = result.x
                    }
                    if (result?.y !== undefined) {
                        y = result.y
                    }
                }

                lastX = x;
                setX(x)

                lastY = y;
                setY(y);
            }
        }

        const handleMoveEnd = () => {
            if (isPointerPressed) {
                isPointerPressed.current = false;
                if (onMoveEnd) {
                    onMoveEnd();
                }
            }
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
        ref.current?.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('touchmove', handleTouchMove)
        document.addEventListener('touchend', handleTouchEnd)
        ref.current?.addEventListener('touchstart', handleTouchStart)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
            ref.current?.removeEventListener('mousedown', handleMouseDown)
            document.removeEventListener('touchmove', handleTouchMove)
            document.removeEventListener('touchend', handleTouchEnd)
            ref.current?.removeEventListener('touchstart', handleTouchStart)
        }
    }, [])


    return {
        x,
        y,
        isPointerPressed: isPointerPressed.current,
        reset: () => {
            setX(0);
            setY(0);
            lastX = 0;
            lastY = 0;
            prevX = 0;
            prevY = 0;
        }
    }
}

export default useGesture;