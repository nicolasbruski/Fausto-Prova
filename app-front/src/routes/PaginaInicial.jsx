import React from "react";
import "../styles/PaginaInicial.css";
import CardFarmacia from "../components/CardFarmacia";
import catarinense from "../assets/catarinense.png";
import nissei from "../assets/nissei.png";
import panvel from "../assets/panvel.png";
import precoPopular from "../assets/precoPopular.png";
import pagueMenos from "../assets/pagueMenos.png";
import { Button } from "react-bootstrap";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GridOnIcon from "@mui/icons-material/GridOn";

export default function PaginaInicial() {
  return (
    <div className="paginaInicial">
      <div className="buttons conteudo">
        <Button variant="light" className="button-nav">
          <GridOnIcon />
          <span>TODOS OS DEPARTAMENTOS</span>
        </Button>
        <Button variant="light" className="button-nav">
          <GridOnIcon />
          MAIS BUSCADOS
        </Button>
        <Button variant="light" className="button-nav">
          MARCAS SELECIONADAS
        </Button>
        <Button variant="light" className="button-nav">
          FARMACIAS PRÓXIMAS
        </Button>
      </div>
      <div className="farmacia conteudo">
        <h1>Principais Farmácias</h1>
        <div className="farmacias">
          <CardFarmacia imagem={catarinense} nome="Catarinense" />
          <CardFarmacia imagem={nissei} nome="Nissei" />
          <CardFarmacia imagem={panvel} nome="Panvel" />
          <CardFarmacia imagem={precoPopular} nome="Preço Popular" />
          <CardFarmacia imagem={pagueMenos} nome="Pague Menos" />
        </div>
      </div>
      <div className="medicamentos conteudo">
        <h1>Os Mais Buscados</h1>
        <div className="medicamentos">
          <div className="button-right">
            {/*make icon left arrow with material ui/*/}
            <Button variant="light">
              <ChevronLeftIcon />
            </Button>
          </div>
          <div className="medicamento"></div>
          <div className="button-left">
            <Button variant="light">
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
