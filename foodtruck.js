const menu = document.getElementById("combined-menu");

function festival(menuArr) {
    let allMenus = menuArr.flat()
    let combinedMenu = new Set();
    allMenus.forEach(item => {
        combinedMenu.add(item);
    })

    for (const item of combinedMenu) {
        let food = document.createElement("li");
        food.innerText = item;
        menu.appendChild(food);
    }
    
}

festival([['Pizza', 'Calzones'], ['Pasta', 'Breadsticks'], ['Pizza', 'Chicken', 'Salad'], ['Calzones', 'Pasta', 'Alcohol']])