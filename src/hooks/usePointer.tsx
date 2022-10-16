import { RefObject, useEffect, useRef, useState } from "react"

const usePointer = ({
    ref,
    clampX,
    clampY,
    onPointerMoveEnd
}: {
    ref: RefObject<HTMLDivElement>,
    clampX?: [number, number],
    clampY?: [number, number],
    onPointerMoveEnd: () => void
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
            if (isPointerPressed.current) {
                const x = e.clientX - prevX;
                const y = e.clientY - prevY;

                if (clampX && (x < clampX[0] || x > clampX[1])) { }
                else {
                    lastX = x;
                    setX(x)
                }

                if (clampY && (x < clampY[0] || x > clampY[1])) { }
                else {
                    lastY = y;
                    setY(y);
                }
            }
        }

        const handleMouseDown = (e: any) => {
            prevX = e.clientX - lastX;
            prevY = e.clientY - lastY;
            isPointerPressed.current = true;
        }

        const handleMouseUp = (e: any) => {
            if (isPointerPressed.current) {
                isPointerPressed.current = false;
                onPointerMoveEnd();
            }
        }

        const handleTouchMove = (e: any) => {
            if (isPointerPressed.current) {
                const x = e.targetTouches[0].clientX - prevX;
                const y = e.targetTouches[0].clientY - prevY;


                if (clampX && (x < clampX[0] || x > clampX[1])) { }
                else {
                    lastX = x;
                    setX(x)
                }

                if (clampY && (x < clampY[0] || x > clampY[1])) { }
                else {
                    lastY = y;
                    setY(y);
                }
            }
        }

        const handleTouchStart = (e: any) => {
            prevX = e.targetTouches[0].clientX - lastX;
            prevY = e.targetTouches[0].clientY - lastY;
            isPointerPressed.current = true;
        }

        const handleTouchEnd = (e: any) => {
            if (isPointerPressed) {
                isPointerPressed.current = false;
                onPointerMoveEnd();
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

export default usePointer;