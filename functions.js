//by http://LLL520.cn
//by http://hpj.name
//Íµ´úÂë¿É³Ü£¡£¡
/*
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                            ..,.:.,,,.:.,,,.                      ,,,.,.,..                                                           
                                          iMMMMMMMMMMMMMMMMMMM.                  MMMMMMMMMMMM          ,MMZ                                           
                                          @MMBXS2S2S2S2S2SXWMMB      SMMMMMMMMMS 7XXX2ZZa8MMM          2MMM                                           
                                          8MM.             ;MM0      :WBWMMM8WW:  ;BS     MM@          XMMM                                           
                                          0MMMMMMMMMMMMMMMMMMM2          MM@      MMM    BMMr          ;MMM                                           
                                          8MMMWW00WMMMMMMMM@0;           MM@     2MMa    MMM           iMMM                                           
                                          0MM,  8Z                    ;i7MMM:r;  MMM     MMZ           ,MM@                                           
                                          8MMi aMMX        rWMZ      XMMMMMMMMM: MMMMMMMMMMMM0         .MMB                                           
                                          8MM; 2MMX  ,r2@MMMMM@       7rXMMM;7r   0BW@M@@BWMMM0         MMB                                           
                                          WMM; 2MMMMMMMMMMMZ             MMM               :MMB         MMS                                           
                                          MMM  SMMM@W82;     MM.         MM@    MMMMMMMMMMZrMM2         iX                                            
                                         2MMM  aMMi         BMMS         MMM,a@W2Zaa2aaZaS MMM,        0MMM                                           
                                        .MMM:  XMMM         MMMi     aMMMMMMMMMM          iMMM         8MMM                                           
                                       iMMM8    MMMMMMMMMMMMMM@      @MMMMW02r.  :MMMWZaaMMMMi                                                        
                                       rMMZ      X@MMMMMMMMM8:                   :MMMMMMMMMM:                                                         
                                                                                      .::,                                                            
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
               ,                             ii       .:                    i;     i                                                                  
              aMM.     :r;rrr;r;:           ZMM2     MMMMS                 8MM8   MMM XMMr          :i::::ii: :WWBWWWBWBB0r                           
           ri,@MMa:;i ZMMMMMMMMMM8          MMM    ZMM@ZMMM2               MMM.   MMM 2MMMM7       7MMMMMMMMM,XMMMMMMMMMMMM,       S@MMMMM8i          
          MMMMMMMMMMM0BMMXiii:SMM@         MMM  iWMMM:   2MMM@7           MMMS    MMM   SMMM7       SXaMMMX2S    .      MMM      SMMMMMMMMMMM         
          .;.iMMMM;., 0MMMMMMMMMMB        MMMXSMMMMMMMMMMMMMMMMMM        ZMMW     MMM     XZ:i        7MMi      0MM     MMM     ,MMB      iMMW        
             WMMMMM7  BMMrii;:XMMB      7MMMM,0Ma :SaZZ20ZaS  8MM       ZMMM      BMMaaBMMMMMMM       MMM       MMM    XMMa     XMM:       MMM        
          ,WMMMMM0MMM 8MMMMMMMMMMB     MMMMMM:  Z@@MM@0:     MM:       WMMMM.7MMMMMMMMMMMMMM0Zi      WMMMW@MZ  7MM2    BMM       MMM7   .XMMMi        
         MMMMiaMM  WM BMM7iii:SMMW     SM78MMi 2MM@2ZMMM MM.rMMZ     rMMMMMM,MMMMMWMMM              8MMMMMMMM8 MMMB;77;MMM;       WMW 8MMMMZ          
         XM0  8MMi    BMMMMMMMMMMB        aMM; 2MM2ii@MM MMi,MMZ     ZMMiBMM.      MMM             @MMMM7 rMMZ 2MMMMMMMMMMMM8        rMMS             
              SMM.     Z0WMMM@0Zr         8MMi SMMMMMMMM MM,:MMa         WMMi      ;MMM            MMMMM7 ;MMa           rMMM        ZMM.             
                 MMZ rMM       27         8MM; 2MM:  8MM MM,,MMZ         MMMi       MMM;    i7       XMMX rMM2 Xr;i;iii;  MMM         82              
            MMM .MM@ ,MMM     0MM0        0MMi SMMMMMMMM MM::MMa         MMMi       .MMM   iMMM      SMMX rMMaMMMMMMMMMMM;MMB         77,             
           XMMM :MMB  8MM, MMM MMM.       8MM; 2MM8aSMMM MM ,MMZ         MMMi        SMMM  2MMW      aMM; :MM2 ,  .,.:.  BMM;        MMMM             
          ZMMM  .MMM:  XX ;MMM XMMM       0MM; 2MM   8MM    XMMZ         MMMi         2MMMSMMM7      8MM@7WMM8  .       SMMM         ;MMa             
         ,MMM.   8MMMMMMMMMMMS  MMM       @MMX 8MMXMMMMM.MMMMMMr         MMMr          ;MMMMMM       ;MMMMMMM: MMMMMMMMMMMM:                          
          .:      i8MMMMMMWS              ;MM   ZX BMWZ  MMMM@r          aMM             7@MW.         ::,:,   iZWMMMMMMM2                            
                                                                                                                                                      
                                                                                                                                                      
*/
var $window = $(window), gardenCtx, gardenCanvas, $garden, garden;
var clientWidth = $(window).width();
var clientHeight = $(window).height();

