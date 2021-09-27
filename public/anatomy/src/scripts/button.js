/* function buttonHandler(element) {
  element.addEventListener('click', e => {
    console.log(e);
  });
} */

/* class AButton extends HTMLElement {

}
window.customElements.define('app-drawer', AppDrawer);
 */

class Action extends HTMLButtonElement {
  constructor() {
    super();
    this.classList.add('bsds-cta');
    this.onclick = this.handleClick;
  }

  handleClick = () => {
    console.log('custom click');
  }
}
customElements.define('aty-action', Action, { extends: 'button' });

class Tooltip {
  isOpen = false;

  constructor(trigger, tooltip) {
    this.trigger = trigger;
    this.tooltip = tooltip;
  }

  open() {
    this.tooltip.style.display = 'block';
  }

  close() {
    this.tooltip.style.display = 'block';
  }
}