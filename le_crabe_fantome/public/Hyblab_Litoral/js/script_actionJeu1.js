	'use strict'
	
$("#Bouton2050").click(function(e){
	if(document.getElementById("scenar1").checked){
		$("#HomardJ2-1").fadeIn("slow");
		$("#HomardJ2-2").fadeIn("slow");
		$("#HomardJ2-3").fadeIn("slow");
		$("#HomardJ2-4").fadeIn("slow");
		
		$("#MerluJ2-1").fadeIn("slow");
		$("#MerluJ2-2").fadeIn("slow");
		$("#MerluJ2-3").fadeIn("slow");
		$("#MerluJ2-4").fadeIn("slow");
		
		$("#SoleJ2-1").fadeIn("slow");
		$("#SoleJ2-2").fadeIn("slow");
		$("#SoleJ2-3").fadeIn("slow");
		$("#SoleJ2-4").fadeOut("slow");
	
		$("#solea").style.transform = 'scale(' + 1.1 + ')';
		$("#homarda").style.transform = 'scale(' + 0.3 + ')';
		$("#merlua").style.transform = 'scale(' + 0 + ')';
	}
	if(document.getElementById("scenar2").checked){
		$("#HomardJ2-1").fadeIn("slow");
		$("#HomardJ2-2").fadeIn("slow");
		$("#HomardJ2-3").fadeIn("slow");
		$("#HomardJ2-4").fadeIn("slow");
		
		$("#MerluJ2-1").fadeIn("slow");
		$("#MerluJ2-2").fadeIn("slow");
		$("#MerluJ2-3").fadeIn("slow");
		$("#MerluJ2-4").fadeIn("slow");
		
		$("#SoleJ2-1").fadeIn("slow");
		$("#SoleJ2-2").fadeIn("slow");
		$("#SoleJ2-3").fadeIn("slow");
		$("#SoleJ2-4").fadeOut("slow");
		
		$("#solea").style.transform = 'scale(' + 1.05 + ')';
		$("#homarda").style.transform = 'scale(' + 0.95 + ')';
		$("#merlua").style.transform = 'scale(' + 0 + ')';
	}
	if(document.getElementById("scenar3").checked){
		$("#HomardJ2-1").fadeIn("slow");
		$("#HomardJ2-2").fadeIn("slow");
		$("#HomardJ2-3").fadeIn("slow");
		$("#HomardJ2-4").fadeIn("slow");
		
		$("#MerluJ2-1").fadeIn("slow");
		$("#MerluJ2-2").fadeIn("slow");
		$("#MerluJ2-3").fadeIn("slow");
		$("#MerluJ2-4").fadeOut("slow");
		
		$("#SoleJ2-1").fadeIn("slow");
		$("#SoleJ2-2").fadeIn("slow");
		$("#SoleJ2-3").fadeIn("slow");
		$("#SoleJ2-4").fadeOut("slow");
		
		$("#solea").style.transform = 'scale(' + 0.90 + ')';
		$("#homarda").style.transform = 'scale(' + 0.2 + ')';
		$("#merlua").style.transform = 'scale(' + 0 + ')';
		
	}
	if(document.getElementById("scenar4").checked){
		$("#HomardJ2-1").fadeIn("slow");
		$("#HomardJ2-2").fadeIn("slow");
		$("#HomardJ2-3").fadeIn("slow");
		$("#HomardJ2-4").fadeIn("slow");
		
		$("#MerluJ2-1").fadeIn("slow");
		$("#MerluJ2-2").fadeIn("slow");
		$("#MerluJ2-3").fadeOut("slow");
		$("#MerluJ2-4").fadeOut("slow");
		
		$("#SoleJ2-1").fadeIn("slow");
		$("#SoleJ2-2").fadeIn("slow");
		$("#SoleJ2-3").fadeIn("slow");
		$("#SoleJ2-4").fadeOut("slow");
		
		$("#solea").style.transform = 'scale(' + 0.7 + ')';
		$("#homarda").style.transform = 'scale(' + 0 + ')';
		$("#merlua").style.transform = 'scale(' + 0 + ')';
		
	}
});


