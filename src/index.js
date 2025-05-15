import './assets/styles.css';
import loadPage from './modules/loadPage';
import homePage from './modules/homePage';
import aboutPage from './modules/aboutPage';

loadPage(homePage);


const aboutBtn = document.getElementById('aboutBtn');
const homeBtn = document.getElementById('homeBtn');

// Event Listeners
aboutBtn.addEventListener('click', aboutPage)

homeBtn.addEventListener('click', homePage);