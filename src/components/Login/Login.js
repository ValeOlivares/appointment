import React, { Component } from 'react';
import { Image, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
import Paty from './img/paty.svg';
import Logo from './img/logo-gmail.png'

class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div>
                <Image src={Paty} responsive />
                <Image src={Logo} responsive />
                <form>
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState()}
                    >
                        <ControlLabel>Please Log in to access this page</ControlLabel>
                        <FormControl
                            type="mail"
                            value={this.state.value}
                            placeholder="Por favor ingrese su email"
                            onChange={this.handleChange}
                        />
                        <FormControl
                            type="password"
                            value={this.state.value}
                            placeholder="Por favor ingrese su contraseña"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>Registrar</HelpBlock>
                        <HelpBlock>Olvidaste tu contraseña</HelpBlock>
                    </FormGroup>
                </form>
            </div>
        );
    }
}

export default Login;
