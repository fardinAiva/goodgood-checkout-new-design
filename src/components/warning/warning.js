import { Col, Row } from 'antd'
import React from 'react'

function warning() {
    return (
        <Row className='warning-div'>
            <Col span={18} style={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="20" rx="10" fill="#DD2590" />
                    <path d="M10.0001 5.99497L13.7651 12.5H6.23506L10.0001 5.99497ZM5.37006 12C4.98506 12.665 5.46506 13.5 6.23506 13.5H13.7651C14.5351 13.5 15.0151 12.665 14.6301 12L10.8651 5.49497C10.4801 4.82997 9.52006 4.82997 9.13506 5.49497L5.37006 12ZM9.50006 8.49997V9.49997C9.50006 9.77497 9.72506 9.99997 10.0001 9.99997C10.2751 9.99997 10.5001 9.77497 10.5001 9.49997V8.49997C10.5001 8.22497 10.2751 7.99997 10.0001 7.99997C9.72506 7.99997 9.50006 8.22497 9.50006 8.49997ZM9.50006 11H10.5001V12H9.50006V11Z" fill="white" />
                </svg>

                <label style={{
                    fontWeight: 500,
                    fontSize: 16,
                    marginLeft: 10
                }}>
                    Next day delivery requires a minimum order of $20.

                </label>

            </Col>
            <Col span={6} style={{
                display: 'flex',
                justifyContent: 'flex-end',
            }}>
                <label
                    style={{
                        fontWeight: 500,
                        fontSize: 16,
                    }}
                >

                    Continue shopping
                </label>

            </Col>
        </Row>
    )
}

export default warning