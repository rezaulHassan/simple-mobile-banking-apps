// console.log('home added');

// step 1: get add money btn with event listener /handler
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('add money btn clicked');

    // step 2: get new amount
    const addMoneyInput = document.getElementById('add-money').value;
     console.log(addMoneyInput);

    //  step 3: get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);
    // step 4 : verify pin number 
    // wrong way to validate pin number 
    if(pinNumberInput === '1234'){
        console.log('Adding money to your account');
        // step 4: get the current balance
        const balance = document.getElementById('account-balance').innerText;
          console.log( typeof balance);
        //   step 5: Add moneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        // step 6: Update the balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;

    }  
    else{
        alert('failed to add money! please try again');
    }
})




