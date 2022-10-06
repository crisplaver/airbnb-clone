const RoomListHandle = ({
    isCollabsed
}: {
    isCollabsed: boolean
}) => {
    return (
        <div
            css={{
                position: 'fixed',
                backgroundColor: 'white',
                height: '100%',
                width: '100%',
                bottom: 0,
                transform: isCollabsed ? 'translateY(calc(100% - 80px))' : 'translateY(0px)',
                transition: 'all 0.5s',
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24
            }}>
            <div
                onDragStart={v => console.log(v)}
                css={{
                    marginTop: 32,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    "::before": {
                        position: 'absolute',
                        top: -24,
                        content: '""',
                        borderRadius: 4,
                        height: 4,
                        width: 40,
                        backgroundColor: 'rgba(32,32,32,0.2)'
                    }
                }}>
                <div
                    css={{
                        fontSize: 14,
                        fontWeight: 600,
                    }}
                >
                    국립공원 70개
                </div>
            </div>
        </div>
    )
}

export default RoomListHandle;