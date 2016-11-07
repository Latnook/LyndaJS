// grab single element
var myTitleLink = document.getElementById("mainTitle");

// information about the node
console.log("This is a node of type: ", myTitleLink.nodeType);
console.log("Inner HTML: ", myTitleLink.innerHTML);
console.log("Child nodes: ", myTitleLink.childNodes.length);

//count links
var myLinks = document.getElementsByTagName("a");
console.log("Links: " , myLinks.length);