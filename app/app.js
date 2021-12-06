let app = {
  mvc: {
    router: null,
    routes: (controller) => {
      /*global fetch*/
      fetch(`./views/${controller.view}`)
        .then((response) => response.text())
        .then((htmlContent) => {
          document.querySelector("main.container").innerHTML = htmlContent;
          if (typeof controller.executeHttpRequest === "function") {
            controller.executeHttpRequest();
          }
        });
    },
  },
};

export default app;
