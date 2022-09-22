import { Interpolation, Theme } from "@emotion/react"
import { Room } from "../apis/rooms"
import { ReactComponent as StarIcon } from '../assets/star.svg';
import { ReactComponent as HeartIcon } from '../assets/heart.svg';
import { useState } from "react";

const RoomList = ({
    items,
    containerCss
}: {
    items: Room[],
    containerCss: Interpolation<Theme>
}) => {
    return (
        <div css={containerCss}>
            <div css={{
                display: 'grid',
                gridTemplateColumns: 'repeat(var(--breakpoint-grid_columns, 1), minmax(0, 1fr))',
                gap: '40px 24px',
                paddingLeft: 'var(--padding, 24px)',
                paddingRight: 'var(--padding, 24px)',
                marginTop: 24,
                marginBottom: 40,
                '@media (min-width: 550px)': {
                    '--breakpoint-grid_columns': 2,
                    '--padding': '24px'
                },
                '@media (min-width: 950px)': {
                    '--breakpoint-grid_columns': 3,
                },
                '@media (min-width: 1128px)': {
                    '--breakpoint-grid_columns': 4
                },
            }}>
                {items.map(item => (
                    <RoomListItem
                        title={item.listing.title}
                        location={item.listing.structuredContent.primaryLine[0].body}
                        period={item.listing.structuredContent.secondaryLine[0].body}
                        price={item.pricingQuote.structuredStayDisplayPrice.primaryLine.price}
                        qualifier={item.pricingQuote.structuredStayDisplayPrice.primaryLine.qualifier}
                        avgRating={item.listing.avgRating}
                        pictures={item.listing.contextualPictures.map(({ picture }) => picture)}
                    />
                ))}
            </div>
        </div>
    )
}

const RoomListItem = ({
    title,
    location,
    period,
    price,
    qualifier,
    avgRating,
    pictures
}: {
    title: string,
    location: string,
    period: string,
    price: string,
    qualifier: string,
    avgRating: number | null,
    pictures: string[]

}) => {
    const [selected, setSelected] = useState(false);

    return (
        <div css={{ position: 'relative' }}>
            <div css={{ borderRadius: 12, overflow: 'clip', marginBottom: 12, width: '100%', aspectRatio: '20 / 19' }}>
                <img src={pictures[0]} css={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                <button
                    css={{
                        padding: 8,
                        border: 0,
                        position: 'absolute',
                        backgroundColor: 'transparent',
                        top: 6,
                        right: 6,
                        ":active": {
                            transform: 'scale(0.9)',
                            transition: 'all 0.2s'
                        }
                    }}
                    onClick={() => setSelected(!selected)}
                >
                    <HeartIcon stroke={'white'} fill={selected ? '#FF385C' : 'rgba(0, 0, 0, 0.5)'} />
                </button>
            </div>
            <div css={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div
                    css={{
                        fontSize: 15,
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        marginRight: 8
                    }}>{title}</div>
                <div css={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <StarIcon />
                    <div css={{ fontSize: 15, marginLeft: 4 }}>{avgRating || 'NEW'}</div>
                </div>
            </div>
            <div css={{ fontSize: 15, marginTop: 2, color: 'rgb(113, 113, 113)' }}>{location}</div>
            <div css={{ fontSize: 15, marginTop: 2, color: 'rgb(113, 113, 113)' }}>{period}</div>
            <div css={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                <div css={{ fontSize: 15, fontWeight: 600 }}>{price}</div>
                <div css={{ fontSize: 15 }}>&nbsp;{qualifier}</div>
            </div>
        </div>
    )
}

export default RoomList;