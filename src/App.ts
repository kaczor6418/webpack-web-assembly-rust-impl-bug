import { Test } from "../calculator-engine/pkg/calculator_engine";

const template: string = `
<h1>TEST WEB-COMPONENT - TYPESCRIPT - WEB-ASSEMBLY-RUST - WEBPACK</h1>
`;

export class App extends HTMLElement {
    public static TAG: string = `kk-app`;

    public readonly shadowRoot!: ShadowRoot;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = template;
        const test: Test = Test.new();
        console.log(test.value());
        test.change_value();
        console.log(test.value());
    }
}
customElements.define(App.TAG, App);
