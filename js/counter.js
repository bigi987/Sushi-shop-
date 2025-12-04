//Fing elements on the page
const btnminus = document.querySelector('[data-action="minus"]');
const btnplus = document.querySelector('[data-action="plus"]');
const btncounter = document.querySelector('[data-counter]');

//Add event listeners to the buttons
btnminus.addEventListener("click", function () {

   if(parseInt(btncounter.innerText) > 1)
   {
//Decrement counter on minus button click
       btncounter.innerText = parseInt(btncounter.innerText) - 1;
   }

});
//Increment counter on plus button click
btnplus.addEventListener("click", function () {
//Increment counter on plus button click
    btncounter.innerText = parseInt(btncounter.innerText) + 1;
});


