import "./CSS/Contato.css";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

export default function PaginaInicial(){
    return(
        <div>
            <div className='Titulo'>
                <h2>Agendamento de Remédios</h2>
            </div>
            <div className="Conteudo">
                <div className="Esquerda">
                <Dropdown as={ButtonGroup}>
                    <Button variant="secondary">Selecione o Remédio para Agendar</Button>

                    <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
                <div className="Direita">

                </div>
            </div>
        </div>
    )
}