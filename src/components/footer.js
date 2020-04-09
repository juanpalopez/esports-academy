import React from 'react'
import { Row, Col, Button, Form, Input} from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';
import './footer.css'

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

class FooterSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            games:[
                {
                    title: "Fortnite",
                    url: ""
                },
                {
                    title: "League of Legends",
                    url: ""
                },
                {
                    title: "CSGO",
                    url: ""
                },
            ]
        }
    }

    render() {
        return (
            <div className="footer-wrapper">

                <Row>
                    <Col md={8} sm={24}>
                        <Row justify="center">
                            <div className="logo"></div>
                        </Row>
                    </Col>
                    <Col md={5} sm={24}>
                        <h2>Acerca de</h2>
                        <div>Empresa</div>
                        <div>Prensa</div>
                        <div>Carreras</div>
                    </Col>
                    <Col md={5} sm={24}>
                        <h2>Juegos</h2>
                        {this.state.games.map(game => {
                            return (<div>{game.title}</div>)
                        })}
                    </Col>
                    <Col md={6} sm={24}>
                        <Row justify="center">
                            <Col xs={24}>
                                <h2>Suscribete al Boletín</h2>
                                <Form name="horizontal_login" layout="inline">
                                    <Form.Item
                                        name="email"
                                        rules={[{ required: true, message: 'Please input your email!' }]}
                                    >
                                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="e-mail" />
                                    </Form.Item>
                                   
                                    <Form.Item shouldUpdate={true}>
                                        {() => (
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                            >
                                                Log in
                                            </Button>
                                        )}
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24}>
                                <h2>Nuestros canales</h2>
                            </Col>
                            <Row gutter={8}>
                                
                                <Col><IconFont className="social-icons" type="icon-facebook" /></Col>
                                <Col><IconFont className="social-icons" type="icon-twitter" /></Col>
    
                            </Row>
                        </Row>
                    </Col>

                </Row>
            </div>
        )
    }
}

export default FooterSection;