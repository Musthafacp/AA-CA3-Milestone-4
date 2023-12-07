let search = document.querySelector("#searchbox")
let firsthead = document.querySelector(".firstHeads")
let fhead = document.querySelector(".firstHead")
var flag = 0;
let main = document.querySelector('.Latest');
let Popular = document.querySelector(".Popular")
let popHead = document.getElementById("popHead")


firsthead.style.display = "none";


if (flag == 0) {

    for (let i = 0; i < 8; i++) {

        fetch("https://www.themealdb.com/api/json/v1/1/random.php")

            .then(response => response.json())

            .then(data => {
                // console.log(data);
                previoussearch(data)
            })
            .catch(error => {
                console.log('ERROR', error);
            });

    }

    let opp = '';



    
let mainhomepage = document.querySelector(".backgroundofING")
let ingrediants = document.getElementById("#ingrediants")
let body = document.querySelector(".body")


/* 
.backgroundofING{
    filter: blur(8px);
  -webkit-filter: blur(8px); 
}

body{
    overflow: hidden;
}




#ingrediants{
    position: relative;
    bottom: 1500px;
} */


    function previoussearch(data) {
        opp += `<div class="Items cell">
        <img src="${data.meals[0].strMealThumb}" id="cell_images" alt="">
        <h1 id="cell_images_name">${data.meals[0].strMeal}</h1>
    </div>`
        main.innerHTML = opp;
    }
    flag = 1;

    // let cel = document.querySelectorAll(".Items")
    //     cel.forEach(element => {
    //         element.addEventListener('click',()=>{
    //             // ingrediants.style.position = 'relative'
    //             // ingrediants.style.bottom = '700px'
    //             // ingrediants.style.display = "grid"
    //             mainhomepage.style.filter = 'blur(8px)';
    //             body.style.overflow = 'hidden'
    //         })
    //     });
}





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
            alert("CATOGORIES NOT FOUND")
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


    let cells = document.querySelectorAll(".SearchedItems")
        cells.forEach(element => {
            element.addEventListener('click',()=>{
                // ingrediants.style.position = 'relative'
                // ingrediants.style.bottom = '700px'
                // ingrediants.style.display = "grid"
                mainhomepage.style.filter = 'blur(8px)';
                body.style.overflow = 'hidden'
            })
        });
}