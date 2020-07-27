class NavbarApp extends HTMLElement {
  connectedCallback() {
    this.title = this.getAttribute("title") || null;
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav>
        <div class="nav-wrapper">
          <a href="" class="brand-logo center">${this.title}</a>
        </div>
      </nav>
    `;
  }
}

customElements.define("navbar-app", NavbarApp);
