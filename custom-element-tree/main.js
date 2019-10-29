class MyLeaf extends HTMLElement {
  connectedCallback() {
    this.attachShadow({
      mode: 'open'
    });

    const dataLeaf = JSON.parse(this.dataset.tree);

    this.shadowRoot.innerHTML = `
      <style>
        h3 {
            padding-left: 20px;
            margin: 10px 0;
            color: #666;
        }
      </style>
      <h3>Leaf-element id = "${dataLeaf.id}"</h3>
    `;
  }
}

class MyTree extends HTMLElement {
  constructor() {
    super();

    this.styleTree = `
      <style>
          :host {
              display: block;
              padding-left: 20px;
              font-family: Arial;
          }
          h2 {
              margin: 0 0 10px;
              color: #222;
          }
          .active my-leaf {
            display: none;
          }
      </style>
    `;
  }

  connectedCallback() {
    this.attachShadow({
      mode: 'open'
    });

    const dataTree = JSON.parse(this.dataset.tree);
    const title = document.createElement(`h2`);
    this.shadowRoot.innerHTML = this.styleTree;
    title.innerText = `Tree-element id = "${dataTree.id}" ▼`;
    this.shadowRoot.appendChild(title);

    this.changeComponent(dataTree);
  }

  changeComponent(treeElements) {
    const wrapper = document.createElement(`div`);

    treeElements.items.forEach(item => {
      const childElement = document.createElement(item.items ? `my-tree` : `my-leaf`);

      childElement.dataset.tree = JSON.stringify(item);
      wrapper.appendChild(childElement);
    });

    this.shadowRoot.appendChild(wrapper);
  }
}

customElements.define('my-leaf', MyLeaf);
customElements.define('my-tree', MyTree);
