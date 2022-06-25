

pub enum ListType {
    Bullet,
    Number,
    Square,
}

pub trait PortableText<'a> {
}

pub trait Mark<'a> {
    fn key(&self) -> &'a str;
}

pub struct Block<'a> {
    style: &'a str,
    pub children: Vec<Box<dyn PortableText<'a>>>,
    mark_defs: Vec<Box<dyn Mark<'a>>>,
    list_item: Option<ListType>,
    level: u32,
}

impl<'a> Block<'a> {
    fn new(style: &'a str) -> Block<'a> {
        Block {
            style,
            children: Vec::new(),
            mark_defs: Vec::new(),
            list_item: None,
            level: 0
        }
    }
    fn append_child(&mut self, child: impl PortableText<'a> + 'static) -> &Self {
        self.children.push(Box::new(child));
        self
    }
    fn style(&self) -> &'a str {
        self.style
    }
    fn children(&self) -> &Vec<Box<dyn PortableText<'a>>> {
        &self.children
    }
}

impl<'a> PortableText<'a> for Block<'a> {
}

pub struct Span<'a> {
    marks: Vec<&'a str>,
    pub text: &'a str,
}

impl<'a> Span<'a> {
    fn new(text: &'a str) -> Span<'a> {
        Span {
            marks: Vec::new(),
            text
        }
    }
}

impl<'a> PortableText<'a> for Span<'a> {
}