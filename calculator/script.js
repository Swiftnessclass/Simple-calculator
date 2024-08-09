//The [0] is used because getElementsByClassName returns a live HTMLCollection of all elements with the specified class name.
// This collection is similar to an array, but it is not exactly an array.
 //To access the first element in this collection, you use the [0] index.



const display=document.getElementsByClassName("display")[0];

const appendToDisplay=(input) => {
    display.value+=input;

}

const clearDisplay=()=>{
    display.value="";

}

const calculate =()=>{
    try{
    display.value=eval(display.value);
}
catch(error)
{
    display.value="error";
}

}

