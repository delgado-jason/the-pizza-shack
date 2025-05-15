import { removeActive } from './helper';


function menuPage() {

    // Get the menu button element
    menuBtn = document.getElementById('menuBtn')

    // Remove active class from other button
    removeActive(menuBtn.id);

    // Add class active to menu button
    menuBtn.classList.add('active');

    // Get the main content DOM element
    const mainContent = document.getElementById('content');
    mainContent.innerHTML = `
        <section id="menu">
            <h1>Our Cheesy Menu</h1>
            <div class="menu-card">
                <h2>Fresh Pizza</h2>
                <div class="menu-content">
                    <p class="menu-item">BBQ Chicken</p>
                    <p class="menu-price">$19.99</p>
                    <p class="menu-item">Prociutto</p>
                    <p class="menu-price">$19.99</p>
                    <p class="menu-item">Margherita</p>
                    <p class="menu-price">$19.99</p>
                    <p class="menu-item">4 Stagioni</p>
                    <p class="menu-price">$19.99</p>
                    <p class="menu-item">Vegetariana</p>
                    <p class="menu-price">$19.99</p>
                    <p class="menu-item">Pepperoni</p>
                    <p class="menu-price">$19.99</p>
                </div>
            </div>
        </section>
    `;
}

export default menuPage;