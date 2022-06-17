import axios from "axios"
import React, { useState } from "react"
import { navigate } from "gatsby"
import * as styles from "./contato.module.scss"
import Header from "../components/Header"

const Contact = () => {
    const [inputs, setInputs ] = useState({
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
    })
    const handleOnChange = (event) => {
        event.persist();
        setInputs((prev) => ({
            ...prev,
            [event.target.id]: event.target.value,
        }))
    }
    const handleOnSubmit = async (event) => {
        event.preventDefault();
        const response = await axios({
            method: "POST",
            url: "https://formbold.com/s/6Q4po",
            data: inputs,
        })
        console.log("indo", response)
        await navigate("/agradecimento/")
        console.log("done")
    }
    return (
        <div className={styles.container}>
            <Header/>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="nome">Como desejo ser chamado(a)</label>
                <input type="text" name="nome" id="nome" placeholder="Nome" onChange={handleOnChange}/>
                <label htmlFor="email">Email para receber a resposta</label>
                <input type="email" name="email" id="email" placeholder="Digite seu email" onChange={handleOnChange}/>
                <label htmlFor="assunto">Assunto</label>
                <input type="text" name="assunto" id="assunto" placeholder="Assunto" onChange={handleOnChange}/>
                <label htmlFor="mensagem">Mensagem</label>
                <textarea rows="6" name="mensagem" id="mensagem" placeholder="Digite sua mensagem" onChange={handleOnChange}></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contact;