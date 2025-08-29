// console.log('btn clicked');
// step 1 set event handler
// document.getElementById('button-login').addEventListener('click', function(event){
// //    step 2 : prevent default behavior (prevent reloading browser)
//     event.preventDefault(); 
//      console.log('login button clicked');

//     //  step 3 get the phone number and pin
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
    
//     console.log(phoneNumber, pinNumber);

//     // step 4 : validate phone and pin 
//     // this is temporary you should not do like this
//     if(phoneNumber === '5' && pinNumber ==='1234'){
//         console.log('you are logged in');
//         // step 5 allow user to use the website
//         window.location.href = '/home.html';
//     }
//     else{
//         alert('wrong phone number or pin');
//     }
// })
document.getElementById('button-login').addEventListener('click', function(event){
    console.log('btn clicked');
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);
   if(phoneNumber === '5' && pinNumber === '1234'){
    console.log('You are logged in');
    window.location.href = '/home.html';
   }
   else{
    alert('Wrong Phone number or password');
   }

})