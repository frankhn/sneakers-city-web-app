import { AvField, AvForm } from 'availity-reactstrap-validation'
import { Col, Row, Label, Button } from 'reactstrap'


interface ICheckoutProps {
    handler: any
}

const checkout = ({ handler }: ICheckoutProps) => {

    return (
        <>
            <Label>Secured checkout</Label>
            <AvForm onValidSubmit={handler}>
                <Row>
                    <Col>
                        <AvField
                            type="text"
                            placeholder="Names on your Card"
                            name="names"
                            required
                        />
                    </Col>
                    <Col>
                        <AvField
                            type="text"
                            name="address"
                            placeholder="address"
                        />
                    </Col>
                </Row>
                <AvField
                    name="card"
                    type="number"
                    placeholder="Card Number"
                    required
                />
                <AvField
                    type='number'
                    placeholder="CCV"
                    name="CCV"
                    required
                />
                <Row>
                    <Col>
                        <AvField
                            type='email'
                            placeholder="Email"
                            name="email"
                            required
                        />
                    </Col>
                </Row>
                <Button type="submit">Place Order</Button>
            </AvForm>
        </>
    );
}

export default checkout;
