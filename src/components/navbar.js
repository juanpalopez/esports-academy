import React from 'react'
import {Menu, Avatar, Row, Col, Button} from 'antd'
import { UserOutlined } from '@ant-design/icons';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <Row>
                <Col xs={2}>
                    <Row justify="center">
                        <Col>
                            <div className="logo"></div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={20}>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                    >
                        <Menu.Item key="1">Dashboard</Menu.Item>
                        <Menu.Item key="2">Cursos</Menu.Item>
                        <Menu.Item key="3">Meta</Menu.Item>
                        <Menu.Item key="4">Estadísticas</Menu.Item>
                        <Button type="primary">Acelera tu progreso</Button>
                        
                    </Menu>
                </Col>
                <Col xs={2}>
                    <Row justify="center">
                        <Col>
                            <Avatar className="avatar"><UserOutlined/></Avatar>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default NavBar;