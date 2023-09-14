const inputs = document.querySelectorAll(".controls input");
// selecting all inputs on the page. Generates a node list. In some cases, you will need to convert a node list to an array so that it can use all the functions an array has. Node lists can still use the forEach() function //


function handleUpdate() {
    // console.log(this.value); / allows us to check it is working
    const suffix = this.dataset.sizing || '';
    // We are grabbing the siffux (px) of the element. Dataset is an object that will capture all the data- attributes of that object and put them in a new object. Here, we use 'sizing' to represent 'data-sizing' (in HTML) and "or nothing" in order to account for the color selector, which does not have a data suffix //
    // console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); 
    // For more on this, see this video: https://courses.wesbos.com/account/access/64ff43151c530c607b6fd37e/view/194130480  //
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
// using an arrow function to be concise. Creates change immediately on the page when user updates an input field //

inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
// This makes it change as the user is moving their mouse