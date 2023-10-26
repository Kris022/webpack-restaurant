console.log("webpack works now");

```
<div class="header">La Restaurante</div>
<div class="navbar">
    <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
    </ul>
</div>
<div class="main">
    <img src="../src/bg.jpg" alt="">
    <h1>We have pizza!</h1>
    <h3>Other food too...</h3>
</div>
<div class="footer">2023 KMH | Source Code</div>
```;

const home = document.createElement("div");

function createNavbar() {
  const navbar = document.createElement("div");

  const homeButton = document.createElement("button");
  homeButton.textContent = "home";

  const menuButton = document.createElement("button");
  menuButton.textContent = "menu";

  const contactButton = document.createElement("button");
  contactButton.textContent = "contact";

  navbar.appendChild(homeButton);
  navbar.appendChild(menuButton);
  navbar.appendChild(contactButton);

  return navbar;
}
