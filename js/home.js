// console.log('home added');

// step 1 get add money btn with event listener /handler
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('add money btn clicked');

    // step 2 get new amount
    const addMoneyInput = document.getElementById('add-money').value;
     console.log(addMoneyInput);

    //  step 3 get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);
})