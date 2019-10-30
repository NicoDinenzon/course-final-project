import "./styles/main.styl";

const controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter", duration: "200%" } });



const scene2 = new ScrollMagic.Scene({ triggerElement: "#ParisParallax" });
scene2.setTween("#ParisParallax > .SecondBackground", { y: "80%" });

scene2.addTo(controller);

const scene3 = new ScrollMagic.Scene({ triggerElement: "#LondonParallax" });
scene3.setTween("#LondonParallax > .ThirdBackground", { y: "80%" });

scene3.addTo(controller);



/*const controller = new ScrollMagic.Controller();

const tween1 = TweenMax.from("#parallax1 p", 1, { x: "-100%" });
const scene2 = new ScrollMagic.Scene({ triggerElement: "#parallax1", offset: 200, duration: 200 });
scene2.setTween(tween1);
scene2.addIndicators();
scene2.addTo(controller);


const tween2 = TweenMax.from("#parallax2 p", 1, { x: "-100%" });
const textScene = new ScrollMagic.Scene({ triggerElement: "#parallax2", offset: 200, duration: 200 });
textScene.setTween(tween2);
textScene.addTo(controller);*/