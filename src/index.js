import './style.css';
import { homePage } from './homePage';
import { menuPage } from './menu';
import { aboutPage } from './aboutPage';
import '@fortawesome/fontawesome-free/css/all.css';





homePage();
menuPage();
aboutPage();

const btns = document.querySelectorAll('.btn');
const pages = [...document.querySelectorAll('.content .page')];

btns.forEach((btn,index) => {

 btn.addEventListener('click',(e)=>{

 btns.forEach(btn =>btn.classList.remove('active'))
        btn.classList.add('active');

        pages.map((tab)=>tab.classList.remove('active'))
        pages[index].classList.add('active');

    })
});