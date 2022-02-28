import React, { useState } from 'react'
import { Button, Col, Divider, Image, Row, Space, Tooltip } from 'antd'
import CartMinusIcon from '../../assets/icons/CartMinusIcon'
import CartPlusIcon from '../../assets/icons/CartPlusIcon'
import ProductWarning from '../warning/productWarning'
function ProductCard({ id, title, subtitle, price, quantity, image, warning, warningText }) {

    const [qty, setQty] = useState(1)


    const increment = () => {
        setQty(qty + 1);
    }
    const decrement = () => {
        setQty(qty - 1);
    }

    return (
        <>
            <Row style={{ marginTop: 16 }}>
                <Col span={5}>
                    <Image width={60} src={image || 'https://joeschmoe.io/api/v1/random'} preview={false} />
                </Col>
                <Col span={19} >
                    <Row>
                        <Col span={24}>
                            <div className='product-info'>
                                <div className='product-name'> {title || 'City Seltzer Sparkling Water - Orange Cream'} </div>
                                <Tooltip title={''}>
                                    <div className='product-subtitle'>{subtitle || ''}</div>
                                </Tooltip>
                            </div>
                        </Col>
                        <Col span={24}>
                            <Space>


                                <Button type="link" size={'small'} disabled={qty == 1}
                                    onClick={decrement}
                                    icon={<CartMinusIcon />}
                                />
                                <span style={{
                                    fontWeight: 600,
                                    fontSize: 16
                                }}>
                                    {qty}
                                </span>
                                <Button type="link" size={'small'}
                                    onClick={increment}
                                    icon={<CartPlusIcon />}
                                />


                                {/* <Button type="link" onClick={() => removeItem()} loading={loader} className='product-remove-btn'>Remove</Button> */}
                            </Space>
                        </Col>
                        <Col span={24} style={{ textAlign: 'end' }}>
                            <span className='product-price'>{price || '$12.79'}</span>
                        </Col>
                    </Row>
                </Col>

            </Row>
            {warning && <ProductWarning text={warningText || 'Bummer. We only have 3 in stock.'} />}


            <Divider style={{ margin: '12px 0' }} />
        </>
    )
}

export default ProductCard