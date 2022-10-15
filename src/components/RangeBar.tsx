import { Interpolation, Theme } from "@emotion/react";

const RangeBar = ({
    containerCss
}: {
    containerCss: Interpolation<Theme>
}) => {
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
                <div
                    css={{
                        position: 'absolute',
                        top: -16
                    }}
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
        </div>
    )
}

export default RangeBar;