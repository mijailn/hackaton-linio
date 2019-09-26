import React, { useState } from 'react';
import 'bulma'
import axios from 'axios';

import {
    Content,
    Hero,
    Container,
    Heading,
    Section,
    Columns,
    Box,
    Image,
    Notification,
    Button
} from 'react-bulma-components';

const _host = 'http://192.168.11.237';

function LoginUser(props) {

    const [user, setUser] = useState([]);
    const [view, setView] = useState('login');
    const [hasError, setError] = useState(false);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        var bodyFormData = new FormData();
        bodyFormData.set('_username', user['_username']);
        bodyFormData.set('_password', user['_password']);

        axios({
            method: 'post',
            url: _host + '/api/login',
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(function (response) {
                localStorage.setItem("hackaton-mosca", response.data.token);
                props.history.replace('/Home');
            })
            .catch(function (response) {
                console.log(response);
                setError(true);
            });
    };

    const handleOnSubmitRegistration = (event) => {
        event.preventDefault();
        var bodyFormData = new FormData();
        bodyFormData.set('_username', user['_username']);
        bodyFormData.set('_email', user['_email']);
        bodyFormData.set('_password', user['_password']);

        axios({
            method: 'post',
            url: _host + '/api/register',
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(function (response) {
                props.history.replace('/Home');
                console.log(response);
            })
            .catch(function (response) {
                props.history.replace('/');
                console.log(response);
            });
    };

    const onChange = (event) => {
        event.preventDefault();
        const cloneUser = { ...user };
        cloneUser[event.currentTarget.name] = event.currentTarget.value;
        setUser(cloneUser);
    };

    return (
        <div>
            <Section>
                <Container fluid>
                    <Box>
                        <Columns breakpoint="desktop">
                            <Columns.Column>
                                <Image src="../assets/logo.png" />
                            </Columns.Column>

                            <Columns.Column>
                                {hasError && <Notification color="danger">
                                    Error al iniciar sesión <Button remove />
                                </Notification>}

                                <h1 class="title">
                                    <span onClick={() => setView('login')}>Iniciar Sesión</span> |
                                    <span onClick={() => setView('Registration')}> Crear Cuenta</span>
                                </h1>

                                {
                                    view === 'login' && <section className="loginForm">
                                        <form onSubmit={handleOnSubmit}>
                                            <div className="field">
                                                <label className="label">Username</label>
                                                <div className="control has-icons-left has-icons-right">
                                                    <input className="input is-success" name={'_username'} type="text" onChange={onChange} />
                                                </div>
                                            </div>

                                            <div className="field">
                                                <label className="label">Password</label>
                                                <div className="control has-icons-left has-icons-right">
                                                    <input className="input is-success" type="password" name={'_password'}
                                                        onChange={onChange} />
                                                </div>
                                            </div>

                                            <div className="field is-grouped">
                                                <div className="control">
                                                    <button type={'submit'} className="button is-link">Submit</button>
                                                </div>
                                                <div className="control">
                                                    <button className="button is-text">Cancel</button>
                                                </div>
                                            </div>
                                        </form>
                                    </section>
                                }
                                {
                                    view !== 'login' && <section className="loginForm">
                                        <form onSubmit={handleOnSubmitRegistration}>
                                            <div className="field">
                                                <label className="label">Username</label>
                                                <div className="control has-icons-left has-icons-right">
                                                    <input className="input is-success" name={'_username'} type="text" onChange={onChange} />
                                                </div>
                                                <p className="help is-success">This username is available</p>
                                            </div>

                                            <div className="field">
                                                <label className="label">Email</label>
                                                <div className="control has-icons-left has-icons-right">
                                                    <input className="input is-danger" type="email" name={'_email'}
                                                        onChange={onChange} />
                                                </div>
                                                <p className="help is-danger">This email is invalid</p>
                                            </div>

                                            <div className="field">
                                                <label className="label">Password</label>
                                                <div className="control has-icons-left has-icons-right">
                                                    <input className="input is-danger" type="password" name={'_password'}
                                                        onChange={onChange} />
                                                </div>
                                                <p className="help is-danger">invalid</p>
                                            </div>

                                            <div className="field">
                                                <div className="control">
                                                    <label className="checkbox">
                                                        <input type="checkbox" /> I agree to the <a href="#">terms and conditions</a>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="field is-grouped">
                                                <div className="control">
                                                    <button type={'submit'} className="button is-link">Submit</button>
                                                </div>
                                                <div className="control">
                                                    <button className="button is-text">Cancel</button>
                                                </div>
                                            </div>
                                        </form>
                                    </section>
                                }
                            </Columns.Column>
                        </Columns>
                    </Box>
                </Container>
            </Section>
        </div>
    );
}

export default LoginUser;