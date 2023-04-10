function getIsLogged() {
  return window.localStorage.getItem('user') !== null;
}
export default getIsLogged;
