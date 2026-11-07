
const foods = [
    {
        id: 1,
        name: "Gnocchi with mushroom gravy",
        weight: "230g",
        price: 5.60,
        calories: 380,
        image: "https://th.bing.com/th/id/OIP.eNw2P9NRt4C4EzPfC-ikBwHaHa?w=212&h=212&c=7&r=0&o=7&pid=1.7&rm=3",
        ingredients: "Gnocchi, mushrooms, cream, butter and herbs.fdgnhncghmvhjmvhjvhjhjfhjm"
    },
    {
        id: 2,
        name: "Wenzel with raspberries and currants",
        weight: "170g",
        price: 3.80,
        calories: 290,
        image: "https://th.bing.com/th/id/OIP.eBR5pzGsy9big_uBJZy9zwHaHa?w=185&h=182&c=7&r=0&o=7&pid=1.7&rm=3",
        ingredients: "Raspberries, currants, pastry, cream and sugar."
    },
    {
        id: 3,
        name: "Freshly squeezed orange juice",
        weight: "350ml",
        price: 2.30,
        calories: 160,
        image: "https://th.bing.com/th/id/OIP.TdVCM1dRzN6lfAvHRMd80wHaHa?w=177&h=190&c=7&r=0&o=7&pid=1.7&rm=3",
        ingredients: "Freshly squeezed oranges."
    },
    {
        id: 4,
        name: "Paneer Butter Masala",
        weight: "250g",
        price: 4.50,
        calories: 350,
        image: "https://th.bing.com/th/id/OIP.LRorO9eoX__28SlTrMuizAHaHZ?w=180&h=183&c=7&r=0&o=7&pid=1.7&rm=3",
        ingredients: "Paneer, tomatoes, butter, fresh cream, onions, spices and herbs."
    },
    {
        id: 5,
        name: "Chicken Biryani",
        weight: "300g",
        price: 5.60,
        calories: 450,
        image: "https://th.bing.com/th/id/OIP.q25gNCqxY54AtYP5ndUf_AHaHa?w=191&h=187&c=7&r=0&o=7&pid=1.7&rm=3",
        ingredients: "Basmati rice, chicken, onions, yogurt, ginger, garlic and aromatic spices."
    },
    {
        id: 6,
        name: "Veg Hakka Noodles",
        weight: "250g",
        price: 3.50,
        calories: 320,
        image: "https://th.bing.com/th/id/OIP.b4w7B5fdlN55zuhvCMlp3wHaGB?w=189&h=181&c=7&r=0&o=7&pid=1.7&rm=3",
        ingredients: "Noodles, cabbage, carrots, capsicum, spring onions, soy sauce and spices."
    },
    {
        id: 7,
        name: "Gulab Jamun",
        weight: "150g",
        price: 2.00,
        calories: 280,
        image: "https://th.bing.com/th/id/OIP.tEPk8MLjMrx3PXKdencl9QHaHa?w=168&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
        ingredients: "Milk solids, flour, sugar syrup, cardamom and rose water."
    }
];

