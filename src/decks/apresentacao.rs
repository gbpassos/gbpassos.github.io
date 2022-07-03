use yew::prelude::*;
use stylist::{css, StyleSource, YieldStyle, Style};
use super::CSS_ERROR_MSG;
use super::foto_direita::FotoADireita;

pub struct Apresentacao {
    nome: &'static str,
    formacao: Vec<&'static str>,
    experiencia: Vec<&'static str>
}

impl YieldStyle for Apresentacao {
    fn style_from(&self) -> StyleSource<'static> {
        css!(r#"
        width: calc(100% - 4em);
        heigh: calc(100% - 4em);
        margin: 0 auto;
        padding: 2em;
        "#)
    }
}

impl Component for Apresentacao {
    type Message = ();
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Apresentacao {
            nome: "Gilberto Passos Lima",
            formacao: vec![
                "Mestre em Engenharia da Produção (UFPR)",
                "Especialista em Gestão Estratégia de Tecnologia e Inovação (UTFPR)",
                "Engenheiro Industrial Eletricista com ênfase em Eletrônica e Telecomunicações (UTFPR)",
                "Tecnico em Eletrônica (CEFET-PR)",
            ],
            experiencia: vec![
                "Gestão de projetos",
                "Metrologia",
                "Gestão de empresas",
                "Startups",
                "Inovação",
            ]
        }
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        let style = self.style();
        html! {
            <div class={style.get_class_name().to_owned()}>
                <FotoADireita/>
                <div>
                    <h1>{self.nome}</h1>
                    <h2>{"Formação"}</h2>
                    <ul>
                        {
                            self.formacao.clone().into_iter().map(|formacao| {
                                html!{<li>{formacao}</li>}
                            }).collect::<Html>()
                        }
                    </ul>
                    <h2>{"Experiência"}</h2>
                    <ul>
                        {
                            self.experiencia.clone().into_iter().map(|formacao| {
                                html!{<li>{formacao}</li>}
                            }).collect::<Html>()
                        }
                    </ul>
                </div>
            </div>
        }
    }
}