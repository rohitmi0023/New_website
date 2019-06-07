// slide show of my pictures at about me section
var index = 1;
function autoShow()
{
	let x = document.getElementsByClassName("slides");
	var i;
	for(i = 0; i < x.length ; i++)
		x[i].style.display="none";
	if(index > x.length) {index = 1 ;}
  x[index-1].style.display = "block";
  index++;
  setTimeout(autoShow,2000);
}
autoShow();

// search effect
function myFunction(){
	var input = document.getElementById("search-bar");
	var filter = input.value.toUpperCase();
	var contents = document.getElementsByClassName("text-content");
	for (var i = 0 ; i < contents.length ; i++)
	{
		var txtValue = contents[i].textContent || contents[i].innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1)
	 {
			contents[i].style.display = "";
	 } 
	else
	  {
			contents[i].style.display = "none";
	  }
	}
}

//Read more effect
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	});

/*
document.addEventListener("mouseover",effect);
document.addEventListener("mouseout",effectback);

function effect() 
{
	var y = document.getElementsByClassName("texts");
	y.style.backgroundColor = "lightblue";
}
function effectback()
{
	var z = document.getElementsByClassName("texts");
	z.style.backgroundColor = "#95c8d8";
}*/	