const recFoods = [
    {
        id: 1,
        name: "Blue Lagoon",
        weight: "300ml",
        price: 3.50,
        calories: 180,
        image: "https://th.bing.com/th?q=Blue+Lagoon+Drink+Recipe&w=120&h=120&c=1&rs=1&qlt=70&r=0&o=7&cb=1&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
        ingredients: "Blue curacao syrup, lemonade, lemon juice and ice."
    },
    {
        id: 2,
        name: "Mango Blast",
        weight: "300ml",
        price: 3.20,
        calories: 220,
        image: "https://th.bing.com/th/id/OIP.Mbo406zpgweIPdyoS8A0cwHaFK?w=227&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
        ingredients: "Fresh mango pulp, milk, honey and ice cream."
    },
    {
        id: 3,
        name: "Berry Mojito",
        weight: "300ml",
        price: 3.80,
        calories: 160,
        image: "https://th.bing.com/th/id/OIP.r2yKtF_Hv-rYOQ44NnrPCAHaJM?w=184&h=228&c=7&r=0&o=7&pid=1.7&rm=3",
        ingredients: "Mixed berries, mint leaves, lime juice, soda and sugar syrup."
    },
    {
        id: 4,
        name: "Cold Coffee",
        weight: "300ml",
        price: 3.00,
        calories: 240,
        image: "https://th.bing.com/th/id/OIP.EagshU02vZQt8j9XMq1FZAHaHa?w=184&h=184&c=7&r=0&o=7&pid=1.7&rm=3",
        ingredients: "Fresh milk, espresso, sugar, chocolate syrup and ice cream."
    },
    {
        id: 5,
        name: "Oreo Shake",
        weight: "300ml",
        price: 3.60,
        calories: 320,
        image: "https://th.bing.com/th/id/OIP.2UFDx6lMZT88DBpuNwYkMAHaHa?w=184&h=184&c=7&r=0&o=7&pid=1.7&rm=3",
        ingredients: "Oreo cookies, chilled milk, vanilla ice cream and chocolate syrup."
    }
];

function DisplayFoods() {
    let foodList = document.getElementById("food-list");
    foods.forEach(function (item) {
        let foodItem = document.createElement("Div");
        foodItem.className = "food-item";
        foodItem.setAttribute("data-id", item.id);

        let foodImage = document.createElement("img");
        foodImage.src = item.image;
        foodImage.alt = item.name;

        let foodDetails = document.createElement("Div");
        foodDetails.className = "food-details";

        let foodName = document.createElement("h3");
        foodName.innerHTML = item.name;
        let foodWeight = document.createElement("span");
        foodWeight.innerHTML = item.weight;
        foodName.appendChild(foodWeight);

        let foodBottom = document.createElement("Div");
        foodBottom.className = "food-bottom";

        let foodPrice = document.createElement("p");
        foodPrice.className = "food-price";
        foodPrice.innerHTML = "$" + item.price;

        let quantity = document.createElement("Div");
        quantity.className = "quantity";

        let minusButton = document.createElement("Button");
        minusButton.className = "minus";
        minusButton.id = "minus";
        minusButton.innerHTML = "-";

        let plusButton = document.createElement("Button");
        plusButton.className = "plus";
        plusButton.innerHTML = "+";
        plusButton.id = "plus";

        let quantityNumber = document.createElement("span");
        quantityNumber.className = "quantity-number";
        quantityNumber.id = "foodItem" + item.id;
        quantityNumber.innerHTML = "0"

        foodList.appendChild(foodItem);

        foodItem.appendChild(foodImage);
        foodItem.appendChild(foodDetails);

        foodDetails.appendChild(foodName);
        foodDetails.appendChild(foodBottom);

        foodBottom.appendChild(foodPrice);
        foodBottom.appendChild(quantity);

        quantity.appendChild(minusButton);
        quantity.appendChild(quantityNumber);
        quantity.appendChild(plusButton);

        foodImage.onclick = function () {
            ShowFoodDetails(item.id);
        }
        foodName.onclick = function () {
            ShowFoodDetails(item.id);
        }
        plusButton.onclick = function () {
            let itemQuantity = document.getElementById("foodItem" + item.id);
            itemQuantity.innerHTML = Number(itemQuantity.innerHTML) + 1;
            let totalItems = document.getElementById("item-count");
            totalItems.innerHTML = Number(totalItems.innerHTML) + 1;
            document.getElementById("expressDelivery").disabled = false;
            let totalPrice = document.getElementById("total-price");
            totalPrice.innerHTML = (Number(totalPrice.innerHTML) + item.price).toFixed(2);
        }
        minusButton.onclick = function () {
            let itemQuantity = document.getElementById("foodItem" + item.id);
            let totalItems = document.getElementById("item-count");
            let totalPrice = document.getElementById("total-price");
            if (itemQuantity.innerHTML > 0) {
                totalPrice.innerHTML = (Number(totalPrice.innerHTML) - item.price).toFixed(2);
                itemQuantity.innerHTML = Number(itemQuantity.innerHTML) - 1;
                if (Number(totalItems.innerHTML) > 0) {
                    totalItems.innerHTML = Number(totalItems.innerHTML) - 1;
                }
            }
            if (Number(totalItems.innerHTML) === 0) {
                let standardDelivery = document.getElementById("standardDelivery");
                standardDelivery.checked = true;
                document.getElementById("expressDelivery").disabled = true;
                standardDelivery.disabled = false;
                totalPrice.innerHTML = "0.00";
            }
        }
    }
    )
}
function ExpressDelivery() {
    let totalPrice = document.getElementById("total-price");
    totalPrice.innerHTML = (Number(totalPrice.innerHTML) + 2).toFixed(2);
}
function StanderdDelivery() {
    let totalPrice = document.getElementById("total-price");
    if (totalPrice.innerHTML > 0) {
        totalPrice.innerHTML = (Number(totalPrice.innerHTML) - 2).toFixed(2);
    }
}

