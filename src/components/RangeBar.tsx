import { Interpolation, Theme } from "@emotion/react";
import { MouseEventHandler, TouchEventHandler, useCallback, useEffect, useRef, useState } from "react";

let indexMoving: number | null = null;
const RangeBar = ({
    prices,
    min,
    max,
    values,
    containerCss,
    onChangeValues
}: {
    prices: { price: number, count: number }[]
    min: number,
    max: number,
    values: number[],
    containerCss: Interpolation<Theme>
    onChangeValues: (values: number[]) => void
}) => {
    const [valuesDisplay, setValuesDisplay] = useState(values);

    const barRef = useRef<HTMLDivElement>(null);
    const priceMax = Math.max(...prices.map(price => price.count));

    const mouseMoveEvent = useCallback((e: globalThis.MouseEvent) => {
        moveEvent(e.clientX)
    }, [values])

    const touchMoveEvent = useCallback((e: globalThis.TouchEvent) => {
        moveEvent(e.targetTouches[0].clientX)
    }, [values])

    const calcuateNewValues = (value: number, index: number) => {
        const newValues = [...values];

        const newMax = newValues[index + 1] ?? max;
        const newMin = newValues[index - 1] ?? min;

        if (value < newMin) {
            newValues[index] = newMin;
        }
        else if (value > newMax) {
            newValues[index] = newMax;
        }
        else {
            newValues[index] = Math.floor(value);
        }

        return newValues;
    }

    const moveEvent = (clientX: number) => {
        const rect = barRef.current?.getBoundingClientRect();
        if (rect) {
            if (indexMoving === null) {
                return;
            }
            const newValues = calcuateNewValues((clientX - rect.left) / rect.width * (max - min) + min, indexMoving);

            setValuesDisplay(newValues);
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

    const handleChangeInputValue = (value: number, index: number) => {
        const newValues = [...values];
        newValues[index] = value
        setValuesDisplay(newValues);
    }

    return (
        <div css={containerCss}>
            <div css={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: 64 }}>
                {
                    prices.map(({ price, count }) => (
                        <div
                            css={{
                                flex: 1,
                                height: `${count / priceMax * 100}%`,
                                marginRight: 1,
                                backgroundColor: (price < valuesDisplay[0] || price > valuesDisplay[1]) ? 'rgb(221,221,221)' : 'rgb(176,176,176)'
                            }}
                        />
                    ))
                }
            </div>
            <div css={{ position: 'relative' }}>
                <div css={{ width: '100%', height: 2, backgroundColor: 'rgb(221,221,221)' }} ref={barRef} />
                {
                    valuesDisplay.map((value, index) => (
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
            <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 24 }}>
                <PriceInput
                    title='최저 요금'
                    value={valuesDisplay[0]}
                    onChangeValue={value => handleChangeInputValue(value, 0)}
                    onBlur={() => { }}
                />
                <div css={{ margin: 8 }}>-</div>
                <PriceInput
                    title='최고 요금'
                    value={valuesDisplay[1]}
                    onChangeValue={value => handleChangeInputValue(value, 1)}
                    onBlur={() => { }}
                />
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

const PriceInput = ({
    title,
    value,
    onChangeValue,
    onBlur
}: {
    title: string,
    value: number,
    onChangeValue: (value: number) => void,
    onBlur: () => void
}) => {
    return (
        <div
            css={{
                border: '1px solid rgb(172,172,172)',
                borderRadius: 8,
                minHeight: 56,
                width: '100%',
                display: 'flex',
            }}>
            <label css={{ position: 'relative', flex: 1 }}>
                <div
                    css={{
                        left: 12,
                        top: 18,
                        position: 'absolute',
                        fontSize: 16,
                        color: 'rgb(113, 113, 113)',
                        transformOrigin: '0% 0%',
                        transform: 'scale(0.75) translateY(-8px)',

                    }}>
                    {title}
                </div>
                <div css={{ display: 'flex' }}>
                    <div css={{ paddingTop: 26, paddingLeft: 12, marginRight: -6 }}>₩</div>
                    <input
                        css={{ margin: '26px 12px 6px', border: 0, outline: 'none' }}
                        value={value}
                        onChange={e => onChangeValue(+e.target.value)}
                        onBlur={onBlur}
                    />
                </div>
            </label>
        </div>
    )
}


export default RangeBar;