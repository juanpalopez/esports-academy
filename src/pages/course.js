import React from "react"
import { Row, Col, Steps, Card} from "antd"
import ReactPlayer from 'react-player'
import '../assets/styles/course.css'
import Template from "../layouts/base.user"
const { Meta } = Card;
const { Step } = Steps;


class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0,
            lessons: [
                {
                    title:"Fornite - Paso 1",
                    duration: 10,
                    progress:0.75
                },
                {
                    title:"Fornite - Paso 2",
                    duration: 10,
                    progress:0.75
                },
                {
                    title:"Fornite - Paso 3",
                    duration: 10,
                    progress:0.75
                },
                {
                    title:"Fornite - Paso 4",
                    duration: 10,
                    progress:0.75
                },
                {
                    title:"Fornite - Paso 5",
                    duration: 10,
                    progress:0.75
                },
                {
                    title:"Fornite - Paso 6",
                    duration: 10,
                    progress:0.75
                },
                
                
                
            ]
        }
    }
    render() {
        const { current } = this.state;
        return (
            <Template>
 

                <div className="site-card-wrapper">
                    <Row  justify="center">
                        <Col xs={24}>
                            <Card
                                className="course-card"
                                hoverable
                                bordered="false"
                            >
                                <Steps current={current} onChange={this.onChange} direction="horizontal">
                                    {this.state.lessons.map(lesson => {
                                        return <Step title={lesson.title} description="This is a description."> 
                                        
                                        </Step>
                                    })}
                                </Steps>
                            </Card>
                        </Col>
                        <Col xs={24}>
                            <Card
                                className="lesson-card"
                                hoverable
                                bordered="false"
                            >
                                <Row>
                                <Col lg={10} xs={24}>
                                     <ReactPlayer overflow="hidden" width="100%" className="lesson" url='https://youtu.be/Ozg94nY3tQo' />
                                </Col>
                                <Col lg={14} xs={24}>
                                    <div className="video-description">
                                        <h2>
                                            Fornite Paso 1
                                        </h2>
                                        <p>
                                            Aprendras las primeros pasos de Fortnite y la mécanica del juego así como empezar a practicar.
                                        </p>

                                    </div>
                                </Col>
                                </Row>
                            </Card>
                        </Col>
                        
                    </Row>
                </div>


            </Template>
        )
    }

    onChange = current => {
        console.log('onChange:', this.state.current);
        this.setState({ current });
    };
}

export default IndexPage