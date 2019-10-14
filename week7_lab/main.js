/*** Objects ***/
function Lion(name, age) {
  this.name = name;
  this.age = age;
  this.type = “Lion”;
  this.image = “lion.jpg”;
}

function Tiger(name, age) {
  this.name = name;
  this.age = age;
  this.type = “Tiger”;
  this.image = “tiger.jpg”;
}

function Bear(name, age) {
  this.name = name;
  this.age = age;
  this.type = “Tiger”;
  this.image = “tiger.jpg”;
}

/*** Variables ***/
var animals = [new Lion(), new Tiger(), new Bear()];
var names = ["Apple", "Blue Ivy", "Sir", "Blanket", "North", "Saint", "Chicago", "Stormi", "Shiloh"]

/*** Functions ***/
function generateRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

function generateRandomAnimal() {
    var randomIdx = generateRandomIndex(animals.length);
    var randomAnimal = animals[randomIdx];

    if (randomAnimal instanceof Lion) {
        return new Lion(generateRandomName());
    }
    else if (randomAnimal instanceof Tiger) {
        return new Tiger(generateRandomName());
    }
    else if (randomAnimal instanceof Bear) {
        return new Bear(generateRandomName());
    }
}

function generateRandomName() {
  var randomIdx = generateRandomIndex(names.length);
  return names[randomIdx];
}

function generateRandomAge() {
  var randomIdx = getRandomIndex(5);
  return randomIdx;
}

function onLoad() {
  var animal = generateRandomAnimal();
  console.log(animal)

  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
  document.getElementById("animal-img").setAttribute("src", animal.image)
};
