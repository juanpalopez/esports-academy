import React from 'react'
import {Layout,Carousel, Row, Col} from 'antd'

// import '../assets/styles/base.css'
import '../assets/styles/base.css'
import NavBar from '../components/navbar'
import FooterSection from '../components/footer'
const {Header, Content} = Layout

class Template extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="site">
                <Layout>
                    <div className="header">

                        <Header >
                            <NavBar></NavBar>
                        </Header>
                        {/* <Carousel >
                            <div>
                                <h1>Lleva tu juego al siguiente nivel</h1>
                            </div>
                        </Carousel>
                        <Row>
                            <div className="wave">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 1440 320">
                                    <path fill="#f0f2f5" 
                                            fill-opacity="1" 
                                            d="M0,64L40,101.3C80,139,160,213,240,218.7C320,224,400,160,480,117.3C560,75,640,53,720,80C800,107,880,181,960,202.7C1040,224,1120,192,1200,170.7C1280,149,1360,139,1400,133.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">

                                    </path>
                                </svg>
                            </div>
                        </Row> */}
                    </div>
                    <Content>
                        {this.props.children}
                    </Content>
                    <FooterSection>eSports Academy ©{new Date().getFullYear()}</FooterSection>
                </Layout>
            </div>
        )
    }
}

export default Template