use yew::prelude::*;
use super::portable_text::{Block, Span, PortableText};

pub trait PortableTextYew<'a>: PortableText<'a> {
    fn html(&self) -> Html;
}

pub struct BlockYew<'a>(Block<'a>);

impl<'a> PortableText<'a> for BlockYew<'a> {}

pub struct SpanYew<'a>(Span<'a>);

impl<'a> PortableText<'a> for SpanYew<'a> {
}

impl<'a> PortableTextYew<'a> for SpanYew<'a> {
    fn html(&self) -> Html {
        html!{self.0.text}
    }

}

// impl<'a> PortableTextYew<'a> for BlockYew<'a> {
//     fn html(&self) -> Html {
//         html!{
//             self.0.children.into_iter().map(|child: PortableTextYew<'a>| child.html()).collect::<Html>()
//         }
//     }
// }

// impl<'a> From<dyn PortableText<'a>> for T where T: PortableTextYew<'a> {
//     fn from(&self) -> Self {
//         self as PortableTextYew
//     }
// }