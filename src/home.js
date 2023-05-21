function home() {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');

    const welcomeText = document.createElement('p');
    welcomeText.textContent = 'Welcome to our restaurant';
    welcomeText.classList.add('welcome');
    homeDiv.appendChild(welcomeText);

    //content.appendChild(home());
    return homeDiv;
}

export {home}