import React, { Fragment, PureComponent } from 'react';
import MapContainer from './MapContainer'

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
        <MapContainer />
    </div>
) 
