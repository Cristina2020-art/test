function save() {
          
    var myName = document.getElementById("name");
    var age = document.getElementById("age");
    
    try {
        localStorage.setItem("name", myName.value);
        localStorage.setItem("age", age.value);
        myName.value = "";
        age.value = "";
    } 
    catch (e) {
        if (e == QUOTA_EXCEEDED_ERR) {
            console.log("Error: Local Storage limit exceeds.");
        }
        else {
            console.log("Error: Saving to local storage.");
        }
    } 
}
 
function get() {
    console.log("Getting your data from local storage.");
    var myName = document.getElementById("name");
    var age = document.getElementById("age");
    myName.value = localStorage.getItem("name");
    age.value = localStorage.getItem("age");
    
}
 
function remove() {
    console.log("Removing data from local storage.");
    localStorage.removeItem("name");
    localStorage.removeItem("age");
    
}
 
function clearStorage() {
    console.log("Clearing local storage."); 
    localStorage.clear();
    
}
 
function saveComplexData() {
    console.log("Saving complex data to local storage.");
    var myName = document.getElementById("name");
    var age = document.getElementById("age");
    var personObject = new Object();
    personObject.name = myName.value;
    personObject.age = age.value;
    localStorage.setItem("person", JSON.stringify(personObject));
    
}
 
function restoreComplexData() {
    console.log("Restoring complex data from local storage.");
    var myName = document.getElementById("name");
    var age = document.getElementById("age");
    var personObject = JSON.parse(localStorage.getItem("person"));
    myName.value = personObject.name;
    age.value = personObject.age;
}
 
function saveArrayData() {
    console.log("Saving array data to local storage.");
    var myArrayObject = [];
    
    var personObject1 = new Object();
    personObject1.name = "Array1";
    personObject1.age = 23;
    myArrayObject.push(personObject1);
    
    var personObject2 = new Object();
    personObject2.name = "Array2";
    personObject2.age = 24;
    myArrayObject.push(personObject2);
    
    var personObject3 = new Object();
    personObject3.name = "Array3";
    personObject3.age = 25;
    myArrayObject.push(personObject3);
    
    localStorage.setItem("persons", JSON.stringify(myArrayObject));
    
}
 
function restoreArrayData() {
    console.log("Restoring array data from local storage.");
    
    var myArrayObject = JSON.parse(localStorage.getItem("persons"));
    for (var i=0; i<myArrayObject.length; i++){
        var personObject = myArrayObject[i];
        console.log("Name: " + personObject.name, "Age: " + personObject.age);
    }
    
}
 
 
function load() {
    
    console.log("Page load finished");
    if (typeof(Storage) == "undefined" ) {
            alert("Your browser does not support HTML5 localStorage. Try upgrading.");
    } 
    else {
        console.log("Both localStorage and sessionStorage support is there.");
    }
}