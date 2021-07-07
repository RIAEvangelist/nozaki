# nozaki
`nozaki` cli for creating boilerplate web components. 

## Install

`npm i -g nozaki` will give windows|mac|windows users access to the `nozaki` cli

### Use

```sh

#to create if needed and store the component in the ./components dir
$nozaki new custom-element 

#to create if needed and store the component in a specific dir
$nozaki new custom-element -dir ./wherever

```

### Boilerplate Example

```sh

#to create if needed and store the component in the ./components dir
$nozaki new custom-element 

```
#### creates

```js

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

class CustomElement extends HTMLElement {
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

customElements.define('custom-element', CustomElement);

export {
    CustomElement as default,
    CustomElement
}


```


### Checkout the nozaki-components lib/framework
[nozaki-components](https://github.com/RIAEvangelist/nozaki-components), modern vanilla components designed with ES6+ ESM first works in all modern browsers without transpiling.
