import axios from "axios"
import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import * as styles from "./contato.module.scss"
import Header from "../components/Header"

const Contact = () => {
    useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://www.google.com/recaptcha/api.js?render=6Lfo6H4gAAAAABmzbv3Wx0lFcbWJ6KOXP8-szKPz"
        script.id = "my-recaptcha-script"
        document.body.appendChild(script)
        return () => {
            // remove badge
            const nodeBadge = document.querySelector('.grecaptcha-badge');
            if (nodeBadge && nodeBadge.parentNode) {
                document.body.removeChild(nodeBadge.parentNode);
            }
            const script = document.querySelector(
                `script[src^='https://www.gstatic.com/recaptcha/releases']`
            );
            if (script) { script.remove() }
            const second_script = document.querySelector('script#my-recaptcha-script')
            if (second_script) { second_script.remove() }

        }
    }, [])
    const [inputs, setInputs ] = useState({
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
        "g-recaptcha-response": ""
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
        if (window.grecaptcha) {
            window.grecaptcha.ready(async () => {
                let token = await window.grecaptcha.execute('6Lfo6H4gAAAAABmzbv3Wx0lFcbWJ6KOXP8-szKPz', {action: 'submit'})
                setInputs((prev) => ({
                    ...prev,
                    "g-recaptcha-response": token
                }))
                await axios({
                    method: "POST",
                    url: "https://formbold.com/s/6Q4po",
                    data: inputs,
                })
                console.log("indo")
                await navigate("/agradecimento/")
                console.log("done")
            });
        }
    }
    return (
        <div className={styles.container}>
            <Header/>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="nome">Como desejo ser chamado(a)</label>
                <input type="text" name="nome" id="nome" placeholder="Nome" onChange={handleOnChange} required/>
                <label htmlFor="email">Email para receber a resposta</label>
                <input type="email" name="email" id="email" placeholder="Digite seu email" onChange={handleOnChange} required/>
                <label htmlFor="assunto">Assunto</label>
                <input type="text" name="assunto" id="assunto" placeholder="Assunto" onChange={handleOnChange}/>
                <label htmlFor="mensagem">Mensagem</label>
                <textarea rows="6" name="mensagem" id="mensagem" placeholder="Digite sua mensagem" onChange={handleOnChange} required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contact;