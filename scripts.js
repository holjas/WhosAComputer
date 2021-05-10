const myApp = {};

myApp.startTyping = () => {
  const typedOne = new Typed(".textOne", {
    strings: [
      "console.log('hello world') ^1000",
      "functino ^200",
      "function ^500 whosHungry^200() ^100{",
    ],
    startDelay: 50,
    backSpeed: 20,
    typeSpeed: 90,
    showCursor: false,
  });
  const typedTwo = new Typed(".textTwo", {
    strings: ["if(tummy === 'emmppy ^300", "if(tummy === 'empty'^200) ^200{"],
    startDelay: 12700,
    typeSpeed: 90,
    showCursor: false,
  });
  const typedThree = new Typed(".textThree", {
    strings: ["return ^100eat^300Pizza^300() ^300"],
    startDelay: 19300,
    typeSpeed: 90,
    showCursor: false,
  });
  const typedFour = new Typed(".textFour", {
    strings: ["} ^400 else ^100 {"],
    startDelay: 22400,
    typeSpeed: 100,
    showCursor: false,
  });
  const typedFive = new Typed(".textFive", {
    strings: ["drinkWater() ^300 }"],
    startDelay: 25100,
    typeSpeed: 90,
    showCursor: false,
  });

  const typedSix = new Typed(".textSix", {
    strings: ["whosHungry();"],
    startDelay: 28000,
    typeSpeed: 90,
    showCursor: true,
  });
};

myApp.init = () => {
  myApp.startTyping();
};

myApp.init();
