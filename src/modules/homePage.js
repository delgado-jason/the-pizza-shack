import Hero from '../assets/images/hero.jpg';
import { removeActive } from './helper';



function homePage() {

    
    const homeBtn = document.getElementById('homeBtn');

    // Remove active class from other button
    removeActive(homeBtn.id);

    // Add active class to Home button
    homeBtn.classList.add('active');

    // Get main content DOM element
    const mainContent = document.getElementById('content');

    mainContent.innerHTML = `
        <div id="banner">
            <img src="${Hero}" alt="Picture of a delicious pizza." id="hero" class="hero-img">
 
            <div id="ctaCard" class="cta-card">
                <h2>$5 OFF</h2>
                <p>Any Large Pizza</p>
            </div>

            <h2>Your Pizza, The Way You Want It</h2>
            <p>All of our pizza comes to you fresh straight from the oven with super fast delivery to ensure freshness. If it isn't to you in 10 minutes, it's on us!</p>
        </div>
    `;
}

export default homePage;