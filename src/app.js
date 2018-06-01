/* Main entrypoint for the application */
import { fetchItem, addToItemList } from './items'

console.log("In case you feel lost where to start, check src/app.js");

document.querySelector("#fetch-button").addEventListener("click", (e) => {
  fetchItem((item) => addToItemList(item));
});

document.querySelector("#fetch-many-button").addEventListener("click", (e) => {
  for(let i = 0; i < 10; i++) {
    fetchItem((item) => addToItemList(item));
  }
});
