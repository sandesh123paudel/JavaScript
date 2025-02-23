// ..........................EXAMPLE 1 <h1> .....................

// --------------------STEP 1 CREATE THE ELEMENT

// const newH1= document.createElement("h1");


// -----------------STEP 2 ADD ATTRIBUTES/PROPERTIES\

// newH1.textContent="I Like Pizza";
// newH1.id="myH1";
// newH1.style.color="tomato";
// newH1.style.textAlign="center";


// -------------------STEP 3 APPEND ELEMENT TO DOM

// document.body.append(newH1);
// document.body.prepend(newH1);

// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);


// document.getElementById("box2").append(newH1);
// const box2=document.getElementById("box2");
// document.body.insertBefore(newH1,box2);


// const boxes=document.querySelectorAll(".box");
// document.body.insertBefore(newH1,boxes[3]);




// ----------------REMOVE HTML ELEMENT

// document.body.removeChild(newH1);



//if it has parent
// document.getElementById("box1").removeChild(newH1);





//-----------STEP 1

const newListItem= document.createElement("li");


//---------------STEP 2

newListItem.textContent="coconot";
newListItem.id="coconot";
newListItem.style.fontWeight="bold";
newListItem.style.backgroundColor="lightgreen";




//-------------------STEP 3

// document.body.append(newListItem);
document.body.prepend(newListItem);


//appended to the existing list which has id = fruits
// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);


// const orange=document.getElementById("apple");
// document.getElementById("fruits").insertBefore(newListItem,apple);



// const lists=document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem,lists[0]);



