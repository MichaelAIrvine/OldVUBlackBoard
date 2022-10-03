home = "https://blackboard.valpo.edu/webapps/portal/execute/defaultTab";
url = window.location.href;
if(url.includes("blackboard.valpo.edu/ultra") && !url.includes("logout")) {
	
	window.location.href=home;
}