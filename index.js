let op = '';
var mainhomepage = document.querySelector(".mainhomepage");
var ingrediants = document.getElementById("ingrediants");
var body = document.querySelector(".body");
var ingrediants_button = document.querySelector(".ingrediants_button");

var dish = document.getElementById("dish");
var dishImage = document.getElementById("dishImage");

for (let i = 0; i < 8; i++) {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then(data => {
            getEightRandom(data);
        })
        .catch(error => {
            console.log('ERROR', error);
        });
}



function getEightRandom(data) {
    let main = document.querySelector('.random_meals');
    op += `<div class="cell">
        <div class="cell_image"><img src="${data.meals[0].strMealThumb}" width="100%" height="100%" alt=""></div>
        <h2 class="cell_image_name">${data.meals[0].strMeal}</h2>
    </div>`;

    main.innerHTML = op;

    var cells = document.querySelectorAll(".cell");
    cells.forEach(element => {
        element.addEventListener('click', () => {

            let clickedMealName = element.querySelector('.cell_image_name').textContent;
            let clickedMealImage = element.querySelector('.cell_image img').src;

            dish.innerText = clickedMealName;
            dishImage.src = clickedMealImage;

            console.log(clickedMealName)
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${clickedMealName}`)
                .then(response => response.json())
                .then(data => {
                    displayIngredients(data);
                })
                .catch(error => {
                    console.log('ERROR', error);
                });

            ingrediants.style.visibility = "visible";
            mainhomepage.style.filter = 'blur(8px)';
            // body.style.overflow = 'hidden';
        });
    });

    ingrediants_button.addEventListener("click", () => {
        ingrediants.style.visibility = "hidden";
        mainhomepage.style.filter = 'blur(0px)';
        body.style.overflow = 'auto';
    });
}

var inglist = document.getElementById("inglist")

function displayIngredients(data) {
    const array = data.meals[0];
    console.log(array)
    let temp = '';
    Object.keys(array).forEach(key => {
        if (key.startsWith("strIngredient")) {
            console.log(array[key]);
            temp += `<li class="li">${array[key]}</li>`
        }
    });
    inglist.innerHTML = temp;
}

