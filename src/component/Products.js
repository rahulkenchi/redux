import React from 'react'
import { Container, Card, Row, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import itemsList from './products.json'

function Products(props) {


    return (
        <Container>
            <Row>
                {itemsList.Lists.map((element, index) =>
                    <Card className="col-3" style={{ width: '200px', margin: '20px', textAlign: 'center' }}>
                        <Card.Img src={`https://picsum.photos/200/200?icecream?=${index}`}></Card.Img>
                        <Card.Body>
                            <Card.Title>{element.name}</Card.Title>
                            <Card.Text style={{ color: 'red', fontSize: 'large', fontWeight: 'bold' }}>Rs {element.price}</Card.Text>
                            <Button variant="primary"
                                onClick={() => props.add(element)}  >Add</Button>
                        </Card.Body>
                    </Card>
                )}
            </Row>
        </Container >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: function (element) {
            dispatch({ type: 'ADD', payload: element })
        }
    }
}
export default connect(null, mapDispatchToProps)(Products);