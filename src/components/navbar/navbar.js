import { LeftOutlined, MenuOutlined } from '@ant-design/icons'
import { Row, Col, Space, Button } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React from 'react'
import MainLogo from '../../assets/icons/MainLogo'
import MainLogoMobile from '../../assets/icons/MainLogoMobile'
import MenuIcon from '../../assets/icons/MenuIcon'
import ShoppingBagIcon from '../../assets/icons/ShoppingBagIcon'


function Navbar() {

    return (
        <Header id="header">
            <Row justify="space-between" style={{
                flex: 1
            }}>
                <Col xs={2} sm={2} md={8} lg={8} xl={8} style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <MenuIcon />
                </Col>
                <Col xs={0} sm={0} md={8} lg={8} xl={8} className='hide-on-sm' style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <MainLogo />
                </Col>
                <Col xs={20} sm={20} md={0} lg={0} xl={0} className='logo-hide-on-lg' style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <MainLogoMobile />
                </Col>
                <Col xs={2} sm={2} md={8} lg={8} xl={8} style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                    <label className='header-label hide-on-sm'>Sign in for 1 hour delivery</label>
                    <ShoppingBagIcon />
                    <label className='header-count'>9</label>
                </Col>
            </Row>
        </Header>
    )
}

export default Navbar
