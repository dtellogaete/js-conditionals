const checkStickers = () => {

    const github = Number(document.querySelector('#sticker-github').value) || 0;
    const slack = Number(document.querySelector('#sticker-slack').value) || 0;
    const git = Number(document.querySelector('#sticker-git').value) || 0;

    const total = github + slack + git;    

    if(total <= 10){
        if(total <= 1){
            document.querySelector("#text-sticker").innerHTML = "Llevas " + total + " sticker";
        }else{
            document.querySelector("#text-sticker").innerHTML = "Llevas " + total + " stickers";  
        }              
    } else{
        document.querySelector("#text-sticker").innerHTML = "Llevas demasiados stickers"; 
    }  
};

document.querySelector('#btn-check').addEventListener('click', checkStickers);
