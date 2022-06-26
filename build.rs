use image::{
    open,
    imageops::{resize, FilterType},
};

fn main() {
    let srcimg = "./src/decks/IMG_20190505_212405544 1.png";
    println!("cargo:rerun-if-changed={}", srcimg);
    let img = open(srcimg).unwrap();
    let img400 = resize(&img, 400, 400, FilterType::Nearest);
    img400.save("./src/decks/Gilberto400.png").unwrap();
}