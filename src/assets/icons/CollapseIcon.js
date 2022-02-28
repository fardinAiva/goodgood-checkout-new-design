import React from 'react'

function CollapseIcon({ state }) {
    return (
        <span style={{
            textAlign: 'end'
        }}>

            {
                state ?
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 12.5L10 7.5L5 12.5" stroke="#344054" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
                    </svg>

                    :
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="#667085" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
                    </svg>


            }    </span>
    )
}

export default CollapseIcon