import { Space } from 'antd'
import React from 'react'

export default function CustomTitle(props) {

    let { content, icon, underline, size } = props

    return (
        <Space>
            {/* {icon ? <div className={`title-icon ${size}`} style={{ height: 18, width: 18 }}>{icon}</div> : null} */}
            <div className={`header-new ${size}`}>
                {content}
                {/* {underline === false ? '' : <div className='yellow-margin'></div>} */}
            </div>
        </Space>
    )
}