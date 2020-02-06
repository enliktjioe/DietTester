import * as React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavBarLoggedIn from "../navbarloggedin/NavBarLoggedIn";
import Breakfast1 from "../resources/lentil-stroganoff.jpg"
import Image from "react-bootstrap/Image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 2000, min: 1024 },
        items: 3,
        slidesToSlide: 1, // optional, default to 1.
    },
};


export class Menu extends React.Component {
    render() {
        return (
            <div>
                <NavBarLoggedIn/>
                <h1>7-Day meal plan</h1>
                <Card border="success" style={{ width: '1170px', maxWidth: '1170px', margin: 'auto'}}>
                    <Card.Body>
                        <Card.Title>Fact about being a vegan</Card.Title>
                        <Card.Text>
                            The fact
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite={false}
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 3,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    <div>
                        <Card border="success" style={{margin: '20px'}}>
                            <Card.Body>
                                <Card.Title style={{textAlign: 'center'}}>07.02.2020</Card.Title>
                                <Card.Text>
                                    <Card border="success">
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <Col style={{ width: '9rem' }}>
                                                        <Card.Title>Lentil stroganoff (Oil-free, GF)</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Breakfast1} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col style={{ width: '9rem' }}>
                                                        <Card.Text>
                                                            Time to make: 45 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                    <Card border="success" style={{marginTop: '15px'}}>
                                        <Card.Body>
                                            <Container >
                                                <Row>
                                                    <Col style={{ width: '9rem' }}>
                                                        <Card.Title>Lentil stroganoff (Oil-free, GF)</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Breakfast1} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col style={{ width: '9rem' }}>
                                                        <Card.Text>
                                                            Time to make: 45 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                    <Card border="success" style={{marginTop: '15px'}}>
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <Col style={{ width: '9rem' }}>
                                                        <Card.Title>Lentil stroganoff (Oil-free, GF)</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Breakfast1} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col style={{ width: '9rem' }}>
                                                        <Card.Text>
                                                            Time to make: 45 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card border="success" style={{margin: '20px'}}>
                            <Card.Body>
                                <Card.Title style={{textAlign: 'center'}}>07.02.2020</Card.Title>
                                <Card.Text>
                                    <Card border="success">
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <Col style={{ width: '9rem' }}>
                                                        <Card.Title>Lentil stroganoff (Oil-free, GF)</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Breakfast1} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col style={{ width: '9rem' }}>
                                                        <Card.Text>
                                                            Time to make: 45 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                    <Card border="success" style={{marginTop: '15px'}}>
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <Col style={{ width: '9rem' }}>
                                                        <Card.Title>Lentil stroganoff (Oil-free, GF)</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Breakfast1} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col style={{ width: '9rem' }}>
                                                        <Card.Text>
                                                            Time to make: 45 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                    <Card border="success" style={{marginTop: '15px'}}>
                                        <Card.Body>
                                            <Container>
                                                <Row>
                                                    <Col style={{ width: '9rem' }}>
                                                        <Card.Title>Lentil stroganoff (Oil-free, GF)</Card.Title>
                                                    </Col>
                                                    <Col style={{ width: '8rem' }}>
                                                        <Image style={{width: '110px', height: '110px'}} src={Breakfast1} roundedCircle />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col style={{ width: '9rem' }}>
                                                        <Card.Text>
                                                            Time to make: 45 min
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>

                </Carousel>


                <p>
                    <Container style={{width: '290px', maxWidth: '290px', margin: 'auto'}}>
                        <Form>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Sync my meal plan with calendar"/>
                            </Form.Group>
                        </Form>
                    </Container>
                </p>
                <p>
                    <Button style={{width: '400px', maxWidth: '400px', margin: 'auto'}} href="./shopping-list" variant="outline-success" size="lg" block>Get my shopping list</Button>
                </p>
                <p>
                    <Button style={{width: '400px', maxWidth: '400px', margin: 'auto'}} href="./logged-in-home" variant="outline-danger" size="lg" block>Cancel</Button>
                </p>
            </div>
        );
    }
}

export default Menu;