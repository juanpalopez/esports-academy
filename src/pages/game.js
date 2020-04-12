import React from "react"
import ReactPlayer from 'react-player'
import { Row, Col, Card, Progress, Button} from "antd"
import '../assets/styles/dashboard.css'
import Template from "../layouts/base.user"
const { Meta } = Card;


class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: [
                {
                    title:"Fornite Masterclass",
                    lessons: 10,
                    coaches: 15,
                    image:"https://i.ytimg.com/vi/X7_T_rq5wys/maxresdefault.jpg"
                },
                
                {
                    title:"Fornite primeros pasos",
                    lessons: 10,
                    coaches: 15,
                    image:"https://www.proguides.com//public/media/games/fortnite/game-banner.jpg"
                },
                
                {
                    title:"Fornite aprendiendo a construir",
                    lessons: 10,
                    coaches: 15,
                    image:"https://www.proguides.com//public/media/games/fortnite/game-banner.jpg"
                },
                
                {
                    title:"Fornite pro-builder",
                    lessons: 10,
                    coaches: 15,
                    image:"https://www.proguides.com//public/media/games/fortnite/game-banner.jpg"
                },
                
                {
                    title:"Fornite box fighting",
                    lessons: 10,
                    coaches: 15,
                    image:"https://www.proguides.com//public/media/games/fortnite/game-banner.jpg"
                },
                
                {
                    title:"Fornite dominando Arena",
                    lessons: 10,
                    coaches: 15,
                    image:"https://www.proguides.com//public/media/games/fortnite/game-banner.jpg"
                },
                
            ]
        }
    }
    render() {
        return (
            <Template>
                <Row className="last-watched" justify="center">
                        <Col lg={12} className="last-watched-title">
                            <h3>Sigue viendo</h3>
                            <h2>
                                Fornite - Introducción al juego
                            </h2>
                            <Progress
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            percent={50.0}
                            showInfo={false} 
                            />
                            <Button ghost size="large" className="btn-resume">Continua el curso</Button>

                        </Col>
                        <Col lg={12}>
                            <ReactPlayer url='https://youtu.be/Ozg94nY3tQo' />
                        </Col>

                </Row>

                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        {this.state.courses.map(course => {
                            return <Col lg={8} sm={12}  xs={24} style={{marginBottom:"10px"}}>
                                    <Card
                                        className="course-card"
                                        hoverable
                                        bordered="false"
                                        cover={<img alt={course.title} src={course.image} />}
                                    >
                                    <Meta title={course.title} description={`Clases: ${course.lessons} - Coaches: ${course.coaches}`} />
                                </Card>
                            </Col>

                        })}
                    </Row>
                </div>


            </Template>
        )
    }
}

export default IndexPage