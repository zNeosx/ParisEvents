// import app from "../app/app.js";
import ParisEventsAPI from "../models/ParisEventsAPI.js";

export default class Search {
  constructor(s) {
    this.view = s;
  }

  executeHttpRequest() {
    const submit__btn = document.querySelector(".submit__btn");

    submit__btn.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(".event__list").innerHTML = "";

      const searchTitle = document.getElementById("title").value;
      const searchSort = document.getElementById("sort").value;

      const api = new ParisEventsAPI();

      api.search(searchTitle, searchSort).then((data) => {
        console.log(data);
        const template = document.getElementById("event__template").content;
        const eventList = document.querySelector(".event__list");
        data.forEach((record) => {
          let clone = document.importNode(template, true);

          let title = clone.querySelector(".event__title");
          let cover = clone.querySelector(".event__img");

          title.innerHTML = record.title;
          cover.src = record.cover;
          cover.alt = record.cover_alt;
          eventList.appendChild(title).appendChild(cover);
        });
      });
    });
  }
}
