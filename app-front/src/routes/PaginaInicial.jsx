import React from 'react';
import '../styles/PaginaInicial.css';
import CardFarmacia from '../components/CardFarmacia';

export default function PaginaInicial() {
    return (
        <div className="paginaInicial">
            <div className="farmacia">
                <h1>Principais Farmácias</h1>
                <div className="farmacias">
                    <CardFarmacia />
                </div>
            </div>
        </div>
    )
}