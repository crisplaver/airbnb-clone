import { Interpolation, Theme } from "@emotion/react"
import { useState } from "react"

const Tabs = ({
    items,
}: {
    items: { title: string, imageUrl: string }[],
}) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    return (
        <div css={{
            display: 'flex',
            overflowX: 'scroll',
            '::-webkit-scrollbar': {
                display: 'none'
            }
        }}>
            {items.map((item, index) => (
                <Tab
                    key={index}
                    title={item.title}
                    imageUrl={item.imageUrl}
                    containerCss={{ margin: '14px 12px' }}
                    selected={index === selectedIndex}
                    onClick={() => setSelectedIndex(index)}
                />
            ))}
        </div>
    )
}

const Tab = ({
    title,
    imageUrl,
    containerCss,
    selected,
    onClick
}: {
    title: string,
    imageUrl: string,
    containerCss?: Interpolation<Theme>,
    selected: boolean,
    onClick: () => void
}) => {
    return (
        <div css={containerCss} >
            <button css={{ backgroundColor: 'transparent', border: 0 }} onClick={onClick}>
                <div
                    css={{
                        width: 'max-content',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        filter: selected ? 'contrast(1)' : 'contrast(calc(13 / 44))',
                        '--display': selected ? 'block' : 'none',
                        '--bar-color': 'black',
                        gap: '4px',
                        ":hover": {
                            filter: 'contrast(1)',
                            '--display': 'block',
                            '--bar-color': selected ? 'black' : '#DDDDDD'
                        }
                    }}>
                    <img
                        src={imageUrl}
                        css={{ width: 24, height: 24 }}
                    />
                    <div css={{
                        position: 'relative',
                        "&:after": {
                            content: '""',
                            backgroundColor: 'var(--bar-color)',
                            height: 2,
                            top: 'calc(100% + 13px)',
                            insetInline: 0,
                            position: 'absolute',
                            display: 'var(--display)'
                        }
                    }}>
                        <span
                            css={{
                                fontWeight: 600,
                                fontSize: 12,
                            }}>
                            {title}
                        </span>
                    </div>
                </div>
            </button >
        </div>
    )
}

export default Tabs;