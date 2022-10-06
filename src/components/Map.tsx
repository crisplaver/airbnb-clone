import { Interpolation, Theme } from "@emotion/react"

const Map = ({
    containerCss
}: {
    containerCss: Interpolation<Theme>
}) => {
    return (
        <div
            css={{
                position: 'fixed',
                height: '100%',
                width: '100%',
                bottom: 0,
                backgroundColor: 'lightblue',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                fontWeight: 600
            }}>
            지도
        </div>
    )
}

export default Map;