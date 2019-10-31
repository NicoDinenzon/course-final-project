import "./styles/main.styl";

const controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter", duration: "200%" } });



const scene2 = new ScrollMagic.Scene({ triggerElement: "#ParisParallax" });
scene2.setTween("#ParisParallax > .SecondBackground", { y: "80%" });

scene2.addTo(controller);

const scene3 = new ScrollMagic.Scene({ triggerElement: "#LondonParallax" });
scene3.setTween("#LondonParallax > .ThirdBackground", { y: "80%" });

scene3.addTo(controller);



const controller2 = new ScrollMagic.Controller();


        const tl = new TimelineMax();
        
        tl.from("#parallax2 p", 1, { x: "100vw" });

        const textScene = new ScrollMagic.Scene({ triggerElement: "#parallax2", offset: "-500%", duration: "100%" });
        textScene.setTween( tl );
        textScene.addIndicators();
        textScene.addTo(controller2);


const controller1 = new ScrollMagic.Controller();


const tl1 = new TimelineMax();

tl1.from("#parallax1 p", 1, { x: "-100vw" });

const textScene1 = new ScrollMagic.Scene({ triggerElement: "#parallax1", offset: "-500%", duration: "100%" });
textScene1.setTween( tl1 );
textScene1.addIndicators();
textScene1.addTo(controller1);




