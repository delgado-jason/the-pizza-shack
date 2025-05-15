import './assets/styles.css';
import loadPage from './modules/loadPage';
import homePage from './modules/homePage';
import aboutPage from './modules/aboutPage';
import menuPage from './modules/menuPage';

loadPage(homePage);

// Nav buttons
const aboutBtn = document.getElementById('aboutBtn');
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');

// Event Listeners
aboutBtn.addEventListener('click', aboutPage);
homeBtn.addEventListener('click', homePage);
menuBtn.addEventListener('click', menuPage);