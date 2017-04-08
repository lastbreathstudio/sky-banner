// JavaScript Document
window.onload = function(){
	console.log("Junior developer test.");
	
	// declare your variables here.
	var background;
    //array of tweens to kill at the end
	var tweensToKill = [];
	//images references
	var deezer_img = new createjs.Bitmap("images/deezer.png");
	var ms_image = new createjs.Bitmap("images/m&s.png");
	var sky_logo = new createjs.Bitmap("images/sky-logo.png");
	var arm_img = new createjs.Bitmap("images/arm.png");
	var cta_button = new createjs.Bitmap("images/cta.png");

	// store a reference to the canvas which we will draw on.
	var stage = new createjs.Stage("stage");
	
	// register the stage to handle mouse events. 
	stage.enableMouseOver(10);
	
	// register the Ticker to listen for the tick event.
	createjs.Ticker.addEventListener("tick", handleTick, false);
	
	// redraw the canvas - like Event.ENTER_FRAME in Adobe Flash.
	function handleTick(event) {
		stage.update();
	}
	
	// create a preloader to load the images.
	var loader = new createjs.LoadQueue(false);
	
	// when all images are loaded call the handleAllImageLoaded function.
	loader.on('complete', handleAllImagesLoaded, this);
	
	// provide a manifest of files and ids to be loaded.
	loader.loadManifest([
		{id: "background", src:"images/background.png"},
		{id: "deezer", src:"images/deezer.png"},
		{id: "m&s", src:"images/m&s.png"},
		{id: "sky-logo", src:"images/sky-logo.png"},
		{id: "arm", src:"images/arm.png"},
		{id: "cta", src:"images/cta.png"}
	]);
	
	function handleAllImagesLoaded() {
		console.log("All the images have loaded.");
		drawTheBannerBackground();
	}

	
	function drawTheBannerBackground() {
		console.log("draw and animate the background.");
		
		// provide the loader result for the item with id == 'background'
		// as a bitmap which will be stored in our background variable.
		background = new createjs.Bitmap( loader.getResult( "background" ) );
		
		// set the background bitmap alpha to zero.
		
		// add background to the display list.
		stage.addChild( background );
		
		// animate the background bitmap alpha value to 1 over the duration of 1000 milliseconds.
		createjs.Tween.get( background );
		
		// after the background is drawn on the canvas draw and animate the content for frame 1.
		setTimeout(frame1, 100);
	}
	
	function frame1() {
		console.log("draw and animate frame one.");

		var container = new createjs.Container();

		//Had to use DOMElement to make text with gradient,otherwise i would use createjs.Text
		var p1 = document.createElement('p');
		var text1 = document.createTextNode("Choose your reward");
		p1.appendChild(text1);
		p1.className = 'red-blue';
		p1.style.position = "absolute";
		document.body.appendChild(p1);
		var tw1 = new createjs.DOMElement(p1);
		
		tw1.x = 0;
		tw1.y = -260;
		tw1.alpha = 0;

		var tw2 = new createjs.Text("when you switch to 12 months ", "normal 15px skyRegMed", "#284698");
		tw2.x = 55;
		tw2.y = 40;
		tw2.alpha = 0;
		

		var tw3 = new createjs.Text("free Sky Broadband Unlimited ", "normal 15px skyRegMed", "#284698");
		tw3.x = 55;
		tw3.y = 55;
		tw3.alpha = 0;
		

		deezer_img.x = 50;
		deezer_img.y = 120;

		ms_image.x = 150;
		ms_image.y = 120;

		sky_logo.x = 10;
		sky_logo.y = 210;

		//animations start
		tweensToKill.push(createjs.Tween.get(tw1).to({alpha: 1},2000));
		tweensToKill.push(createjs.Tween.get(tw2).wait(1000).to({alpha: 1},2000));
		tweensToKill.push(createjs.Tween.get(tw3).wait(1000).to({alpha: 1},2000));

		container.addChild(tw1, tw2, tw3, deezer_img, ms_image);
		stage.addChild(sky_logo);
		stage.addChild(container);
		stage.update();
	    
	    tweensToKill.push(createjs.Tween.get(container).wait(3000).to({alpha: 0,visible:false},1000));

		// refer to the creative brief, frame 1 for guidance.
		
		// after a timeout and the animations have completed, draw frame 2.
		setTimeout(frame2, 5000);
	}
	
	function frame2() {
		console.log("draw and animate frame two.");
		var container2 = new createjs.Container();
			
		var p4 = document.createElement('p');
		var text4 = document.createTextNode("When you join Sky with");
		p4.appendChild(text4);
		p4.className = 'red-blue';
		document.body.appendChild(p4);
		var tw4 = new createjs.DOMElement(p4);
		// tweensToKill.push(tw4);
		tw4.x = 0;
		tw4.y = -260;
		tw4.alpha = 0;

		var tw5 = new createjs.Text("Sky Line Rental at $16.40pm applies", "normal 11px skyRegMed", "#4e4e4e");
		tw5.x = 110;
		tw5.y = 220;
		tw5.alpha = 0;
		// tweensToKill.push(tw5);
		
		arm_img.x = 70;
		arm_img.y = -300;

		tweensToKill.push(createjs.Tween.get(arm_img).wait(1500).to({y:60}, 300).to({y:-40}, 300).to({y:60}, 1500,createjs.Ease.bounceOut));
		tweensToKill.push(createjs.Tween.get(tw4).wait(500).to({alpha: 1},500));
		tweensToKill.push(createjs.Tween.get(tw5).wait(1500).to({alpha: 1},1000));
		
		container2.addChild(tw4, tw5, arm_img);
		stage.addChild(container2);
		
		tweensToKill.push(createjs.Tween.get(container2).wait(4000).to({alpha: 0,visible:false},1000));
		
		setTimeout(frame3, 5000);
	}
	
	function frame3() {
		console.log("draw and animate frame three.");
		var container3 = new createjs.Container();

		var p6 = document.createElement('p');
		var text6 = document.createTextNode("1 year free unlimited music with Deezer or £100 M&S Voucher");
		p6.appendChild(text6);
		p6.className = 'red-blue';
		document.body.appendChild(p6);
		var tw6 = new createjs.DOMElement(p6);
		tw6.x = 0;
		tw6.y = -260;
		tw6.alpha = 0;
		

		var tw7 = new createjs.Text("when you switch to 12 months ", "normal 15px skyRegMed", "#284698");
		tw7.x = 55;
		tw7.y = 70;
		tw7.alpha = 0;
		

		var tw8 = new createjs.Text("free Sky Broadband Unlimited ", "normal 15px skyRegMed", "#284698");
		tw8.x = 55;
		tw8.y = 85;
		tw8.alpha = 0;
		
		
		var p9 = document.createElement('p');
		var text9 = document.createTextNode("Limited time offer");
		p9.appendChild(text9);
		p9.className = 'red-blue';
		document.body.appendChild(p9);
		var tw9 = new createjs.DOMElement(p9);
		tw9.x = 0;
		tw9.y = -160;
		tw9.alpha = 0;
		

		var tw10 = new createjs.Text("Sky Line Rental at £16.40pm applies", "normal 11px skyRegMed", "#4e4e4e");
		tw10.x = 65;
		tw10.y = 150;
		tw10.alpha = 0;
		
		
		cta_button.x = 150;
		cta_button.y = 200;

		tweensToKill.push(createjs.Tween.get(tw6).wait(1000).to({alpha: 1},500));
		tweensToKill.push(createjs.Tween.get(tw7).wait(1500).to({alpha: 1},2000));
		tweensToKill.push(createjs.Tween.get(tw8).wait(1500).to({alpha: 1},2000));
		tweensToKill.push(createjs.Tween.get(tw9).wait(2000).to({alpha: 1},2000));
		tweensToKill.push(createjs.Tween.get(tw10).wait(2500).to({alpha: 1},2000));

		container3.addChild(tw6, tw7, tw8 ,cta_button, tw9, tw10);
		stage.addChild(container3);
		
	}
	
	setTimeout(function(){
			for (var i = 0; i < tweensToKill.length; i++) {
				var tween = tweensToKill[i];
			    tween.setPaused(true);
			    console.log('tween killed ' + i);
			}
		}, 15000);
};