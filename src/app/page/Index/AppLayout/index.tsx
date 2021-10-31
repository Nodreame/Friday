import React from 'react'

interface IProps {
    children: React.ReactNode,
}

const AppLayout = (props: IProps) => {
    return <div>
        { props.children }
    </div>
}

export default AppLayout