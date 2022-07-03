use yew::prelude::*;
use stylist::Style;
use super::CSS_ERROR_MSG;
use super::foto_direita::FotoADireita;
use super::experiencia::Experiencia;
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
            por meio de planos de ação focados na inovação e tecnologia"#
        }
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        let padding: i32 = 2;
        let style = Style::new(format!(r#"
        width: calc(100% - 2*{padding}em);
        margin: 0 auto;
        padding: {padding}em;
        "#, padding = padding)).expect(CSS_ERROR_MSG);


        html! {
            <div class={style.get_class_name().to_owned()}>
                <FotoADireita/>
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
                    <Experiencia/>
                </div>
            </div>
        }
    }
}
