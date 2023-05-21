import './styles.css';
import { home } from './home.js';
import { menu } from './menu.js';
import { about } from './about.js';

console.log('hi, sucessfully setup all files');
console.log('HI!')

function component() {
    const content = document.getElementById('content');

    const options = document.createElement('div');
    options.classList.add('options');
    const btn1 = document.createElement('button');
    btn1.textContent = 'HOME';
    btn1.id = 'home-option';
    options.appendChild(btn1);
    const btn2 = document.createElement('button');
    btn2.textContent = 'MENU';
    btn2.id = 'menu-option';
    options.appendChild(btn2);
    const btn3 = document.createElement('button');
    btn3.textContent = 'ABOUT';
    btn3.id = 'about-option'
    options.appendChild(btn3);

    content.appendChild(options);
    content.appendChild(home());

    const menuOption = document.getElementById('menu-option');
    menuOption.addEventListener('click', () => {
        let childElements = content.childNodes;
        for(let i = childElements.length - 1; i >= 0; i--){
            let childElement = childElements[i]
            if(childElement.nodeType === 1 && !childElement.classList.contains('options')){
                content.removeChild(childElement);
            }
        }
        content.appendChild(menu())
    })

    const homeOption = document.getElementById('home-option');
    homeOption.addEventListener('click', () => {
        location.reload()
    })

    const aboutOption = document.getElementById('about-option');
    aboutOption.addEventListener('click', () => {
        let childElements = content.childNodes;
        for(let i = childElements.length - 1; i >= 0; i--){
            let childElement = childElements[i];
            if(childElement.nodeType === 1 && !childElement.classList.contains('options')){
                content.removeChild(childElement);
            }
        }
        content.appendChild(about());
    })

    return content
}

document.body.appendChild(component())