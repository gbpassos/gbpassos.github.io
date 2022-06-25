use yew::prelude::*;
use gloo;
use web_sys;
use wasm_bindgen::JsCast;

mod decks;
use decks::apresentacao::Apresentacao;

enum Msg {
    AddOne,
    DoNothing,
    KeyUp(Event)
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
                gloo::console::log!(self.value);
                // the value has changed so we need to
                // re-render for it to appear on the page
                true
            }
            Msg::DoNothing => false,
            Msg::KeyUp(event) => {
                let jevent = event.dyn_ref::<web_sys::KeyboardEvent>().unwrap();
                // gloo::console::log!("keyup",jevent.key_code());
                match jevent.key_code() {
                    39 => {
                        self.value += 1;
                        true
                    },
                    37 => {
                        self.value -= 1;
                        if self.value < 0 { self.value = 0 };
                        true
                    },
                    _ => false
                }
            }
        }
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        // This gives us a component's "`Scope`" which allows us to send messages, etc to the component.
        let link = ctx.link();
        html! {
            <div>
                {
                    match self.value {
                        0 => html!{ <Apresentacao /> },
                        1 => html!{ <Apresentacao /> },
                        _ => html!{}
                    }
                }
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
        let cb: Callback<Event>= link.callback(|event: Event| Msg::KeyUp(event));
        let listener = gloo::events::EventListener::new(&document, "keyup", move | event | {
            cb.emit(event.clone());
            // link.send_message(Msg::KeyUp(event.clone()));
            // let event = event.dyn_ref::<web_sys::KeyboardEvent>().unwrap();
            // gloo::console::log!("listener",event.key_code());
        });
        self.kbd_listener.replace(listener);
    }
}

fn main() {
    yew::start_app::<Model>();
}