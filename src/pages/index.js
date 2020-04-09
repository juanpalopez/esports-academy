import React from "react"
import { Row, Col, Layout} from "antd"
import Template from "../layouts/base"
import '../assets/styles/index.css'
import { AreaChartOutlined } from'@ant-design/icons'


class IndexPage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Template>
                

                <Layout>
                        <Row justify="center">
                            <Col xs={24} className="main-feature">
                                <h2>Main Feat</h2>
                            </Col>
                        </Row>
                        <Row justify="center" className="features-section"> 
                            <Col xs={24} lg={8}className="feature">
                                <h3><AreaChartOutlined />Sub Feat 1</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </Col>
                            <Col xs={24} lg={8}className="feature">
                                <div>
                               
                                    <h3> <AreaChartOutlined />Sub Feat 2</h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </Col>
                            <Col xs={24} lg={8}className="feature">
                                <h3><AreaChartOutlined />Sub Feat 3</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </Col>
                        </Row>
                        <Row className="bigFeatures">
                            <Col lg={12} xs={24} className="bigFeature1"><h2>Big Feature 1</h2></Col>
                            <Col lg={12} xs={24} className="bigFeature2"><h2>Big Feature 2</h2></Col>
                        </Row>
                        <Row className="stats">
                            <Col lg={9} xs={24} className="platform-stat-title">
                                <h2>Te convertiras en un gran jugador</h2>
                            </Col>
                            <Col lg={5} xs={24} className="platform-stat">
                                <h3>4</h3>
                                <p>de juegos favoritos</p>
                            </Col>
                            <Col lg={5} xs={24} className="platform-stat">
                                <h3>+20</h3>
                               <p>horas de contenido</p>
                               
                            </Col>
                            <Col lg={5} xs={24} className="platform-stat">
                                <h3>10</h3> 
                                <p>de lo mejores coaches</p>
                            </Col>
                        </Row>
                </Layout>



            </Template>
        )
    }
}

export default IndexPage