import React from "react"
import { Carousel, Row, Col, Card } from "antd"
import Template from "../layouts/base"
import banner1 from "../assets/images/banner1.png"
import banner2 from "../assets/images/banner2.png"
import banner3 from "../assets/images/banner3.jpg"
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
                <Carousel>
                    <div>
                        <img src={banner1} className="carousel"></img>
                    </div>
                    <div>
                        <img src={banner2} className="carousel"></img>
                    </div>
                    <div>
                        <img src={banner3} className="carousel"></img>
                    </div>
                </Carousel>

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