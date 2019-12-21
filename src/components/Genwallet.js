import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export default class Genwallet extends Component {
    render() {
        return (
      <Form>
        <Form.Group controlId="formWalletName">
          <Form.Label>Wallet Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your wallet name" />
        </Form.Group>

        <Form.Group controId="formWalletPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Choose a password" inline="true"/>
          <Form.Check type="checkbox" inline="true"/>
          <Form.Text className="text-muted">
            8-16 characters long including shifts numbers and especial characters
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I agree to the Terms and Conditions, Privacy, and Legal Issues documents" />
        </Form.Group>

        <Button variant="primary" type="submit">Next</Button>
      </Form>
        )
    }
}