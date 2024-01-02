import React from 'react'

export const TabButton = (props) => {
    return (
        <li>
            <button>
                {props.children}
            </button>
        </li>
    )
}
