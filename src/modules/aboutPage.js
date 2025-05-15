import { removeActive } from "./helper";
import Owner from '../assets/images/pizza-owner.jpg';


function aboutPage() {

    const aboutBtn = document.getElementById('aboutBtn');

    // Remove active class from other button
    removeActive(aboutBtn.id);

    // Add class active to about button
    aboutBtn.classList.add('active');

    // Get the main content DOM element
    const mainContent = document.getElementById('content');
    mainContent.innerHTML = `
        <h1 class="about-headline">Why We Do What We Do</h1>
        <section class="about-section">
            <div class="about-content">
                <h2>42 Years In The Biz and Still Rolling</h2>
                <p class="subtitle">The dough that is</p>
                <p class="about-description">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                </p>
                <p class="about-description">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                </p>
                <p class="about-description">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                </p>
            </div>
            <div class="about-img-container">
                <img src="${Owner}" />
            </div>
        </section>
    `;

}

export default aboutPage;