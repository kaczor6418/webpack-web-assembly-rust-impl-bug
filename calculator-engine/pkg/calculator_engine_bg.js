import * as wasm from './calculator_engine_bg.wasm';

/**
* @returns {string}
*/
export function return_char() {
    var ret = wasm.return_char();
    return String.fromCodePoint(ret);
}

