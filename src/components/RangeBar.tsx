import { Interpolation, Theme } from "@emotion/react";
import { MouseEventHandler, TouchEvent, TouchEventHandler, useCallback, useRef } from "react";

let indexMoving: number | null = null;
const RangeBar = ({
    min,
    max,
    values,
    containerCss,
    onChangeValues
}: {
    min: number,
    max: number,
    values: number[],
    containerCss: Interpolation<Theme>
    onChangeValues: (values: number[]) => void
}) => {
    const barRef = useRef<HTMLDivElement>(null);

    const mouseMoveEvent = useCallback((e: globalThis.MouseEvent) => {
        moveEvent(e.clientX)
    }, [values])

    const touchMoveEvent = useCallback((e: globalThis.TouchEvent) => {
        moveEvent(e.targetTouches[0].clientX)
    }, [values])

    const moveEvent = (clientX: number) => {
        const rect = barRef.current?.getBoundingClientRect();
        if (rect) {
            if (indexMoving === null) return;

            const newValues = [...values];

            const newMax = newValues[indexMoving + 1] ?? max;
            const newMin = newValues[indexMoving - 1] ?? min;
            const newValue = (clientX - rect.left) / rect.width * (max - min);

            if (newValue < newMin) {
                newValues[indexMoving] = newMin;
            }
            else if (newValue > newMax) {
                newValues[indexMoving] = newMax;
            }
            else {
                newValues[indexMoving] = newValue;
            }
            onChangeValues(newValues);
        }
    }

    const mouseEndEvent = useCallback(() => {
        indexMoving = null;
        document.removeEventListener('mousemove', mouseMoveEvent)
        document.removeEventListener('mouseup', mouseEndEvent)
    }, []);

    const touchEndEvent = useCallback(() => {
        indexMoving = null;
        document.removeEventListener('mousemove', mouseMoveEvent)
        document.removeEventListener('mouseup', mouseEndEvent)
    }, []);

    const handleMouseDown = (index: number) => {
        indexMoving = index;
        document.addEventListener('mousemove', mouseMoveEvent);
        document.addEventListener('mouseup', mouseEndEvent);
    }

    const handleTouchStart = (index: number) => {
        indexMoving = index;
        document.addEventListener('touchmove', touchMoveEvent);
        document.addEventListener('touchend', touchEndEvent);
    }

    return (
        <div css={containerCss}>
            <div css={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <div css={{ flex: 1, height: 0, marginRight: 1, backgroundColor: 'rgb(176,176,176)' }} />
                <div css={{ flex: 1, height: 20, marginRight: 1, backgroundColor: 'rgb(176,176,176)' }} />
                <div css={{ flex: 1, height: 55, marginRight: 1, backgroundColor: 'rgb(176,176,176)' }} />
                <div css={{ flex: 1, height: 20, marginRight: 1, backgroundColor: 'rgb(176,176,176)' }} />
                <div css={{ flex: 1, height: 20, marginRight: 1, backgroundColor: 'rgb(176,176,176)' }} />
                <div css={{ flex: 1, height: 19, marginRight: 1, backgroundColor: 'rgb(176,176,176)' }} />
                <div css={{ flex: 1, height: 0, marginRight: 1, backgroundColor: 'rgb(176,176,176)' }} />
            </div>
            <div css={{ position: 'relative' }}>
                <div css={{ width: '100%', height: 2, backgroundColor: 'rgb(221,221,221)' }} ref={barRef} />
                {
                    values.map((value, index) => (
                        <RangeHandle
                            key={index.toString()}
                            onMouseDown={() => handleMouseDown(index)}
                            onTouchStart={() => handleTouchStart(index)}
                            containerCss={{
                                position: 'absolute',
                                top: -16,
                                left: `${(value - min) / (max - min) * 100}%`
                            }}
                        />
                    ))
                }
            </div>
        </div>
    )
}

const RangeHandle = ({
    containerCss,
    onMouseDown,
    onTouchStart
}: {
    onMouseDown: MouseEventHandler,
    onTouchStart: TouchEventHandler,
    containerCss: Interpolation<Theme>
}) => {
    return (
        <div css={containerCss}>
            <div
                onMouseDown={onMouseDown}
                onTouchStart={onTouchStart}
            >
                <button
                    css={{
                        marginLeft: -16,
                        height: 32,
                        width: 32,
                        border: '1px solid rgb(176,176,176)',
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        columnGap: 2,
                        cursor: 'pointer'
                    }}>
                    <div css={{ width: 1, height: 8, backgroundColor: 'rgb(176,176,176)' }} />
                    <div css={{ width: 1, height: 8, backgroundColor: 'rgb(176,176,176)' }} />
                    <div css={{ width: 1, height: 8, backgroundColor: 'rgb(176,176,176)' }} />
                </button>
            </div>
        </div>
    )
}

export default RangeBar;