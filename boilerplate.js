const style=`
    <style>
        
    </style>
`;

function getTemplate(self){
    return `
        ${style}
        
        <div class="${self.dataset.class||''}"
            style="${self.dataset.style||''}"
        >

        </div>
        
    `;
}

class NozakiX extends HTMLElement {
    constructor() {
        super();
        
        //this.shadowRoot
        this.attachShadow({mode: 'open'});
        
        this.shadowRoot.innerHTML=getTemplate(this);

        return this;
    }

    static get observedAttributes() {
        return [
            
        ];
    }

    async connectedCallback(){
        
        return this;
    }

    async disconnectedCallback(){

        return this;
    }

    async attributeChangedCallback(name, oldVal, newVal){

        return this;
    }

}

customElements.define('nozaki-x', NozakiX);

export {
    NozakiX as default,
    NozakiX
}