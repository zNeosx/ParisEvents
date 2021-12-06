// import app from "./app.js";

export default class Login {
  constructor(l) {
    this.view = l;
  }

  executeHttpRequest() {
    let profileName = "";
    let logoutBtn = document.querySelector(".logout__btn");
    document.getElementById("google__btn").addEventListener("click", () => {
      console.log("button pressed");
      // /*global firebase*/
      let provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          console.log(res);
          sessionStorage.removeItem("profileName");
          profileName = res.additionalUserInfo.profile.name;
          sessionStorage.setItem("profileName", profileName);
          console.log(sessionStorage);
          console.log(res);
        })
        .then(() => {
          document.querySelector(".ml-auto .nav-link").innerHTML =
            sessionStorage.profileName
              ? sessionStorage.profileName
              : "Connexion";
          logoutBtn.className = sessionStorage.profileName
            ? "logout__btn show"
            : "logout__btn hide";
        })
        .catch(function (error) {
          console.log(error);
        });
    });

    document.getElementById("github__btn").addEventListener("click", () => {
      console.log("button pressed");
      // /*global firebase*/
      let provider = new firebase.auth.GithubAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          console.log(res);
          document.querySelector(".ml-auto").innerHTML =
            res.additionalUserInfo.profile.name ||
            res.additionalUserInfo.profile.login;
        })
        .catch(function (error) {
          console.log(error);
        });
    });

    logoutBtn.addEventListener("click", () => {
      console.log("logout pressed");
      sessionStorage.removeItem("profileName");
      logoutBtn.className = "logout__btn hide";
      document.querySelector(".ml-auto .nav-link").innerHTML =
        sessionStorage.profileName ? sessionStorage.profileName : "Connexion";
    });
  }
}
