document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
   
    // step 2: get the Cash out amount
    const cashOutInput = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOutInput);
    const CashOutPin = document.getElementById('input-cash-out-pin').value;

    if(CashOutPin === '1234'){
      const balance = document.getElementById('account-balance').innerText;
      const balanceNumber = parseFloat(balance);
      const newBalance = balanceNumber - cashOutNumber;
      console.log(newBalance);

      document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('Wrong Pin number ! please try again later')
    }
})