let menu = [
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

const list = document.getElementById("menu");
    for (let m = 0; m < menu.length; m++){
        const item = document.createElement("ul")
        const food = document.createElement("li").innerHTML = `${menu[m].name}`;
        item.append(food)
        list.append(item);
    }
