//Let's create a simple to do application 

//Show an unordered list of to do's [checkmark]
//Show an input to enter a new to do [checkmark]
//Show a button to add a to  do... [checkmark]
//When the button is clicked: []
//The text from the input box is used to add a...
//list item to the bottom of the list 
//The text from the input box is cleared out.
//When the user clicks on a list item, it is removed
//Extra Credit: - When a list item is clicked, 
//cross it out, then remove it after 1 second.
//**Submit: A link to your github repo for the 
//project as well as a screenshot of the project 
//working in the browser
//first i need to make a function for button?

//let button = document.querySelector("#button-one");
//button.addEventListener("submit", buttonClick);


//function buttonClick(e){
    //Take the text from the inputBox and use it
    //to add a list item to the bottom of the list.
    //1 get the text.
    //let input = document.querySelector(".form-control");
    //This part right here is something you'd have
    //to look up. How do we get the input field from
    //the input tag?
    //let text = input.value;
    //2. Create a list item with that text and add it
    //to the bottom of the list.
    //let newLI = document.createElement("li");
    //newLI.innerText = text;

    //let todoList = document.querySelector("#items");
    //todoList.appendChild(newLI);
    //input.value = "";
    //alert("button pressed");
//};

//let lis = [...document.querySelectorAll('list-group-item')];

//for (let li of lis) {
  //li.addEventListener('click', function() {
    //this.parentNode.removeChild(this);
  //})
//}

let form = document.getElementById("whateverform");
let itemList = document.getElementById("list-group-item");
let inputdelete = document.getElementById("whateverform");

// Form submit event
form.addEventListener('submit', addItem);

// For click event list delete
itemList.addEventListener('click', addItemtwo);

// For submit event input delete
inputdelete.addEventListener('submit', deleteinputfield);

// Add item
function addItem(e){
    e.preventDefault();

    // Get input value (I had to use the first input of my form since type='text')
    let newItem = document.getElementById("item").value;

    // Create new li element
    let newli = document.createElement('li');
    // Add class
    newli.className = "list-group-item";
    // set object newli's innerText method equal to newItem (your input value)
    newli.innerText = newItem;
    //need to add child element including child element content to end of list
    let todoList = document.querySelector("#items");
    todoList.appendChild(newli);
    //delete input field after newli is added
    //input.value = ""; can't define inside the local scope will set everything to empty
    
}

function deleteinputfield(e) {
    let input = document.getElementById("item").value;
    addItem
    input = " ";
}

//delete when clicking on list group items
function addItemtwo(e) {
    let li = e.target.parentElement;
    itemList.removeChild(li);
}