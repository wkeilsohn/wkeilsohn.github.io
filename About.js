//alert("Conected");

function rotateRight(){
	if($("#titleLevel").text() === "A series of preserved maritime earwigs."){
		$("#slide").css("background-image", "url(Pictures/Bar/P6.jpg)");
		$("#authorLevel").text("William Keilsohn");
		$("#titleLevel").text("Myself holding a large starfish during a study abroad to NZ.")
	}
	else if($("#titleLevel").text() === "Myself holding a large starfish during a study abroad to NZ."){
		$("#slide").css("background-image", "url(Pictures/Bar/P2.jpg)");
		$("authorLevel").text("William Keilsohn");
		$("#titleLevel").text("Insects collected during undergraduate research.")
	}
	else{
		$("#titleLevel").text("A series of preserved maritime earwigs.");
		$("#authorLevel").text("William Keilsohn");
		$("#slide").css("background-image", "url(Pictures/Bar/P4.jpg)");
	}
};


function rotateLeft(){
	if($("#titleLevel").text() === "A series of preserved maritime earwigs."){
		$("#slide").css("background-image", "url(Pictures/Bar/P2.jpg)");
		$("authorLevel").text("William Keilsohn");
		$("#titleLevel").text("Insects collected during undergraduate research.")
	}
	else if($("#titleLevel").text() === "Insects collected during undergraduate research."){
		$("#slide").css("background-image", "url(Pictures/Bar/P6.jpg)");
		$("#authorLevel").text("William Keilsohn");
		$("#titleLevel").text("Myself holding a large starfish during a study abroad to NZ.")
	}
	else{
		$("#titleLevel").text("A series of preserved maritime earwigs.");
		$("#authorLevel").text("William Keilsohn");
		$("#slide").css("background-image", "url(Pictures/Bar/P4.jpg)");
	}	
};

$("#left1").click(rotateLeft);
$("#right1").click(rotateRight);
