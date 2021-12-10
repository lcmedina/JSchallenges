const resMenu = [
    {
        name: "Eggplant Parm",
        vegetarian: true
    },
    {
        name: "Spaghetti & Meatballs",
        vegetarian: false
    },
    {
        name: "Cheese Raviloi",
        vegetarian: true
    },
    {
        name: "Lasagna",
        vegetarian: false
    },
    {
        name: "Chicken Marsala",
        vegetarian: false
    },
    {
        name: "Grilled Bruschetta",
        vegetarian: true
    }
]

const vegMenu = resMenu.filter(food => food.vegetarian);
const list = document.getElementById("menu");
    for (let m = 0; m < vegMenu.length; m++){
        const item = document.createElement("ul")
        const food = document.createElement("li").innerHTML = `${vegMenu[m].name}`;
        item.append(food)
        list.append(item);
    }


// video solution
function vegetarianMenu(menu) {
    const menuNode = document.querySelector("#menu2");
    const vegetarianOptions = menu.filter(
        (option) => option.vegetarian === true
    );
    vegetarianOptions.forEach((option) => {
        let dish = document.createElement("li");
        dish.textContent = option.name;
        menuNode.appendChild(dish);
    })
}

vegetarianMenu(resMenu)