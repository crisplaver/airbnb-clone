import { useState } from "react"
import styled from '@emotion/styled';

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
        <Button onClick={onClick}>
            <ContentWrapper selected={selected}>
                <Image src={imageUrl} selected={selected} />
                <TextWrapper>
                    <Text selected={selected}>{title}</Text>
                </TextWrapper>
            </ContentWrapper>
        </Button >
    )
}

const Button = styled.button({
    backgroundColor: 'transparent',
    border: 0
})

const ContentWrapper = styled.div(({ selected }: { selected: boolean }) => ({
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
    },
    ":active": {
        img: {
            transform: 'scale(0.90)',
            filter: 'contrast(1)',
        },
        span: {
            transform: 'scale(0.90) translateY(-2px)',
            filter: 'contrast(1)',
        }
    }
}))

const Image = styled.img(({ selected }: { selected: boolean }) => ({
    width: 24,
    height: 24,
    filter: selected ? 'contrast(1)' : 'contrast(calc(13 / 44))',
    transition: 'all 0.2s',
}))

const TextWrapper = styled.div(() => ({
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
}))

const Text = styled.div(({ selected }: { selected: boolean }) => ({
    fontWeight: 600,
    fontSize: 12,
    filter: selected ? 'contrast(1)' : 'contrast(calc(13 / 44))',
    transition: 'all 0.2s',
    display: 'block',
    color: '#484848'
}))

export default Tabs;