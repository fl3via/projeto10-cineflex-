import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom"



export default function App() {
    axios.defaults.headers.common['Authorization'] = 'OfGSkO23s0u6UIaFW8pow685';


    const urlAssentos = 'https://mock-api.driven.com.br/api/v8/cineflex/showtimes/ID_DA_SESSAO/seats'



    return (
        <>
            <BrowserRouter>
                <NavContainer>
                    <Link to="/">
                    CINEFLEX
                    </Link>
                    
                   </NavContainer>

               
                <Routes>
                    <Route path="/" element={ <HomePage />} />
                    <Route path="/assentos/:idSessao" element= { <SeatsPage /> } />
                    <Route path="/sessoes/:idFilme" element= { <SessionsPage /> } />
                    <Route path="/sucesso" element={<SuccessPage />} />
                   
                   
                 
                </Routes>

            </BrowserRouter>
        </>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
