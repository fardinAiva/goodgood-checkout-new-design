import { Col, Row } from 'antd'
import React from 'react'

function SummaryItem({ textLeft, textRight, isBold, underline, style }) {
    return (
        <Row justify={'space-between'} align={'middle'} style={{
            paddingTop: 12,
            paddingBottom: 12,
        }}>
            <Col><span className={isBold ? 'bold summary-item-label' : 'summary-item-label'}>{textLeft}</span></Col>
            <Col><span className={isBold ? 'bold summary-item-label' : 'summary-item-label'}>{textRight}</span></Col>
        </Row>
    )
}

export default SummaryItem