// Cart Page:  Load existing order (if any) from local storage
// localStorage.setItem("myCart", JSON.stringify(myCart));

function loadCart(){
  if(localStorage.getItem("myCart") != null){
    var myCart = JSON.parse(localStorage.getItem("myCart")); //get existing myCart array from localStorage
  }
  else{
    var myCart = []; // start an empty myCart array
  }
  for (i=0; i<myCart.length; i++){
    var bunItem = myCart[i];
    //if (i===0){
      
      document.getElementById("item-glaze").innerHTML=bunItem.glaze; // .value or .innerHTML ?
      document.getElementById("item-quantity").innerHTML=bunItem.quantity;
    //}
  }
}

function loadDetails(){
  if(localStorage.getItem("myCart") != null){
    var myCart = JSON.parse(localStorage.getItem("myCart")); //get existing myCart array from localStorage
  }
  else{
    var myCart = []; // start an empty myCart array
  }
}

var quantNG; //number no glaze (selected on details page)
var quantSM; //number sugar milk (selected on details page)
var quantVM; //number vanilla milk (selected on details page)
var quantDC; //number double choc (selected on details page)
var orderQuant = 0; //number of buns to add to existing cart (from details page)
var cartNumber; //number buns currently in cart
var pricing = 0.00; //total cost of buns, on details page

// Details Page:  Add all glaze quantities = orderQuant
function addQuant(){
  orderQuart = 0;
  quantNG = document.getElementById("quantNG").value;
  quantSM = document.getElementById("quantSM").value;
  quantVM = document.getElementById("quantVM").value;
  quantDC = document.getElementById("quantDC").value;
  if(quantNG == "1"){
    orderQuant = orderQuant + 1;
  } else if(quantNG == "3"){
    orderQuant = orderQuant + 3;
  } else if(quantNG == "6"){
    orderQuant = orderQuant + 6;
  } else if(quantNG == "12"){
    orderQuant = orderQuant + 12;
  }
  if(quantSM == "1"){
    orderQuant = orderQuant + 1;
  } else if(quantSM == "3"){
    orderQuant = orderQuant + 3;
  } else if(quantSM == "6"){
    orderQuant = orderQuant + 6;
  } else if(quantSM == "12"){
    orderQuant = orderQuant + 12;
  }
  if(quantVM == "1"){
    orderQuant = orderQuant + 1;
  } else if(quantVM == "3"){
    orderQuant = orderQuant + 3;
  } else if(quantVM == "6"){
    orderQuant = orderQuant + 6;
  } else if(quantVM == "12"){
    orderQuant = orderQuant + 12;
  }
  if(quantDC == "1"){
    orderQuant = orderQuant + 1;
  } else if(quantDC == "3"){
    orderQuant = orderQuant + 3;
  } else if(quantDC == "6"){
    orderQuant = orderQuant + 6;
  } else if(quantDC == "12"){
    orderQuant = orderQuant + 12;
  }
}

// Cart Page:  add a new Original Bun
function originalBun(glaze, quantity){
  this.flavor = "Original Bun";
  this.glaze = glaze;
  this.quantity = quantity;
  this.image = "Images/noicing.jpg";
}


function addToCart() {
  if(localStorage.getItem("myCart") != null){
    var myCart = JSON.parse(localStorage.getItem("myCart")); //get existing myCart array from localStorage
  }
  else{
    var myCart = [];
  }
  // Details Page: Add new buns to cart number = orderQuant + old cartNumber = new cartNumber
  if (orderQuant==0){
    document.getElementsByClassName("addtocart").disabled=true;
  } else {
    cartNumber = parseInt(document.getElementById("cartNumber").innerHTML);
    cartNumber = cartNumber + orderQuant;
    document.getElementById("cartNumber").innerHTML = cartNumber;


  // Cart Page:  Add bun glazes & quantities to My Cart ...  (flavor is static; cost per quantity is static)
  if (document.getElementById("quantNG").value != "0"){
    console.log("No Glaze x" + document.getElementById("quantNG").value);
    myCart.push(new originalBun("No Glaze", document.getElementById("quantNG").value)); //Turn into integer for .value?  --> parseInt()
  }
  if (document.getElementById("quantSM").value != "0"){
    console.log("Sugar Milk x" + document.getElementById("quantSM").value);
    myCart.push(new originalBun("Sugar Milk", document.getElementById("quantSM").value)); //Turn into integer for .value?  --> parseInt()
  }
  if (document.getElementById("quantVM").value != "0"){
    console.log("Vanilla Milk x" + document.getElementById("quantVM").value);
    myCart.push(new originalBun("Vanilla Milk", document.getElementById("quantVM").value)); //Turn into integer for .value?  --> parseInt()
  }
  if (document.getElementById("quantDC").value != "0"){
    console.log("Double Chocolate x" + document.getElementById("quantDC").value);
    myCart.push(new originalBun("Double Chocolate", document.getElementById("quantDC").value)); //Turn into integer for .value?  --> parseInt()
    }
  localStorage.setItem("myCart", JSON.stringify(myCart));
  console.log(JSON.parse(localStorage.getItem("myCart")))


  // Details Page:  Reset all dropdowns & orderQuant after "Add to Cart"
  document.getElementById("quantNG").value = 0;
  document.getElementById("quantSM").value = 0;
  document.getElementById("quantVM").value = 0;
  document.getElementById("quantDC").value = 0;
  orderQuant = 0;
  pricing = 0.00;
  document.getElementById("pagePrice").innerHTML = "0.00";
  document.getElementById("alert").innerHTML = "Added to cart!";
  }
}


// Cart Page:  Clone item line in cart for new addition
// var allItems = document.getElementById("all-items");
// var newItem = document.getElementById("new-item");
// var clone = newItem.cloneNode(true);
// allItems.appendChild(clone);


// Details Page:  Change pricing above "Add to Cart" button
function changePricing(){
  pricing = 0.00;
  document.getElementById("pagePrice").innerHTML = "0.00";
  orderQuant = 0;
  addQuant();
  //Calculates quantity * $3.95
  pricing = orderQuant * 3.95;
  //Updates pricing text on page
  document.getElementById("pagePrice").innerHTML = pricing.toFixed(2);
}

// Details Page:  Click icing thumbnails & quantity to change larger image
function imageChange1(){
  document.getElementById('main-image').setAttribute("src", "Images/noicing.jpg")
}
function imageChange2(){
  document.getElementById('main-image').setAttribute("src", "Images/sugarmilk.jpg")
}
function imageChange3(){
  document.getElementById('main-image').setAttribute("src", "Images/vanillamilk.jpg")
}
function imageChange4(){
  document.getElementById('main-image').setAttribute("src", "Images/doublechoc.jpg")
}
function imageChange5(){
  document.getElementById('main-image').setAttribute("src", "Images/original.jpg")
}







// Change thumbnail image when icing dropdown is changed.
// function imageChangeCart(){
//   document.getElementById('item-thumbnail').setAttribute("src", "Images/" + ".item-glaze.value")
//   // DOESN'T WORK YET
// }

//   sessionStorage.setItem('key', 'value');
// sessionStorage.addToCart()

  /////// Add 1 to cart on button click ////////
  // function clickCounter() {
  //   if (typeof(Storage) !== "undefined") {
  //     if (sessionStorage.clickcount) {
  //       sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
  //     } else {
  //       sessionStorage.clickcount = 1;
  //     }
  //     document.getElementById("cartNumber").innerHTML = sessionStorage.clickcount;
  //   }
  // }
