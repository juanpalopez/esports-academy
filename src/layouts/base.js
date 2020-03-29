import React from 'react'
import {Layout} from 'antd'

import '../assets/styles/index.css'
import NavBar from '../components/navbar'
const {Header, Content, Footer} = Layout

class Template extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="site">
                <Layout>
                    <Header>
                        <NavBar></NavBar>
                    </Header>
                    <Content>
                        {this.props.children}
                    </Content>
                    <Footer>eSports Academy ©{new Date().getFullYear()}</Footer>
                </Layout>
            </div>
        )
    }
}

export default Template