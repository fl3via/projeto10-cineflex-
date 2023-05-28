import styled from "styled-components"
import axios from 'axios'
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

export default function SeatsPage() {
    const [assentos, setAssentos] = useState(undefined)
    const { idSessao } = useParams()

    const [assentoSelecionado, setAssentoSelecionado] = useState([]);

    useEffect(() => {

        const urlAssentos = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`

        const promise = axios.get(urlAssentos)

        promise.then((res) => {
            setAssentos(res.data)
            console.log(res.data)
        })
        promise.catch((err) => {
            console.log(err.res.data)

        })
    }, [])

    if (assentos === undefined) {
        return <div>Aguarde...</div>
    }

    function statusDoAssento(seat) {
        if (!seat.isAvailable) {
            alert("Esse assento não está disponível");
            return;
        }

        const isSelected = assentoSelecionado.some((s) => s.id === seat.id);
        const updatedSeats = isSelected
            ? assentoSelecionado.filter((s) => s.id !== seat.id)
            : [...assentoSelecionado, seat];

        setAssentoSelecionado(updatedSeats);
    }



    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {assentos.seats.map((a) => (
                    <SeatItem data-test="seat"
                        key={a.id}
                        onClick={() => statusDoAssento(a)}
                        status={
                            !a.isAvailable ? "unavailable" :
                                assentoSelecionado.some((s) => s.id === a.id) ? "selected" :
                                    "available"}>
                        {a.name}
                    </SeatItem>
                ))}


            </SeatsContainer>

            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircle status={'selected'} />
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle status={'available'} />
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle status={'unavailable'} />
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <FormContainer >
                Nome do Comprador:
                <input placeholder="Digite seu nome..." />

                CPF do Comprador:
                <input placeholder="Digite seu CPF..." />

                <button>Reservar Assento(s)</button>
            </FormContainer>

            <FooterContainer data-test="footer">
                <div>
                    <img src={assentos.movie.posterURL} alt={assentos.movie.title} />
                </div>
                <div>
                    <p>{assentos.movie.title}</p>
                    <p>{assentos.day.weekday} - {assentos.name}</p>
                </div>

            </FooterContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const FormContainer = styled.form`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle = styled.div`
  border: 1px solid ${(props) =>
        props.status === "available"
            ? "#7B8B99"
            : props.status === "selected"
                ? "#0E7D71"
                : props.status === "unavailable"
                    ? "#F7C52B"
                    : undefined};
background-color: ${(props) =>
        props.status === "available"
            ? "#C3CFD9"
            : props.status === "selected"
                ? "#1AAE9E"
                : props.status === "unavailable"
                    ? "#FBE192"
                    : undefined};
  height: 25px;
  width: 25px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`

const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`
const SeatItem = styled.div`
  border: 1px solid ${(props) =>
        props.status === "available"
            ? "#7B8B99"
            : props.status === "selected"
                ? "#0E7D71"
                : props.status === "unavailable"
                    ? "#F7C52B"
                    : undefined};
  background-color: ${(props) =>
        props.status === "available"
            ? "#C3CFD9"
            : props.status === "selected"
                ? "#1AAE9E"
                : props.status === "unavailable"
                    ? "#FBE192"
                    : undefined};
  height: 25px;
  width: 25px;
  border-radius: 25px;
  font-family: 'Roboto';
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`

const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`