var myBunObj = {flavor: "Original", glaze: "Vanilla Milk", quantity: 3};
var myJSON = JSON.stringify(myBunObj);
window.location = "demo_json.php?x=" + myJSON;

myBunObj.flavor; // returns Original
myBunObj.flavor = "No Glaze" // changes Original to No Glaze

// Storing data:
myBunObj = {flavor: "Original", glaze: "Vanilla Milk", quantity: 3};
myJSON = JSON.stringify(myBunObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;
