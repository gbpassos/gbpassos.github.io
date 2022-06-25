use yew::prelude::*;
use stylist::{css, StyleSource, YieldStyle, Style};

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
        let img_container = Style::create("imgcontainer", r#"
            width: 50%;
            height: 100%;
            float: right;
        "#).expect("Erro no processamento do estilo");
        let img_style = Style::new(css!(r#"
            width: 100%;
            margin-top: calc(100vh/2 - 100vw/4);
            background-color: white;
            width: 100%;
            border-radius: 100%;
        "#)).expect("erro");
        html! {
            <div class={style.get_class_name().to_owned()}>
                <div class={img_container.get_class_name().to_owned()}>
                    <img class={img_style.get_class_name().to_owned()} src="./IMG_20190505_212405544 1.png" alt="me"/>
                </div>
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