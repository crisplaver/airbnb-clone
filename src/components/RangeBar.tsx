import { Interpolation, Theme } from "@emotion/react";
import { forwardRef, useRef } from "react";
import usePointer from "../hooks/usePointer";

const RangeBar = ({
    containerCss
}: {
    containerCss: Interpolation<Theme>
}) => {
    const boxRef1 = useRef<HTMLDivElement>(null);
    const { x } = usePointer({
        ref: boxRef1,
        clampX: [10, 400],
        onPointerMoveEnd: () => { }
    });

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
                <div css={{ width: '100%', height: 2, backgroundColor: 'rgb(221,221,221)' }} />
                <RangeHandle
                    ref={boxRef1}
                    containerCss={{
                        position: 'absolute',
                        top: -16,
                        transform: `translateX(${x}px)`
                    }}
                />
            </div>
        </div>
    )
}

// 자식 컴포넌트의 ref를 참조할 떄는 ref forwarding을 활용한다
// 부모 구성요소에 ref를 노출하는 것은 캡슐화를 깨뜨리기 때문에 권장되지 않음
// https://reactjs.org/docs/refs-and-the-dom.html#exposing-dom-refs-to-parent-components
const RangeHandle = forwardRef<HTMLDivElement, { containerCss?: Interpolation<Theme> }>(({
    containerCss
}, ref) => {
    return (
        <div css={containerCss}>
            <div ref={ref}>
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
})

export default RangeBar;