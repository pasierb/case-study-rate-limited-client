import throttle from './throttle';

// Use random endpoint to reset ratelimit after reload.
const ENDPOINT = Math.floor(Math.random() * 10000);
const MAX_REQUESTS = 5;
const TIME_WINDOW = 11 * 1000;

const enque = throttle({ maxRequests: MAX_REQUESTS, timeWindow: TIME_WINDOW });

export const fetchItem = (itemReceivedFn) =>
  enque(() => {
    fetch(`https://rate-limit-server.herokuapp.com/endpoint/${ENDPOINT}`)
      .then((response) => response.text())
      .then((item) => itemReceivedFn(item))
  });

export const addToItemList = (item) => {
  const itemList = document.querySelector("#items");
  const element = document.createElement("li");
  element.appendChild(document.createTextNode(item));
  itemList.appendChild(element);
}
