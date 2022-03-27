/*Let's create a simple to do application 

Show an unordered list of to do's [checkmark]
Show an input to enter a new to do [checkmark]
Show a button to add a to  do... [checkmark]
When the button is clicked: []
The text from the input box is used to add a...
list item to the bottom of the list [checkmark]
The text from the input box is cleared out.
When the user clicks on a list item, it is removed [checkmark]
Extra Credit: - When a list item is clicked, 
cross it out, then remove it after 1 second.
**Submit: A link to your github repo for the 
project as well as a screenshot of the project 
working in the browser*/

//make form an HTMLElement (I think it should be an object of an HTMLElement)
//HTMLElement -> Element -> Node -> EventTarget
let form = document.getElementById("button-one");
// Form submit event
form.addEventListener('click', addItem);


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
    //Remove new item on click event
    newli.addEventListener('click', removeListItem);
    function removeListItem(e){
      let target = e.currentTarget.remove();
    }
}

//Remove item
let listItems = document.getElementsByClassName("list-group-item");
for (let i=0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', removeListItem);
 }

function removeListItem(e){
  let target = e.currentTarget.remove();
}


let inputDelete = document.getElementById("button-one");
inputDelete.addEventListener("click", deleteInputValue)
function deleteInputValue(e){
  document.getElementById("item").value = "";
}
