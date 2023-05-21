function menu() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    const foods = document.createElement('div');
    foods.classList.add('foods')


    const obj = [
        {
            name: 'Dosa (India)',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies nisl vitae hendrerit dapibus. Vestibulum sed enim enim.'
        },
        {
            name: 'Sushi (Japan)',
            description: 'Fusce consectetur sem in tempus lacinia. Ut consequat elit lorem, quis porttitor nunc commodo nec.'
        },
        {
            name: 'Lasagna (Italy)',
            description: 'Nulla ante velit, aliquet eu lacus vel, iaculis dapibus risus. Duis pulvinar rutrum elit nec tristique.' 
        },
        {
            name: 'Königsberger klopse (Germany)',
            description: 'Cras a magna in nisl ultricies luctus et vel felis. Integer mattis felis consequat magna interdum, sit amet commodo tellus sollicitudin.'
        },
    ]


    for(let i = 0; i < obj.length; i++){
        const food = document.createElement('div');
        food.classList.add('food-section');
        const nameFood = document.createElement('p');
        nameFood.textContent = obj[i].name;
        nameFood.classList.add('names');
        food.appendChild(nameFood);
        const descriptionFood = document.createElement('p');
        descriptionFood.classList.add('des'); 
        descriptionFood.textContent = obj[i].description;
        food.appendChild(descriptionFood)
        foods.appendChild(food)
    }
    

    menuDiv.appendChild(foods);

    return menuDiv
}

export { menu }