$(function () {
    // setup garden
	$loveHeart = $("#loveHeart");
	var offsetX = $loveHeart.width() / 2;
	var offsetY = $loveHeart.height() / 2 - 55;
    $garden = $("#garden");
    gardenCanvas = $garden[0];
	gardenCanvas.width = $("#loveHeart").width();
    gardenCanvas.height = $("#loveHeart").height()
    gardenCtx = gardenCanvas.getContext("2d");
    gardenCtx.globalCompositeOperation = "lighter";
    garden = new Garden(gardenCtx, gardenCanvas);
	
	$("#content").css("width", $loveHeart.width() + $("#code").width());
	$("#content").css("height", Math.max($loveHeart.height(), $("#code").height()));
	$("#content").css("margin-top", Math.max(($window.height() - $("#content").height()) / 2, 10));
	$("#content").css("margin-left", Math.max(($window.width() - $("#content").width()) / 2, 10));

    // renderLoop
    setInterval(function () {
        garden.render();
    }, Garden.options.growSpeed);
});

$(window).resize(function() {
    var newWidth = $(window).width();
    var newHeight = $(window).height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

function getHeartPoint(angle) {
	var t = angle / Math.PI;
	var x = 19.5 * (16 * Math.pow(Math.sin(t), 3));
	var y = - 20 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
	return new Array(offsetX + x, offsetY + y);
}

function startHeartAnimation() {
	var interval = 50;
	var angle = 10;
	var heart = new Array();
	var animationTimer = setInterval(function () {
		var bloom = getHeartPoint(angle);
		var draw = true;
		for (var i = 0; i < heart.length; i++) {
			var p = heart[i];
			var distance = Math.sqrt(Math.pow(p[0] - bloom[0], 2) + Math.pow(p[1] - bloom[1], 2));
			if (distance < Garden.options.bloomRadius.max * 1.3) {
				draw = false;
				break;
			}
		}
		if (draw) {
			heart.push(bloom);
			garden.createRandomBloom(bloom[0], bloom[1]);
		}
		if (angle >= 30) {
			clearInterval(animationTimer);
			showMessages();
		} else {
			angle += 0.2;
		}
	}, interval);
}

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "<span class=\"digit\">" + days + "</span> days <span class=\"digit\">" + hours + "</span> hours <span class=\"digit\">" + minutes + "</span> minutes <span class=\"digit\">" + seconds + "</span> seconds"; 
	$("#elapseClock").html(result);
}

function showMessages() {
	adjustWordsPosition();
	$('#messages').fadeIn(5000, function() {
		showLoveU();
	});
}

function adjustWordsPosition() {
	$('#words').css("position", "absolute");
	$('#words').css("top", $("#garden").position().top + 195);
	$('#words').css("left", $("#garden").position().left + 70);
}

function adjustCodePosition() {
	$('#code').css("margin-top", ($("#garden").height() - $("#code").height()) / 2);
}

function showLoveU() {
	$('#loveu').fadeIn(3000);
}