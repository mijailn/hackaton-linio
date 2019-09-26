import React, { Fragment, PureComponent } from 'react';

import {
    Content,
    Hero,
    Container,
    Heading,
    Section,
    Columns,
    Box,
    Image
} from 'react-bulma-components';

export default () => (
    <div>
        <Section>
            <Container fluid>
                <Box>
                    <Columns breakpoint="desktop">
                        <Columns.Column>
                            <Image src="../assets/logo.png" />
                        </Columns.Column>

                        <Columns.Column>
                            <h1 class="title">Iniciar Sesión | Crear Cuenta</h1>

                            <section className="loginForm">
                                <div class="columns">
                                    <div class="column">
                                        <div class="field">
                                            <label class="label">Email</label>
                                            <div class="control">
                                                <input class="input" type="email" placeholder="Your Email | Su email" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="columns">
                                    <div class="column">
                                        <div class="field">
                                            <label class="label">Contraseña</label>
                                            <div class="control">
                                                <input class="input" type="password" placeholder="Your pass | Su contraseña" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="columns">
                                    <div class="column">
                                        <div class="field">
                                            <button class="button">Iniciar Sesión</button>
                                        </div>
                                    </div>
                                </div>
                            </section> 
                        </Columns.Column>
                    </Columns>
                </Box>
            </Container>
        </Section>
    </div>
) 