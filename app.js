document.getElementById('btnID').addEventListener('click', function(){
    const emali = document.getElementById('emailID');
    console.log(emailID.value);

    const pass = document.getElementById('passID');
    console.log(passID.value);

    if(emailID.value=='sontan@baap.com' && passID.value=='secret')
    {
        window.open(
            "banking.html", "_blank"
        );
    }
    else
    {
        window.open(
            "banking.html", "_blank"
        );
    }
});


