import React from 'react';
import '../styles/PaginaInicial.css';
import CardFarmacia from '../components/CardFarmacia';
import catarinense from '../assets/catarinense.png';

export default function PaginaInicial() {
    return (
        <div className="paginaInicial">
            <div className="farmacia">
                <h1>Principais Farmácias</h1>
                <div className="farmacias">
                    <CardFarmacia imagem={catarinense} nome="Catarinense"/>
                    <CardFarmacia />
                    <CardFarmacia />
                    <CardFarmacia />
                </div>
            </div>
        </div>
    )
}