
const foods = [
    {
        id: 1,
        name: "Gnocchi with mushroom gravy",
        weight: "230g",
        price: 5.60,
        calories: 380,
        image: "gonochi.png",
        ingredients: "Gnocchi, mushrooms, cream, butter and herbs."
    },
    {
        id: 2,
        name: "Wenzel with raspberries and currants",
        weight: "170g",
        price: 3.80,
        calories: 290,
        image: "pizza.png",
        ingredients: "Raspberries, currants, pastry, cream and sugar."
    },
    {
        id: 3,
        name: "Freshly squeezed orange juice",
        weight: "350ml",
        price: 2.30,
        calories: 160,
        image: "juice.png",
        ingredients: "Freshly squeezed oranges."
    },
    {
        id: 4,
        name: "Gnocchi with mushroom gravy",
        weight: "230g",
        price: 5.60,
        calories: 380,
        image: "gonochi.png",
        ingredients: "Gnocchi, mushrooms, cream, butter and herbs."
    },
    {
        id: 5,
        name: "Wenzel with raspberries and currants",
        weight: "170g",
        price: 3.80,
        calories: 290,
        image: "pizza.png",
        ingredients: "Raspberries, currants, pastry, cream and sugar."
    },
    {
        id: 6,
        name: "Freshly squeezed orange juice",
        weight: "350ml",
        price: 2.30,
        calories: 160,
        image: "juice.png",
        ingredients: "Freshly squeezed oranges."
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
DisplayFoods();
document.getElementById("expressDelivery").disabled = true;