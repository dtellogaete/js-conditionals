const setBorderColor = () => {

    const color = document.querySelector('img');

    if(color.style.border === "2px solid red"){     
        color.style.border = "2px";        
    } else{
        color.style.border = "2px solid red";
    }  
};

