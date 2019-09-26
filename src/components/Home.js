import React from 'react';

import {
    Section,
    Container
} from 'react-bulma-components';

export default () => (
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>

                <div class="navbar-menu" id="navMenu">
                    <a class="navbar-item">Buscar Ruta Segura</a>
                    <a class="navbar-item">Reportar Incidente</a>
                    <a class="navbar-item">Ayuda</a>
                </div>
            </div>
        </nav>

        <Section>
            <Container>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30102.50964239615!2d-99.16888666044919!3d19.4204536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2smx!4v1569530048841!5m2!1spt-BR!2smx" frameborder="0" allowfullscreen="" class="mapHome"></iframe>
            </Container>
        </Section>
    </div>
)
