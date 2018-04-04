import React, { Component } from 'react';
import { Image, FormGroup, FormControl, ControlLabel, HelpBlock, Button, Grid, Row, Col} from 'react-bootstrap'
import Paty from './img/paty.svg';
import Logo from './img/logo-gmail.png'
import './login.css'

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
            <Grid className="loginView">  
                <Row className="content">
                    <Col xs={12}  >
                        <Image src={Paty} className="patyImg" responsive />
                    </Col>
                </Row>
                <Row className="content">
                    <Col xs={12}  >
                        <Image src={Logo} className="logo" responsive />
                    </Col>
                </Row>

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
                            className="form"
                        />
                        <FormControl
                            type="password"
                            value={this.state.value}
                            placeholder="Por favor ingrese su contraseña"
                            onChange={this.handleChange}
                            className="form"
                        />
                        <Button bsStyle="primary">INICIAR SESIÓN</Button>
                        <FormControl.Feedback />
                        <HelpBlock>Registrar</HelpBlock>
                        <HelpBlock>Olvidaste tu contraseña</HelpBlock>
                    </FormGroup>
                </form>
            </Grid>
        );
    }
}

export default Login;