use yew::prelude::*;
use stylist::Style;
use super::CSS_ERROR_MSG;
use crate::utils::sanity::SanityClient;
use gloo::console::log;

#[function_component(Experiencia)]
pub fn foto_direita() -> Html {
    let state = use_state(|| String::from("Waiting ..."));
    let state_clone = state.clone();
    use_effect(move || {
        let client = SanityClient::new("d2gx3w55", "production", false);
        let callback = Callback::from(move |body: String| {
            // state_clone.set(body);
        });
        let text = client.query("*[_type == \"author\"]{image,\"imageUrl\": image.asset->url}".to_string(), callback);
        || ()
    });
    html! {
        <div>
            <h2>{"Experiência"}</h2>
            <div>{&*state}</div>
        </div>
    }
}