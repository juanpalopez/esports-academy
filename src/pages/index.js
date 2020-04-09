import React from "react"
import { Row, Col, Layout} from "antd"
import Template from "../layouts/base"
import '../assets/styles/index.css'


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
                                <h3>Sub Feat 1</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </Col>
                            <Col xs={24} lg={8}className="feature">
                                <div>
                                <AreaChartOutlined />
                                    <h3>Sub Feat 2</h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </Col>
                            <Col xs={24} lg={8}className="feature">
                                <h3>Sub Feat 3</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </Col>
                        </Row>
                </Layout>



            </Template>
        )
    }
}

export default IndexPage