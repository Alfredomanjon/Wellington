function getIsLogged() {
  return window.localStorage.getItem('user') !== null;
}
export function getCurrentRestaurantIId() {
  return JSON.parse(window.localStorage.getItem('user'))?.username;
}
export default getIsLogged;
