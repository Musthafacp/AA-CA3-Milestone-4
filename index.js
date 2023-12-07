let API = "https://www.themealdb.com/api/json/v1/1/random.php";

let op = '';

// let cell_image_name = document.querySelector(".cell_image_name")

for(let i =0 ;i < 8 ; i++){
    
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")

    .then(response => response.json())

    .then(data => {
        getEightRandom(data)
    })
    .catch(error => {
    console.log('ERROR', error);
    });

}

var mainhomepage = document.querySelector(".mainhomepage")
var ingrediants = document.getElementById("ingrediants")
var body = document.querySelector(".body")
var ingrediants_button = document.querySelector(".ingrediants_button")

var dish = document.getElementById("dish")

function getEightRandom(data){
        let main = document.querySelector('.random_meals');
        op += `<div class="cell">
        <div class="cell_image"><img src="${data.meals[0].strMealThumb}" width="230px" alt=""></div>
        <h2 class="cell_image_name">${data.meals[0].strMeal}</h2>
        </div>` 
        main.innerHTML = op;
        var cells = document.querySelectorAll(".cell")
        cells.forEach(element => {
            element.addEventListener('click',()=>{

                    console.log(data)
                    ingrediants.style.visibility = "visible"
                    mainhomepage.style.filter = 'blur(8px)';
                    body.style.overflow = 'hidden'
            })
        });

        ingrediants_button.addEventListener("click",()=>{
            ingrediants.style.visibility = "hidden"
            mainhomepage.style.filter = 'blur(0px)';
            body.style.overflow = 'auto'
        })
    }
