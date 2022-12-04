const checkPassword = () => {

    const digit_cent = Number(document.querySelector('#select-cent').value);
    const digit_ten = Number(document.querySelector('#select-ten').value);
    const digit_unit = Number(document.querySelector('#select-unit').value);

    const pass = digit_cent*100 + digit_ten*10 + digit_unit;    

    if(pass == 911){     
        document.querySelector("#text-select").innerHTML = "password 1 correcto";        
    } else if (pass == 714){
        document.querySelector("#text-select").innerHTML = "password 2 correcto"; 
    } else{
        document.querySelector("#text-select").innerHTML = "password incorrecto"; 
    }
};

document.querySelector('#btn-check').addEventListener('click', checkPassword);