$("#scenar1").click(function(e){
	$(".BateauG1").fadeOut("slow");
	$(".BateauP1").fadeIn("slow");
	$(".BateauM1").fadeOut("slow");
	$(".BateauM2").fadeOut("slow");
	$(".BateauP2").fadeIn("slow");
	$(".BateauG2").fadeOut("slow");
	
	$("#solea").style.transform = 'scale(' +  + ')';
	$("#homarda").style.transform = 'scale(' +  + ')';
	$("#merlua").style.transform = 'scale(' +  + ')';
	

});

$("#scenar2").click(function(e){
	$(".BateauG1").fadeIn("slow");
	$(".BateauP1").fadeOut("slow");
	$(".BateauM1").fadeOut("slow");
	$(".BateauM2").fadeOut("slow");
	$(".BateauP2").fadeOut("slow");
	$(".BateauG2").fadeIn("slow");
	
	$("#solea").style.transform = 'scale(' +  + ')';
	$("#homarda").style.transform = 'scale(' +  + ')';
	$("#merlua").style.transform = 'scale(' +  + ')';
});

$("#scenar3").click(function(e){
	$(".BateauG1").fadeIn("slow");
	$(".BateauP1").fadeIn("slow");
	$(".BateauM1").fadeOut("slow");
	$(".BateauM2").fadeOut("slow");
	$(".BateauP2").fadeIn("slow");
	$(".BateauG2").fadeIn("slow");
	
	$("#solea").style.transform = 'scale(' +  + ')';
	$("#homarda").style.transform = 'scale(' +  + ')';
	$("#merlua").style.transform = 'scale(' +  + ')';
});

$("#scenar4").click(function(e){
	$(".BateauG1").fadeIn("slow");
	$(".BateauP1").fadeIn("slow");
	$(".BateauM1").fadeIn("slow");
	$(".BateauM2").fadeIn("slow");
	$(".BateauP2").fadeIn("slow");
	$(".BateauG2").fadeIn("slow");
	
	$("#solea").style.transform = 'scale(' +  + ')';
	$("#homarda").style.transform = 'scale(' +  + ')';
	$("#merlua").style.transform = 'scale(' +  + ')';
});


