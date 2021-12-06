export default class Home {
  constructor(h) {
    this.view = h;
  }

  executeHttpRequest() {
    // sessionStorage.removeItem("profileName");
    console.log(sessionStorage);
    // document.querySelector(".ml-auto .nav-link").innerHTML =
    //   sessionStorage.profileName ? sessionStorage.profileName : "Connexion";
  }
}
