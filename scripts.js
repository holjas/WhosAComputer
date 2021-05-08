const myApp = {};

myApp.startTyping = () => {
  const typed = new Typed(".element", {
    strings: [
      "Hello World ^500",
      "Have you tried turning it off and on again?",
    ],
    startDelay: 2000,
    typeSpeed: 40,
    smartBackspace: true,
  });
};

myApp.init = () => {
  myApp.startTyping();
};

myApp.init();
