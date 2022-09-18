import { Interpolation, Theme } from "@emotion/react"
import { Room } from "../apis/rooms"
import { ReactComponent as StarIcon } from '../assets/star.svg';

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
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '40px 24px'
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
    return (
        <div>
            <img src={pictures[0]} />
            <div css={{ display: 'flex', flexDirection: 'row' }}>
                <div>{title}</div>
                <div css={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <StarIcon />
                    <div>{avgRating}</div>
                </div>
            </div>
            <div>{location}</div>
            <div>{period}</div>
            <div css={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div>{price}</div>
                <div>{qualifier}</div>
            </div>
        </div>
    )
}

export default RoomList;