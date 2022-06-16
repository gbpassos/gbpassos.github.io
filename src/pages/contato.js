import * as React from "react"
import * as styles from "./contato.module.scss"
import Header from "../components/Header"

const contact = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <form action="" method="POST">
                <label for="nome">Como desejo ser chamado(a)</label>
                <input type="text" name="nome" id="nome" placeholder="Nome"/>
                <label for="email">Email para receber a resposta</label>
                <input type="email" name="email" id="email" placeholder="Digite seu email"/>
                <label for="assunto">Assunto</label>
                <input type="text" name="assunto" id="assunto" placeholder="Assunto"/>
                <label for="mensagem">Mensagem</label>
                <textarea rows="6" name="mensagem" id="mensagem" placeholder="Digite sua mensagem"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default contact;