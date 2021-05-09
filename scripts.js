const myApp = {};

myApp.startTyping = () => {
  const typedOne = new Typed(".textOne", {
    strings: [
      "console.log('hello world') ^1000",
      "functino ^200",
      "function ^500 myFunction^200() ^100{",
    ],
    startDelay: 50,
    backSpeed: 20,
    typeSpeed: 90,
    showCursor: false,
  });
  const typedTwo = new Typed(".textTwo", {
    strings: ["if(feeling === 'ggood ^300", "if(feeling === 'good'^200) ^200{"],
    startDelay: 12900,
    typeSpeed: 90,
    showCursor: false,
  });
  const typedThree = new Typed(".textThree", {
    strings: ["return ^100kill^300ingIt^300() ^300"],
    startDelay: 19500,
    typeSpeed: 90,
    showCursor: false,
  });
  const typedFour = new Typed(".textFour", {
    strings: ["} ^400 else ^100 {"],
    startDelay: 22000,
    typeSpeed: 100,
    showCursor: false,
  });
  const typedFive = new Typed(".textFive", {
    strings: ["timeForTea() }"],
    startDelay: 24000,
    typeSpeed: 90,
    showCursor: false,
  });
};

myApp.init = () => {
  myApp.startTyping();
};

myApp.init();
