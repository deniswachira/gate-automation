import React from 'react'

interface ContainerProps {
    children: React.ReactNode
    className?: string
}
const Container = (props: Readonly<ContainerProps>) => {
    return (
        <div className={`xl:px-0 ${props.className ? props.className : ""}`}>
            {props.children}
        </div>
    )
}

export default Container