function ClearCart() {
    let totalPrice = document.getElementById("total-price");
    totalPrice.innerHTML = "0.00";
    let totalItems = document.getElementById("item-count");
    totalItems.innerHTML = "0";
    foods.forEach(
        function (item) {
            let itemQuantity = document.getElementById("foodItem" + item.id);
            itemQuantity.innerHTML = "0";
        }
    )
    let standardDelivery = document.getElementById("standardDelivery");
    standardDelivery.checked = true;
    document.getElementById("expressDelivery").disabled = true;
}

function ShowFoodDetails(id) {
    let selectedFood = foods.find(function (item) {
        return item.id === id;
    });
    let foodimage1 = document.getElementById("food-image");
    foodimage1.src = selectedFood.image;

    let foodName1 = document.getElementById("food-name");
    foodName1.firstChild.textContent = selectedFood.name + ", ";

    let foodWeight1 = document.getElementById("food-weight");
    foodWeight1.innerHTML = selectedFood.weight;

    let foodDetails1 = document.getElementById("food-description")
    foodDetails1.innerHTML = selectedFood.ingredients;

    let foodPrice1 = document.getElementById("add-price");
    foodPrice1.innerHTML = "$" + selectedFood.price;
}

function DisplayRecomendedFoods() {
    let orderItems = document.getElementById("order-items");
    recFoods.forEach(function (item) {
        let recFood = document.createElement("Div");
        recFood.className = "rec-food";
        recFood.id = "rec-food";

        let recFoodImage = document.createElement("img");
        recFoodImage.src = item.image;
        recFoodImage.alt = item.name;

        let recFoodName = document.createElement("p");
        recFoodName.innerHTML = item.name;
        recFoodName.className = "rec-food-name"

        let recFoodPrice = document.createElement("p");
        recFoodPrice.innerHTML = "$" + item.price;
        recFoodPrice.className = "rec-food-price";

        orderItems.appendChild(recFood);

        recFood.appendChild(recFoodImage);
        recFood.appendChild(recFoodName);
        recFood.appendChild(recFoodPrice);
    }

    )
}
function displayFood(foodId) {

    let food = foods.find(item => item.id === foodId);

    if (!food) return;

    document.getElementById("food-image").src = food.image;
    document.getElementById("food-name").innerText = food.name;
    document.getElementById("food-weight").innerText = food.weight;
    document.getElementById("food-description").innerText = food.ingredients;
    document.getElementById("add-price").innerText = food.price;
}
window.onload = function () {
    DisplayFoods(); DisplayRecomendedFoods(); ShowFoodDetails(1);
}
document.getElementById("expressDelivery").disabled = true;
