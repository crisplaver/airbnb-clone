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
    selected,
    onClick
}: {
    title: string,
    imageUrl: string,
    selected: boolean,
    onClick: () => void
}) => {
    return (
        <button
            css={{
                backgroundColor: 'transparent',
                border: 0
            }}
            onClick={onClick}>
            <div
                css={{
                    width: 'max-content',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '--opacity': selected ? 1 : 0,
                    '--bar-color': selected ? 'black' : '#DDDDDD',
                    padding: '14px 12px',
                    gap: '4px',
                    ":hover": {
                        '--opacity': 1,
                        img: {
                            filter: 'contrast(1)',
                        },
                        span: {
                            filter: 'contrast(1)',
                        }
                    }
                }}>
                <img
                    src={imageUrl}
                    css={{
                        width: 24,
                        height: 24,
                        filter: selected ? 'contrast(1)' : 'contrast(calc(13 / 44))',
                        transition: 'all 0.2s',
                    }}
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
                        opacity: 'var(--opacity)'
                    }
                }}>
                    <span
                        css={{
                            fontWeight: 600,
                            fontSize: 12,
                            filter: selected ? 'contrast(1)' : 'contrast(calc(13 / 44))',
                            transition: 'all 0.2s',
                        }}>
                        {title}
                    </span>
                </div>
            </div>
        </button >
    )
}

export default Tabs;