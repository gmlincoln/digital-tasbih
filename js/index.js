const displaySubhanAllah = document.getElementById('displaySubhanAllah');
const incrementSubhanAllahBtn = document.getElementById('incrementSubhanAllah');
const decrementSubhanAllahBtn = document.getElementById('decrementSubhanAllah');

const displayAlhamdulillah = document.getElementById('displayAlhamdulillah');
const incrementAlhamdulillahBtn = document.getElementById('incrementAlhamdulillah');
const decrementAlhamdulillahBtn = document.getElementById('decrementAlhamdulillah');

const displayAllahuakbar = document.getElementById('displayAllahuakbar');
const incrementAllahuakbarBtn = document.getElementById('incrementAllahuakbar');
const decrementAllahuakbarBtn = document.getElementById('decrementAllahuakbar');

const resetBtn = document.getElementById('resetBtn');

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahuAkbarInitialValue = 0;


incrementSubhanAllahBtn.addEventListener('click', function(){
    
    if(subhanAllahInitialValue !== 33){
        subhanAllahInitialValue++;
        displaySubhanAllah.innerText = subhanAllahInitialValue;
    }
    else{
        alert('You complete your zikir for SubhanAllah');
    }
})
decrementSubhanAllahBtn.addEventListener('click', function(){
    if(subhanAllahInitialValue === 0){
        
        alert('Your Zikir not start Yet! You can not decrease value!!');
    }
    else{
        subhanAllahInitialValue--;
        displaySubhanAllah.innerText = subhanAllahInitialValue;
    }  
})

incrementAlhamdulillahBtn.addEventListener('click',function(){
    if(alhamdulillahInitialValue !== 33){
        alhamdulillahInitialValue++;
        displayAlhamdulillah.innerText = alhamdulillahInitialValue;
    }
    else{
        alert('You complete your zikir for Alhamdulillah');

    }
});

decrementAlhamdulillahBtn.addEventListener('click',function(){
    if(alhamdulillahInitialValue === 0 ){
        alert('Your Zikir not start Yet! You can not decrease value!');
    }
    else{
        alhamdulillahInitialValue--;
        displayAlhamdulillah.innerText = alhamdulillahInitialValue;
    }
});

incrementAllahuakbarBtn.addEventListener('click',function(){
    if(allahuAkbarInitialValue !== 34){
        allahuAkbarInitialValue++;
        displayAllahuakbar.innerText = allahuAkbarInitialValue;
    }
    else{
        alert('You complete your zikir for AllahuAkbar');
    }
});

decrementAllahuakbarBtn.addEventListener('click',function(){
    if(allahuAkbarInitialValue === 0){
        alert('Your Zikir not start Yet! You can not decrease value!');
    }
    else{
        allahuAkbarInitialValue--;
        displayAllahuakbar.innerText = allahuAkbarInitialValue;
    }
});


resetBtn.addEventListener('click',function(){
    subhanAllahInitialValue = 0;
    displaySubhanAllah.innerText = subhanAllahInitialValue;
    alhamdulillahInitialValue = 0;
    displayAlhamdulillah.innerText = alhamdulillahInitialValue;
    allahuAkbarInitialValue = 0;
    displayAllahuakbar.innerText = allahuAkbarInitialValue;
})