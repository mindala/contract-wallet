import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export default class Recoverwallet extends Component {
    render() {
        return (
      <Form>
        <Form.Text className="text">
            Heads Up! At recovery, the wallet is unable to check if your password is correct or not, If you provide a wrong password, a wallet will be recovered with the provided Recovery Words and password combination
        </Form.Text>
        <Form.Group controlId="formWalletName">
          <Form.Label>Wallet Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your wallet name" />
        </Form.Group>
        <Form.Group controId="formWalletPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controId="formRecoveryWords">
          <Form.Control type="text" placeholder="Recovery Words" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Show Advanced Options" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Recover
        </Button>
      </Form>
        )
    }
}