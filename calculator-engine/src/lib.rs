mod utils;

use wasm_bindgen::prelude::*;

//#[wasm_bindgen]
//pub struct Test {
//    value: char
//}
//
//#[wasm_bindgen]
//impl Test {
//    pub fn new() -> Test {
//        let value: char = 'a';
//        Test {
//            value
//        }
//    }
//
//    pub fn value(&self) -> char {
//        self.value
//    }
//
//    pub fn change_value(&mut self) {
//        self.value = 'b';
//    }
//}


#[wasm_bindgen]
pub fn return_char() -> char {
    return 'a';
}
