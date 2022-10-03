home = "https://blackboard.valpo.edu/webapps/portal/execute/defaultTab"
courses = "https://blackboard.valpo.edu/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_2_1"
announcements = "https://blackboard.valpo.edu/webapps/blackboard/execute/announcement?method=search&context=mybb&handle=my_announcements&returnUrl=/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_1_1&tabId=_1_1&forwardUrl=index.jsp"
grades = "https://blackboard.valpo.edu/webapps/streamViewer/streamViewer?cmd=view&streamName=mygrades"
logout = "https://blackboard.valpo.edu/ultra/logout"
//gradecenter = "https://blackboard.valpo.edu/webapps/portal/execute/defaultTab" //unsure? can't find. just use course specific I guess


if(document.getElementById("entry-login")==null) {
	topDiv = document.createElement("div");
	topDiv.setAttribute("style", "width: 100%; height: 10%; background-color: black; color: white; text-decoration:none");
	topDiv.appendChild(document.createElement("br"));
	registerTopButton(topDiv,"Home",home);
	registerTopButton(topDiv,"Courses",courses);
	registerTopButton(topDiv,"Announcements",announcements);
	registerTopButton(topDiv,"Grades",grades);
	registerTopButton(topDiv,"Sign Out",logout);
	//registerTopButton(topDiv,"Grade Center",gradecenter);
	document.body.insertBefore(topDiv,document.body.firstChild);
}

function registerTopButton(topDiv, localization, destinationURL) {
	textnode = document.createTextNode(localization);
	clickLink = document.createElement("a");
	clickLink.setAttribute("href",destinationURL);
	clickText = document.createElement("h2");
	clickText.appendChild(textnode);
	clickText.setAttribute("style", "text-decoration: none; color: #EEEEEE; display: inline; margin: 10px; font-size: 20px;");
	clickLink.appendChild(clickText);
	clickLink.setAttribute("style", "text-decoration: none; color: #EEEEEE");
	topDiv.appendChild(clickLink);
}