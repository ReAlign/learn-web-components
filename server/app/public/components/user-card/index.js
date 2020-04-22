class UserCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({
      mode: 'closed',
    });

    const templateElem = document.currentScript.ownerDocument.querySelector('#wc-tpl');
    const content = templateElem.content.cloneNode(true);
    content.querySelector('img').setAttribute('src', this.getAttribute('image'));
    content.querySelector('.container>.name').innerText = this.getAttribute('name');
    content.querySelector('.container>.email').innerText = this.getAttribute('email');

    shadow.appendChild(content);
  }
}

window.customElements.define('user-card', UserCard);
