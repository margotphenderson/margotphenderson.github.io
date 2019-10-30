var quantNG; //number no glaze
var quantSM; //number sugar milk
var quantVM; //number vanilla milk
var quantDC; //number double choc
var orderQuant = 0; //number buns to add to existing cart
var cartNumber; //number buns in cart
var pricing = 0.00; //total cost of buns on details page

// Add together all glaze quantities = orderQuant
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

// Add new buns to cart number = orderQuant + old cartNumber = new cartNumber
function addToCart() {
  if (orderQuant==0){
    document.getElementsByClassName("addtocart").disabled=true;
  } else {
    cartNumber = parseInt(document.getElementById("cartNumber").innerHTML);
    // console.log(cartNumber + " buns in the cart + " + orderQuant + " in new order =");
    cartNumber = cartNumber + orderQuant;
    document.getElementById("cartNumber").innerHTML = cartNumber;
    // console.log(cartNumber + " buns in the cart now.");

    // Reset all dropdowns & orderQuant after "Add to Cart"
    document.getElementById("quantNG").value = 0;
    document.getElementById("quantSM").value = 0;
    document.getElementById("quantVM").value = 0;
    document.getElementById("quantDC").value = 0;
    orderQuant = 0;
    pricing = 0.00;
    document.getElementById("pagePrice").innerHTML = "0.00";
    // console.log("--- Reset for new order ---");
    document.getElementById("alert").innerHTML = "Added to cart!";
  }
}

// Change pricing above "Add to Cart" button
function changePricing(){
  pricing = 0.00;
  document.getElementById("pagePrice").innerHTML = "0.00";
  orderQuant = 0;
  addQuant();

  console.log(document.getElementById("pagePrice"));

  //Calculates quantity * $3.99
  pricing = orderQuant * 3.95;
  console.log("orderQuant = " + orderQuant);
  console.log(orderQuant + " * $3.95 = " + pricing);

  //Updates pricing text on page
  document.getElementById("pagePrice").innerHTML = pricing.toFixed(2);
}

// Click icing thumbnails & quantity to change larger image
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

function imageChangeCart(){
  document.getElementById('item-thumbnail').setAttribute("src", "Images/" + ".item-glaze.value")
  // DOESN'T WORK YET
}

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
