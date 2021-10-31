import React from 'react'
import './index.less'

interface IAppContentProps {
    content: string    
}

const AppContent = (props: IAppContentProps) => {
    return <>
        <h1>{ props.content }</h1>
        <p className="desc">My name is Friday</p>
    </>
}

export default AppContent