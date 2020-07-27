import "./components/navbar-app.js";
import { renderListFood } from "./components/item-app";
import axios from "axios";

function main() {
  const baseURL = "https://www.themealdb.com/api/json/v1/1";

  const getFood = async () => {
    const url = `${baseURL}/random.php`;
    try {
      const res = await axios.get(url);
      const resJSON = await res.data;
      renderListFood(resJSON.meals);
    } catch (err) {
      alertMessage(err.message);
    }
  };

  const getSearchFood = async (name) => {
    const url = `${baseURL}/search.php?s=${name}`;
    try {
      const res = await axios.get(url);
      const resJSON = await res.data;
      renderListFood(resJSON.meals);
    } catch (err) {
      alertMessage(err.message);
    }
  };

  const alertMessage = (message = "Check your connection internet") => {
    alert(message);
  };

  document.addEventListener("DOMContentLoaded", () => {
    const inputFoodName = document.querySelector("#myInputFoodName");
    const buttonSearchFood = document.querySelector("#myButtonSearchFood");
    const buttonRandomFood = document.querySelector("#myButtonRandomFood");

    buttonSearchFood.addEventListener("click", function () {
      getSearchFood(inputFoodName.value);
    });

    buttonRandomFood.addEventListener("click", function () {
      getFood();
    });

    getFood();
  });
}

export default main;
