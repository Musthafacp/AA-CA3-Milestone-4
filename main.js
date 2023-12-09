let search = document.querySelector("#searchbox")
let firsthead = document.querySelector(".firstHeads")
let fhead = document.querySelector(".firstHead")
var flag = 0;
let main = document.querySelector('.Latest');
let Popular = document.querySelector(".Popular")
let popHead = document.getElementById("popHead")

let searchBox1 = document.getElementById("inputBox")
var inglist = document.getElementById("inglist")

var dishname = document.querySelector(".dishname")

firsthead.style.display = "none";


var hamburger = document.getElementById("hamburg");

    hamburger.addEventListener("click", function() {
        var menuLinks = document.getElementById('menu-links');
        menuLinks.style.display = (menuLinks.style.display === 'none' || menuLinks.style.display === '') ? 'block' : 'none';
    });


if (flag == 0) {

    for (let i = 0; i < 8; i++) {

        fetch("https://www.themealdb.com/api/json/v1/1/random.php")

            .then(response => response.json())

            .then(data => {
                previoussearch(data)
            })
            .catch(error => {
                console.log('ERROR', error);
            });

    }

    let opp = '';
    let mainhomepage = document.querySelector(".backgroundofING");
    let ingrediants = document.getElementById("ingrediants");
    let body = document.querySelector(".body");
    var ingrediants_button = document.querySelector(".ingrediants_button")


    var dish = document.querySelector(".dishname");
    var dishImage = document.getElementById("dishIMG");


    function previoussearch(data) {
        opp += `<div class="Items cell">
        <img src="${data.meals[0].strMealThumb}" id="cell_images" alt="">
        <h1 id="cell_images_name">${data.meals[0].strMeal}</h1>
        </div>`;
        main.innerHTML = opp;
        let cel = document.querySelectorAll(".Items");
        cel.forEach(element => {
            element.addEventListener('click', () => {

                let clickedMealName = element.querySelector('#cell_images_name').textContent;
                let clickedMealImage = element.querySelector('#cell_images').src;

                dish.innerText = clickedMealName;
                dishImage.src = clickedMealImage;

                fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${clickedMealName}`)
                .then(response => response.json())
                .then(data => {
                    displayIngredients(data);
                })
                .catch(error => {
                    console.log('ERROR', error);
                });

                ingrediants.style.visibility = "visible"
                ingrediants.style.position = 'relative';
                ingrediants.style.bottom = '80em';
                ingrediants.style.display = "grid";
                mainhomepage.style.filter = 'blur(8px)';
                ingrediants.style.marginLeft = "15%";
                ingrediants.style.width = "70%"
            })

            ingrediants_button.addEventListener("click", () => {
                ingrediants.style.visibility = "hidden"
                mainhomepage.style.filter = 'blur(0px)';
                body.style.overflow = 'auto'
            })
        });

        ingrediants_button.addEventListener("click", () => {
            ingrediants.style.visibility = "hidden"
            mainhomepage.style.filter = 'blur(0px)';
            body.style.overflow = 'auto'
        })
    }


    searchBox1.addEventListener('keyup' ,()=>{
        let searchBox = document.getElementById("inputBox")
        var searchedValue = searchBox.value;

        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchedValue}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                searchedItems(data)
                main.style.display = 'none';
                fhead.style.display = "none"
                Popular.style.display = "none"
                popHead.style.display = "none";
            })
            .catch(error => {
                console.log('ERROR', error);
            });
    })

    
    searchBox1.addEventListener('keyup' ,()=>{
        let searchBox = document.getElementById("inputBox")
        var searchedValue = searchBox.value;

        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchedValue}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                searchedItems(data)
                main.style.display = 'none';
                fhead.style.display = "none"
                Popular.style.display = "none"
                popHead.style.display = "none";
            })
            .catch(error => {
                console.log('ERROR', error);
            });
    })



    search.addEventListener("click", () => {
        let searchBox = document.getElementById("inputBox")
        var searchedValue = searchBox.value;

        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchedValue}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                searchedItems(data)
                main.style.display = 'none';
                fhead.style.display = "none"
                Popular.style.display = "none"
                popHead.style.display = "none";
            })
            .catch(error => {
                console.log('ERROR', error);
            });

    })


    function searchedItems(data) {
        let op = '';
        const searched = document.querySelector(".Searched");
        firsthead.style.display = "block";
        data.meals.forEach(e => {
            op +=
                `<div class="SearchedItems cell">
                <img src="${e.strMealThumb}" id="searched_item_images" alt="">
                <h1 id="searched_item_images_name">${e.strMeal}</h1>
            </div>`;

        });
        searched.innerHTML = op;

        let cel = document.querySelectorAll(".SearchedItems");
        cel.forEach(element => {
            element.addEventListener('click', () => {

                let clickedMealname = element.querySelector('#searched_item_images_name').textContent;
                let clickedMealimage = element.querySelector('#searched_item_images').src;

                dish.innerText = clickedMealname;
                dishImage.src = clickedMealimage;
                
                fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${clickedMealname}`)
                .then(response => response.json())
                .then(data => {
                    displayIngredients(data);
                })
                .catch(error => {
                    console.log('ERROR', error);
                });


                ingrediants.style.visibility = "visible"
                ingrediants.style.position = 'relative';
                ingrediants.style.display = "grid";
                mainhomepage.style.filter = 'blur(8px)';
                body.style.height = '100px';
            })

            ingrediants_button.addEventListener("click", () => {
                ingrediants.style.visibility = "hidden"
                mainhomepage.style.filter = 'blur(0px)';
                body.style.overflow = 'auto'
            })
        });

        ingrediants_button.addEventListener("click", () => {
            ingrediants.style.visibility = "hidden"
            mainhomepage.style.filter = 'blur(0px)';
            body.style.overflow = 'auto'
        })
    }

    function displayIngredients(data) {
        const array = data.meals[0];
        console.log(array)
        let temp = '';
        Object.keys(array).forEach(key => {
            if (key.startsWith("strIngredient")) {
                console.log(array[key]);
                temp +=   `<li class="li">${array[key]}</li>`
            }
        });
        inglist.innerHTML = temp;
    }
}


function displayIngredients(data) {
    const array = data.meals[0];
    console.log(array)
    let temp = '';
    Object.keys(array).forEach(key => {
        if (key.startsWith("strIngredient")) {
            console.log(array[key]);
            temp +=   `<li class="li">${array[key]}</li>`
        }
    });
    inglist.innerHTML = temp;
}
