export const renderListFood = (foods) => {
  const listFoodElement = document.querySelector("#myListFood");
  listFoodElement.innerHTML = "";

  if (foods !== null) {
    foods.forEach((i) => {
      listFoodElement.innerHTML += `
        <div class="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img height="400" src="${i.strMealThumb}">
              <span class="card-title">${i.strMeal}</span>
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">${i.strArea}<i class="material-icons right">more_vert</i></span>
              <p><a href="${i.strYoutube}" target="_blank">Preview Video</a></p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">${i.strArea}<i class="material-icons right">close</i></span>
              <p>${i.strInstructions}</p>
            </div>
          </div>
        </div>
      `;
    });
  } else {
    listFoodElement.innerHTML = `<h1>Oops cannot find your food</h1>`;
  }
};
