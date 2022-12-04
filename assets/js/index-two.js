const checkStickers = () => {

    const github = Number(document.querySelector('#sticker-github').value);
    const slack = Number(document.querySelector('#sticker-slack').value);
    const git = Number(document.querySelector('#sticker-git').value);

    const total = github + slack + git;    

    if(total <= 10){     
        document.querySelector("#text-sticker").innerHTML = total;        
    } else{
        document.querySelector("#text-sticker").innerHTML = "Llevas demasiados stickers"; 
    }  
};

document.querySelector('#btn-check').addEventListener('click', checkStickers);
