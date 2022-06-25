use yew::prelude::*;
use gloo;
use web_sys;
use wasm_bindgen::JsCast;

mod decks;
use decks::apresentacao::Apresentacao;

enum Msg {
    AddOne,
    DoNothing,
}

struct Model {
    value: i64,
    kbd_listener: Option<gloo::events::EventListener>,
}

impl Component for Model {
    type Message = Msg;
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Self {
            value: 0,
            kbd_listener: None,
        }
    }

    fn update(&mut self, _ctx: &Context<Self>, msg: Self::Message) -> bool {
        match msg {
            Msg::AddOne => {
                self.value += 1;
                // the value has changed so we need to
                // re-render for it to appear on the page
                true
            }
            Msg::DoNothing => false
        }
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        // This gives us a component's "`Scope`" which allows us to send messages, etc to the component.
        let link = ctx.link();
        html! {
            <div>
                <Apresentacao />
                <Apresentacao />
                // <button onclick={link.callback(|_| Msg::AddOne)}>{ "+1" }</button>
                <p>{ self.value }</p>
            </div>
        }
    }

    // https://github.com/yewstack/yew/issues/372
    fn rendered(&mut self, ctx: &Context<Self>, first_render: bool) {
        if !first_render {
            return;
        }
        let document = gloo::utils::document();
        let link = ctx.link().clone();
        let listener = gloo::events::EventListener::new(&document, "keyup", move | event | {
            let event = event.dyn_ref::<web_sys::KeyboardEvent>().unwrap();
            gloo::console::log!(event.key_code());
        });
        self.kbd_listener.replace(listener);
    }
}

fn main() {
    yew::start_app::<Model>();
}