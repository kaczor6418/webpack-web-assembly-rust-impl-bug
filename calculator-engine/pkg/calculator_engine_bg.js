import * as wasm from './calculator_engine_bg.wasm';

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
*/
export class Test {

    static __wrap(ptr) {
        const obj = Object.create(Test.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_test_free(ptr);
    }
    /**
    * @returns {Test}
    */
    static new() {
        var ret = wasm.test_new();
        return Test.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    value() {
        var ret = wasm.test_value(this.ptr);
        return String.fromCodePoint(ret);
    }
    /**
    */
    change_value() {
        wasm.test_change_value(this.ptr);
    }
}

export const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

