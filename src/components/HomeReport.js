import React from 'react';
import MapReport from './MapReport'

export default () => (
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <div href="" role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>

                <div class="navbar-menu" id="navMenu">
                    <div class="navbar-item">Buscar Ruta Segura</div>
                    <div class="navbar-item">Reportar Incidente</div>
                    <div class="navbar-item">Ayuda</div>
                </div>
            </div>
        </nav>
        <MapReport />
    </div>
)
