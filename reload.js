var url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.hash;


var current = new XMLHttpRequest();
current.open("GET", url, true);
current.onreadystatechange = function() {
  if (current.readyState == 4) {
	//some code
  }
}
current.send();

retry = window.setInterval("getpage()", 1000);

getpage();
function getpage() {
var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
	if (current.responseText != xhr.responseText) {
		
		window.location.reload();
	}
	else if (current.responseText == xhr.responseText)  {
		//some other code
	}
   	
	
  }
}
xhr.send();




}


