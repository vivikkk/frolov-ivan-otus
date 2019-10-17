customElements.define('my-leaf', class extends HTMLElement {
  connectedCallback() {
    this.attachShadow({
      mode: 'open'
    });

    this.shadowRoot.innerHTML = `
      <style>
        h3 {
            padding-left: 20px;
            margin: 10px 0;
            color: #666;
        }
      </style>
      <h3>Leaf-element id = "${this.id}"</h3>
    `;
  }

  set data(value) {
    this._data = value;
  }

  get id() {
    return this._data.id;
  }
});

customElements.define('my-tree', class extends HTMLElement {
  constructor() {
    super();
    this.styleTree = `
      <style>
          :host {
              display: block;
              padding-left: 20px;
          }
          h2 {
              margin: 0 0 10px;
              color: #222;
          }
      </style>
    `;
  }

  connectedCallback() {
    this.attachShadow({
      mode: 'open'
    });

    const title = document.createElement(`h2`);
    this.shadowRoot.innerHTML = this.styleTree;
    title.innerText = `Tree-element id = "${this.id}" ▼`;
    this.shadowRoot.appendChild(title);

    this.changeComponent(this._data);
  }

  get id() {
    return this._data.id;
  }

  set data(value) {
    this._data = value;
  }

  changeComponent(treeElements) {
    const wrapper = document.createElement(`div`);

    treeElements.items.forEach(item => {
        const childElement = document.createElement(item.items ? `my-tree` : `my-leaf`);

        childElement.data = item;
        wrapper.appendChild(childElement);
    });

    this.shadowRoot.appendChild(wrapper);
  }
});

const treeData = {
  "id": 1,
  "items": [{
    "id": 2,
    "items": [
      {"id": 3},
      {
        "id": 4,
        "items": [
          {"id": 5},
          {
            "id": 6,
            "items": [
              {"id": 7},
              {"id": 8},
              {"id": 9}
            ]
          },
          {"id": 10}
        ]
      },
      {"id": 11},
    ],
  }]
};

const myTreeElement = document.createElement(`my-tree`);
myTreeElement.data = treeData;
document.body.appendChild(myTreeElement);
