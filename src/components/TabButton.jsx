import React from 'react'

export const TabButton = ({children, onSelect}) => {
    function handleClick(){
        console.log("clicked")
    }
    
    return (
        <li>
            <button onClick={onSelect}>
                {children}
            </button>
        </li>
    )
}