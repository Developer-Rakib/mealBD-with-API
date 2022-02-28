
// select element 
let inputFeild = document.querySelector("#input-feild");
let seacrhBtn = document.querySelector("#search-btn");
let meals = document.querySelector("#meals");
let meal = document.querySelector("#meal");
let load = document.querySelector("#loading");



fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
    .then(res => res.json())
    .then(data => console.log(data.meals[0]))

seacrhBtn.addEventListener("click", () => {

    if (isNaN(inputFeild.value) == false || inputFeild.value == "") {
        alert("please enter valid input")
    } else {

        meals.textContent = "";
        load.style.display = "block";
        console.log(inputFeild.value);
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFeild.value}`
        fetch(url)
            .then(res => res.json())
            .then(data => {


                setTimeout(() => {
                    displayData(data.meals);

                }, 500);
                setTimeout(() => {

                    load.style.display = "none";

                }, 500);



            })


        inputFeild.value = "";
    }

})

function displayData(datas) {
    if (datas == null) {
        alert("Data Not Avaiable")

    } else {

        datas.forEach(data => {
            // console.log(data);
            let div = document.createElement("div");
            div.innerHTML = `

                            <img src="${data.strMealThumb}" alt="">
                            <h5>Dish Name : ${data.strMeal}</h5>
                            
                
                `;
            meals.appendChild(div);

            div.addEventListener("click", () => {
                meal.textContent = "";
                let Div1 = document.createElement("div");

                console.log(data.strDrink);

                Div1.innerHTML = `
                                
                                <img src="${data.strMealThumb}" alt="">
                                <h3>Dish Name : ${data.strMeal}</h3>
                                <p>Aria : ${data.strArea}</p>
                                <p>Catagory  : ${data.strCategory}</p>
                                <p>Uses Oil : ${data.strIngredient2}</p>
                                <p>Recipe : ${data.strIngredient1}, ${data.strIngredient3}, ${data.strIngredient4}, ${data.strIngredient5}, ${data.strIngredient6}, ${data.strIngredient7}, ${data.strIngredient8}, ${data.strIngredient9}, ${data.strIngredient10}, ${data.strIngredient11}, ${data.strIngredient12}, </p>
                                <p>Instructions : ${data.strInstructions.slice(0, 150)}</p>

                    `;
                meal.appendChild(Div1);


            })
        });
    }

}
