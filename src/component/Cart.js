import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'
function Cart(props) {

    return (
        <div>
            <Table striped bordered hover>
                <tbody>
                    {props.mycounter.map((ele, index) =>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{ele.name}</td>
                            <td>{ele.price}</td>
                        </tr>
                    )}
                    <tr>
                        <td></td><td>Total</td>
                        <td>
                            {props.mycounter.reduce((sum, ele) => sum + ele.price, 0)}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div >
    )
}

const mapStateToProps = (state) => {
    return { mycounter: state.cart }
}

export default connect(mapStateToProps)(Cart)