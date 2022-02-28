import { Col, Row } from 'antd'
import React from 'react'

function ProductWarning({ text }) {
    return (
        <div
            className='product-warning'
        >

            <Row justify={'start'} align={'middle'}>
                <Col xs={3} sm={3} md={2} lg={2} xl={2} style={{ display: 'flex' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" fill="#D92D20" />
                    </svg>
                </Col>
                <Col xs={21} sm={21} md={22} lg={22} xl={22}>
                    <span style={{
                        color: '#475467',
                        fontWeight: 400
                    }}>{text}</span>

                </Col>
            </Row>






        </div>
    )
}

export default ProductWarning