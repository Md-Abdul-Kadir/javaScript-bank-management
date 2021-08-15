// handle deposite btn
document.getElementById('btndepoID').addEventListener('click', function () {
    const btndepofield = document.getElementById('depofield');
    const btndeporesult = document.getElementById('depoAID');
    const balance = document.getElementById('balAID');
    const temp = btndeporesult.innerText;

    btndeporesult.innerText = parseFloat(temp) + parseFloat(btndepofield.value);
    btndepofield.value = ' ';

    balance.innerText = parseFloat(btndeporesult.innerText);
});


// handle Withdrew btn
document.getElementById('btnwithID').addEventListener('click', function () {
    const btnwithfield = document.getElementById('withfield');
    const btnwithresult = document.getElementById('withAID');
    const balance = document.getElementById('balAID');
    
    const temp = btnwithresult.innerText;
    btnwithresult.innerText = parseFloat(temp) + parseFloat(btnwithfield.value);
    

    balance.innerText = parseFloat(balance.innerText) - parseFloat(btnwithfield.value);
    btnwithfield.value = ' ';
});

console.log('555');