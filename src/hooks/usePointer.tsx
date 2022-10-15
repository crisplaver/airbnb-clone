import { useEffect, useRef, useState } from "react"

let isPointerPressed = false;
let prevY = 0;

const usePointer = ({
    onPointerMoveEnd
}: {
    onPointerMoveEnd: () => void
}) => {
    const box = useRef<HTMLDivElement>(null);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e: any) => {
            if (isPointerPressed) {
                setY(e.clientY - prevY)
            }
        }

        const handleMouseUp = () => {
            if (isPointerPressed) {
                isPointerPressed = false;
                onPointerMoveEnd();
                setY(0);
            }
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
            if (isPointerPressed) {
                isPointerPressed = false;
                onPointerMoveEnd();
                setY(0);
            }
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


    return {
        x,
        y,
        box,
        isPointerPressed
    }
}

export default usePointer;