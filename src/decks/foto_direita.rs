use yew::prelude::*;
use stylist::Style;
use super::CSS_ERROR_MSG;

#[function_component(FotoADireita)]
pub fn foto_direita() -> Html {
    let img_container = Style::new(r#"
    width: 50%;
    float: right;
    "#).expect(CSS_ERROR_MSG);
    let img_style = Style::new(r#"
    width: 50%;
    margin-top: calc(100vh/2 - 100vw/4);
    background-color: white;
    border-radius: 100%;
    display: block;
    margin: 0 auto;
    "#).expect(CSS_ERROR_MSG);
    html! {
        <div class={img_container.get_class_name().to_owned()}>
            <img class={img_style.get_class_name().to_owned()} src="https://cdn.sanity.io/images/d2gx3w55/production/26a99720c3b6f900d898aec17f10c5dfd34a8965-3200x2910.png?w=400&h=400&fit=crop" alt="me"/>
        </div>
    }
}