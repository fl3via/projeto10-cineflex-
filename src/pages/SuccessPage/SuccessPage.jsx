import styled from "styled-components"
import { useLocation } from "react-router-dom";
import SeatsPage from "../SeatsPage/SeatsPage";

export default function SuccessPage() {
    const location = useLocation();
   const searchParams = new URLSearchParams(location.search);
    const infoCliente = location.state;
  

    const nome = searchParams.get('nome');
    const cpf = searchParams.get('cpf');
    const assentos = searchParams.getAll('assentos');
    const movie = searchParams.get('movie');
    const date = searchParams.get('date');
    const hour = searchParams.get('hour');

    return (
        <PageContainer>
            <h1>Pedido feito <br /> com sucesso!</h1>

            <TextContainer data-test="movie-day" >
                <strong><p>Filme e sessão</p></strong>
                <p>{infoCliente.movie}</p>
                <p data-test="showtime">{infoCliente.date} - {hour}</p>
            </TextContainer>

            <TextContainer>
                <strong><p>Ingressos</p></strong>
                {infoCliente.assentos.map((assento, index) => (
          <p key={index}>Assento {assento.id}</p>
        ))}
            </TextContainer>

            <TextContainer>
                <strong><p>Comprador</p></strong>
                <p>Nome: {infoCliente.nome}</p>
                <p>CPF: {infoCliente.cpf}</p>
            </TextContainer>

            <button>Voltar para Home</button>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: #293845;
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 70px;
    a {
        text-decoration: none;
    }
    button {
        margin-top: 50px;
    }
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
    }
`
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
`