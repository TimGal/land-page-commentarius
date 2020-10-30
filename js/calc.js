"use strict";

function calculate() {
	// Look up the input and output elements in the document
	var comp = document.getElementById("comp").value;
	var comm = document.getElementById("comm").value;

	var companyRate = 1;
	var commentsRate = 1;
	if (comp >= 0 && comp <= 10) {
		companyRate = 1.5;
	} else if (comp >= 11 && comp <= 100) {
		companyRate = 1.25;
	} else {
		companyRate = 1;
	}

	if (comm >= 0 && comm <= 100) {
		commentsRate = 5;
	} else if (comm >= 101 && comm <= 1000) {
		commentsRate = 3.5;
	} else if (comm >= 1001 && comm <= 5000) {
		commentsRate = 2.5;
	} else {
		commentsRate = 1.5;
	}

	var commentsRes = comm * commentsRate;
	var companyRes = comp * companyRate;

	var result = commentsRes * companyRes;
	var calcResult = document.getElementById("payment");
	var onecommentcost = document.getElementById("onecommentcost");
	var coefficient = document.getElementById("coefficient");
	
	calcResult.innerHTML = result;
	onecommentcost.innerHTML = commentsRate;
	coefficient.innerHTML = companyRate;
}
