import React from 'react';
import ReactDOM from 'react-dom/client';
import Calendario from './Calendario';

if (!customElements.get('calendario-block')) {
class CalendarioBlock extends HTMLElement {
  static get observedAttributes() {
    return ['input-data'];
  }

  constructor() {
    super();
    this.root = ReactDOM.createRoot(this);
    this.render();
    }
  render() {
    try {
      const data = JSON.parse(this.getAttribute('input-data').replace('data-input-:',''));      
      this.root.render(<Calendario data={data}/>);
    } catch (error) {
      // console.error(error);
    }
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'input-data') {
      this.render();
    }
  }
}

customElements.define('calendario-block', CalendarioBlock);
};