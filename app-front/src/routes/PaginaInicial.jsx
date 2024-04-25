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
import paracetamol from "../assets/paracetamol.png";
import CardMedicamento from "../components/CardMedicamento";

const medicamentos = [
  {
    nome: "Paracetamol",
    imagem: paracetamol,
    dosagem: "500mg",
  },
  {
    nome: "Dipirona",
    imagem: paracetamol,
    dosagem: "500mg",
  },
  {
    nome: "Ibuprofeno",
    imagem: paracetamol,
    dosagem: "500mg",
  },
  {
    nome: "Dorflex",
    imagem: paracetamol,
    dosagem: "500mg",
  },
  {
    nome: "Doril",
    imagem: paracetamol,
    dosagem: "500mg",
  },
  {
    nome: "Novalgina",
    imagem: paracetamol,
    dosagem: "500mg",
  },
  {
    nome: "Buscopan",
    imagem: paracetamol,
    dosagem: "500mg",
  },
  {
    nome: "Omeprazol",
    imagem: paracetamol,
    dosagem: "500mg",
  },
  {
    nome: "Ranitidina",
    imagem: paracetamol,
    dosagem: "500mg",
  },
  {
    nome: "Dorflex",
    imagem: paracetamol,
    dosagem: "500mg",
  },
  {
    nome: "Doril",
    imagem: paracetamol,
    dosagem: "500mg",
  }
];

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
            <Button variant="light">
              <ChevronLeftIcon />
            </Button>
          </div>
          <div className="medicamento">
            {medicamentos.map((medicamento) => (
              <CardMedicamento
                imagem={medicamento.imagem}
                nome={medicamento.nome}
                dosagem={medicamento.dosagem}
              />
            ))}
          </div>
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
