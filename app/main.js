import app from "./app.js";
import Home from "../controllers/Home.js";
import Search from "../controllers/Search.js";
import About from "../controllers/About.js";
import Login from "../controllers/Login.js";

function initRouter() {
  /*global Router*/
  app.mvc.router = new Router({
    mode: "hash", // la différence entre le mode " hash " et le mode " history " ?
    page404: function (path) {
      console.log('"/' + path + '" Page not found');
    },
  });

  app.mvc.router.add("", () => {
    app.mvc.routes(new Home("home.html"));
  });
  app.mvc.router.add("search", () => {
    app.mvc.routes(new Search("search.html"));
  });
  app.mvc.router.add("about", () => {
    app.mvc.routes(new About("about.html"));
  });
  app.mvc.router.add("login", () => {
    app.mvc.routes(new Login("login.html"));
  });

  // console.log(app.mvc.router);
  app.mvc.router.addUriListener();

  app.mvc.router.navigateTo("/").check();
}

document.addEventListener("DOMContentLoaded", function () {
  initRouter();

  const firebaseConfig = {
    apiKey: "AIzaSyDgW-QME2A0tPYaSKGWifuNFmHLcCBikFA",
    authDomain: "parisevents2.firebaseapp.com",
    projectId: "parisevents2",
    storageBucket: "parisevents2.appspot.com",
    messagingSenderId: "709381933160",
    appId: "1:709381933160:web:58d4bb4e3a72a4d99dd3dd",
    measurementId: "G-SKTPYP52SZ",
  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  // /*global getAuth*/
  // const auth = getAuth(app);

  // // /*global onAuthStateChanged*/
  // onAuthStateChanged(auth, (user) => {
  //   if(user !== null){
  //     console.log('logged in');
  //   }
  //   else{
  //     console.log('No user');
  //   }
  // })
});