/*
$("#barreJ2").mouseup(function(e){
	if (document.getElementById("barreJ2").value==0){
		$(".BateauG1").fadeOut("slow");
		$(".BateauP1").fadeOut("slow");
		$(".BateauP2").fadeOut("slow");
		$(".BateauM1").fadeOut("slow");
		$(".BateauP2").fadeOut("slow");
		$(".BateauG2").fadeOut("slow");
		
		
		$("#MerluJ2-1").fadeIn("slow");
		$("#MerluJ2-2").fadeIn("slow");
		$("#MerluJ2-3").fadeIn("slow");
		$("#ColinJ2-1").fadeIn("slow");
		$("#ColinJ2-2").fadeIn("slow");
		$("#HomardJ2-1").fadeIn("slow");
		$("#HomardJ2-2").fadeIn("slow");
		$("#HomardJ2-3").fadeIn("slow");
		$("#PoissonJ2-1").fadeIn("slow");
		$("#PoissonJ2-2").fadeIn("slow");
	}
	
	else if (document.getElementById("barreJ2").value==1){
		$(".BateauG1").fadeOut("slow");
		$(".BateauP1").fadeIn("slow");
		$(".BateauP2").fadeOut("slow");
		$(".BateauM1").fadeOut("slow");
		$(".BateauP2").fadeOut("slow");
		$(".BateauG2").fadeOut("slow");
		
		
		$("#MerluJ2-1").fadeIn("slow");
		$("#MerluJ2-2").fadeIn("slow");
		$("#MerluJ2-3").fadeIn("slow");
		$("#ColinJ2-1").fadeOut("slow");
		$("#ColinJ2-2").fadeIn("slow");
		$("#HomardJ2-1").fadeIn("slow");
		$("#HomardJ2-2").fadeIn("slow");
		$("#HomardJ2-3").fadeIn("slow");
		$("#PoissonJ2-1").fadeIn("slow");
		$("#PoissonJ2-2").fadeIn("slow");
	}
	
	else if (document.getElementById("barreJ2").value==2){
		$(".BateauG1").fadeIn("slow");
		$(".BateauP1").fadeIn("slow");
		$(".BateauP2").fadeOut("slow");
		$(".BateauM1").fadeOut("slow");
		$(".BateauP2").fadeOut("slow");
		$(".BateauG2").fadeOut("slow");
		
		
		$("#MerluJ2-1").fadeIn("slow");
		$("#MerluJ2-2").fadeIn("slow");
		$("#MerluJ2-3").fadeIn("slow");
		$("#ColinJ2-1").fadeOut("slow");
		$("#ColinJ2-2").fadeIn("slow");
		$("#HomardJ2-1").fadeIn("slow");
		$("#HomardJ2-2").fadeIn("slow");
		$("#HomardJ2-3").fadeIn("slow");
		$("#PoissonJ2-1").fadeOut("slow");
		$("#PoissonJ2-2").fadeIn("slow");
	}
	
	else if (document.getElementById("barreJ2").value==3){
		$(".BateauG1").fadeIn("slow");
		$(".BateauP1").fadeIn("slow");
		$(".BateauP2").fadeOut("slow");
		$(".BateauM1").fadeIn("slow");
		$(".BateauP2").fadeOut("slow");
		$(".BateauG2").fadeOut("slow");
		
		
		$("#MerluJ2-1").fadeOut("slow");
		$("#MerluJ2-2").fadeIn("slow");
		$("#MerluJ2-3").fadeIn("slow");
		$("#ColinJ2-1").fadeOut("slow");
		$("#ColinJ2-2").fadeIn("slow");
		$("#HomardJ2-1").fadeOut("slow");
		$("#HomardJ2-2").fadeIn("slow");
		$("#HomardJ2-3").fadeIn("slow");
		$("#PoissonJ2-1").fadeOut("slow");
		$("#PoissonJ2-2").fadeIn("slow");
	}
	
	else if (document.getElementById("barreJ2").value==4){
		$(".BateauG1").fadeIn("slow");
		$(".BateauP1").fadeIn("slow");
		$(".BateauP2").fadeOut("slow");
		$(".BateauM1").fadeIn("slow");
		$(".BateauP2").fadeIn("slow");
		$(".BateauG2").fadeOut("slow");
		
		
		$("#MerluJ2-1").fadeOut("slow");
		$("#MerluJ2-2").fadeOut("slow");
		$("#MerluJ2-3").fadeIn("slow");
		$("#ColinJ2-1").fadeOut("slow");
		$("#ColinJ2-2").fadeIn("slow");
		$("#HomardJ2-1").fadeOut("slow");
		$("#HomardJ2-2").fadeOut("slow");
		$("#HomardJ2-3").fadeIn("slow");
		$("#PoissonJ2-1").fadeOut("slow");
		$("#PoissonJ2-2").fadeIn("slow");
	}
	
	else if (document.getElementById("barreJ2").value==5){
		$(".BateauG1").fadeIn("slow");
		$(".BateauP1").fadeIn("slow");
		$(".BateauP2").fadeOut("slow");
		$(".BateauM1").fadeIn("slow");
		$(".BateauP2").fadeIn("slow");
		$(".BateauG2").fadeIn("slow");
		
		
		$("#MerluJ2-1").fadeOut("slow");
		$("#MerluJ2-2").fadeOut("slow");
		$("#MerluJ2-3").fadeOut("slow");
		$("#ColinJ2-1").fadeOut("slow");
		$("#ColinJ2-2").fadeIn("slow");
		$("#HomardJ2-1").fadeOut("slow");
		$("#HomardJ2-2").fadeOut("slow");
		$("#HomardJ2-3").fadeIn("slow");
		$("#PoissonJ2-1").fadeOut("slow");
		$("#PoissonJ2-2").fadeOut("slow");
	}
	
	else if (document.getElementById("barreJ2").value==6){
		$(".BateauG1").fadeIn("slow");
		$(".BateauP1").fadeIn("slow");
		$(".BateauP2").fadeIn("slow");
		$(".BateauM1").fadeIn("slow");
		$(".BateauP2").fadeIn("slow");
		$(".BateauG2").fadeIn("slow");
		
		
		$("#MerluJ2-1").fadeOut("slow");
		$("#MerluJ2-2").fadeOut("slow");
		$("#MerluJ2-3").fadeOut("slow");
		$("#ColinJ2-1").fadeOut("slow");
		$("#ColinJ2-2").fadeOut("slow");
		$("#HomardJ2-1").fadeOut("slow");
		$("#HomardJ2-2").fadeOut("slow");
		$("#HomardJ2-3").fadeOut("slow");
		$("#PoissonJ2-1").fadeOut("slow");
		$("#PoissonJ2-2").fadeOut("slow");
	}
});
*/