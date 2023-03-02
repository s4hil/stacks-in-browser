$(document).ready(()=>{
	// Push
	$("#link-list").on('click', '.nav-item', function () {
		let clickedOption = $(this).text().trim();
		let tableContent = $("#table-body").html();
		let toPrepend = "<tr><td>"+ clickedOption +"</td><td></td></tr>";
		let output = toPrepend + tableContent;

		$("#table-body").html(output);
		setTop();
	});

	// set status
	function setTop() {
		let topBadge = "<button class='btn btn-success'>TOP</button>";
		$("#table-body").children("tr").children("td:nth-child(2)").html("-");
		$("#table-body").children("tr:first").children("td:nth-child(2)").html(topBadge);
	}

	// Pop
	$("#backBtn").click(function () {
		let a = $("#table-body").children("tr:first").text();
		a = a.replace('TOP', ' ');
		$("#table-body").children("tr:first").remove();
		alert("Popped Element is: " + a);
		setTop();
	});
});