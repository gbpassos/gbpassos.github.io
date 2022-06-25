use yew::prelude::*;
use stylist::Style;

static CSS_ERROR_MSG: &str = "Erro na formação do css";

pub struct Apresentacao {
    nome: &'static str,
    historia: Vec<&'static str>,
    proposito: &'static str,
}

impl Component for Apresentacao {
    type Message = ();
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Apresentacao {
            nome: "Gilberto Passos Lima",
            historia: vec![
                "Gilberto é "
            ],
            proposito: r#"
            Ajudo empresas e profissionais a solucionarem seus problemas,
            viabilizando seu crescimento pessoal e profissional,
            por meio de planos de ação focados na inovação"#
        }
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        let padding: i32 = 2;
        let style = Style::new(format!(r#"
        width: calc(100% - 2*{padding}em);
        height: calc(100% - 2*{padding}em);
        margin: 0 auto;
        padding: {padding}em;
        "#, padding = padding)).expect(CSS_ERROR_MSG);
        let img_container = Style::new(r#"
        width: 50%;
        height: 100%;
        float: right;
        "#).expect(CSS_ERROR_MSG);
        let img_style = Style::new(r#"
        width: 100%;
        margin-top: calc(100vh/2 - 100vw/4);
        background-color: white;
        width: 100%;
        border-radius: 100%;
        "#).expect(CSS_ERROR_MSG);

        html! {
            <div class={style.get_class_name().to_owned()}>
                <div class={img_container.get_class_name().to_owned()}>
                    <img class={img_style.get_class_name().to_owned()} src="./IMG_20190505_212405544 1.png" alt="me"/>
                </div>
                <div>
                    <h1>{self.nome}</h1>
                    {
                        self.historia.clone().into_iter().map(|paragrafo| {
                            html!{<p>{paragrafo}</p>}
                        }).collect::<Html>()
                    }
                    <div>
                        {self.proposito}
                    </div>
                </div>
            </div>
        }
    }
}
