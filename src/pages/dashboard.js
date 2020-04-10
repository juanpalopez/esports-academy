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
            games: [
                {
                    title:"Fornite",
                    lessons: 10,
                    coaches: 15,
                    image:"https://www.proguides.com//public/media/games/fortnite/game-banner.jpg"
                },
                {
                    title:"League of Legends",
                    lessons: 10,
                    coaches: 15,
                    image:"https://www.proguides.com//public/media/games/leagueoflegends/game-banner.png"
                },
                {
                    title:"CSGO",
                    lessons: 10,
                    coaches: 15,
                    image:"https://www.proguides.com//public/media/games/csgo/game-banner.png"
                },
                {
                    title:"World of Warcraft",
                    lessons: 10,
                    coaches: 15,
                    image:"https://www.proguides.com//public/media/games/world-of-warcraft/game-banner.png"
                },
                {
                    title:"OverWatch",
                    lessons: 10,
                    coaches: 15,
                    image:"https://www.proguides.com//public/media/games/overwatch/game-banner.png"
                },
                {
                    title:"Magic the Gathering",
                    lessons: 10,
                    coaches: 15,
                    image:"https://www.proguides.com//public/media/games/magic-the-gathering/game-banner.png"
                }
            ]
        }
    }
    render() {
        return (
            <Template>
                <Row className="last-watched" justify="center">
                    {/* <Row className="last-watched-wrapper"> */}
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
                            {/* <Card
                                className="last-video-card"
                                hoverable
                                bordered="true"
                                cover={<img alt="watched" src="https://store-images.s-microsoft.com/image/apps.19180.13510798882289269.9a2402be-acfb-4fe1-94ea-6d129827a1ab.eb5eeab5-0124-4a71-ac79-ed2ffa4b9494?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg" />}
                            >
                                <Meta title={game.title} description={`Clases: ${game.lessons} - Coaches: ${game.coaches}`} />
                            </Card> */}
                        </Col>

                    {/* </Row> */}
                </Row>

                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        {this.state.games.map(game => {
                            return <Col lg={8} sm={12}  xs={24}>
                                    <Card
                                        className="game-card"
                                        hoverable
                                        bordered="false"
                                        cover={<img alt={game.title} src={game.image} />}
                                    >
                                    <Meta title={game.title} description={`Clases: ${game.lessons} - Coaches: ${game.coaches}`} />
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