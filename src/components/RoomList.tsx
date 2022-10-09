import { Room } from "../apis/rooms"
import { ReactComponent as StarIcon } from '../assets/star.svg';
import { ReactComponent as HeartIcon } from '../assets/heart.svg';
import { ReactComponent as LeftIcon } from '../assets/left.svg';
import { ReactComponent as RightIcon } from '../assets/right.svg';
import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

const RoomList = ({
    items,
    isCollabsed,
    onScroll
}: {
    items: Room[],
    isCollabsed: boolean,
    onScroll: (scrollY: number) => void
}) => {
    useEffect(() => {
        let prevScrollY = window.scrollY
        window.onscroll = (v) => {
            let currentScrollY = window.scrollY;
            onScroll(currentScrollY - prevScrollY);
            prevScrollY = currentScrollY;
        }
    }, [])
    return (
        <div
            css={{
                visibility: isCollabsed ? 'hidden' : undefined
            }}>
            {!isCollabsed &&
                <div
                    css={{
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
                    }}
                >
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
            }
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
        <div
            css={{
                position: 'relative',
                '@media (hover: hover)': {
                    '#arrow-button-wrapper': {
                        transition: 'all 0.3s',
                        opacity: 1,
                        visibility: 'visible'
                    }
                }
            }}
        >
            <Pictures pictures={pictures} />
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

const Pictures = ({ pictures }: { pictures: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selected, setSelected] = useState(false);
    const scrollBoxRef = useRef<HTMLDivElement>(null);

    return (
        <div css={{ position: 'relative' }}>
            <div
                ref={scrollBoxRef}
                css={{
                    borderRadius: 12,
                    marginBottom: 12,
                    width: '100%',
                    aspectRatio: '20 / 19',
                    display: 'grid',
                    gridAutoFlow: 'column',
                    gridTemplateAreas: 'none',
                    gridAutoColumns: '100%',
                    overflowY: 'hidden',
                    overflowX: 'auto',
                    scrollSnapType: 'x mandatory',
                    '::-webkit-scrollbar': {
                        display: 'none'
                    }
                }}
            >
                {pictures.map((picture, index) => (
                    <Picture
                        index={index}
                        src={picture}
                        onChangeIndex={index => setCurrentIndex(index)}
                        css={{ scrollSnapStop: 'always' }}
                    />
                ))}
            </div>
            <div
                css={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 20,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <div
                    css={{
                        overflow: 'clip',
                        width: '55px'
                    }}>
                    <div
                        css={{
                            display: 'flex',
                            transform: `translateX(${-11 * clamp(currentIndex, 2, pictures.length - 2)}px)`,
                            transition: 'all 0.2s'
                        }}>
                        {new Array(20).fill(0).map((_, index) => (
                            <span
                                css={{
                                    flexShrink: 0,
                                    height: 6,
                                    width: 6,
                                    borderRadius: '50%',
                                    backgroundColor: 'white',
                                    margin: '0 2.5px',
                                    opacity: currentIndex === index ? 1 : 0.6
                                }} />
                        ))}
                    </div>
                </div>
            </div>
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
            <div
                id='arrow-button-wrapper'
                css={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: '50%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0 12px',
                    visibility: 'hidden',
                    opacity: 0
                }}
            >
                <ArrowButton
                    visible={currentIndex > 0}
                    onClick={() => {
                        setCurrentIndex(currentIndex - 1);
                        scrollBoxRef.current?.scrollBy({ left: -scrollBoxRef.current.clientWidth, behavior: 'smooth' })
                    }}
                >
                    <LeftIcon />
                </ArrowButton>
                <ArrowButton
                    visible={currentIndex < pictures.length - 1}
                    onClick={() => {
                        setCurrentIndex(currentIndex + 1);
                        scrollBoxRef.current?.scrollBy({ left: scrollBoxRef.current.clientWidth, behavior: 'smooth' })
                    }}
                >
                    <RightIcon />
                </ArrowButton>
            </div>
        </div>
    )
}

const Picture = ({ src, index, onChangeIndex }: { src: string, index: number, onChangeIndex: (index: number) => void }) => {
    const pictureRef = useRef<HTMLPictureElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                onChangeIndex(index)
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        });

        if (pictureRef.current) observer.observe(pictureRef.current);

        return () => {
            if (pictureRef.current) observer.unobserve(pictureRef.current)
        }
    }, [])

    return (
        <picture css={{ scrollSnapAlign: 'center' }} ref={pictureRef}>
            <source srcSet={src.replace('im_w=720', 'im_w=320')} media='(max-width: 743px)' />
            <source srcSet={src} media='(min-width: 743.1px) and (max-width: 1127px)' />
            <img src={src} css={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </picture>
    )
}

const ArrowButton = styled.button(({ visible }: { visible: boolean }) => ({
    border: '1px solid rgba(0, 0, 0, 0.08)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '50%',
    width: 32,
    height: 32,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    visibility: visible ? 'visible' : 'hidden',
    ':hover': {
        transform: 'scale(1.03)',
        transition: '0.3s scale'
    }
}))

const clamp = (value: number, left: number, right: number) => {
    if (value < left) return 0;
    if (value >= right) return right - 3;
    return value - 2
}

export default RoomList;