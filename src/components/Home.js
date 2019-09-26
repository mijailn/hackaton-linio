import React from 'react';
import MapContainer from './MapContainer'
import { Link } from 'react-router-dom'


export default () => (
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <div role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>

                <div class="navbar-menu" id="navMenu">
                    <div class="navbar-item">Buscar Ruta Segura</div>
                    <Link class="navbar-item" to="/report">Reportar Incidente</Link>
                    <div class="navbar-item">Ayuda</div>
                </div>
            </div>
        </nav>
        <MapContainer />
    </div>
) 
