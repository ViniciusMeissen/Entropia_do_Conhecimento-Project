var imgs = [];
var slider;
var imgAtual;
var maxImg;
var tmp;
var tempoTroca;
var vtempo;
var vbarra;
var pbarra;

//Abrir Slide

$('.card-slides img').click(function openSlide(){
    $('.card-slider-show').css('display', 'block');
    $('footer').css('display', 'none');
    $('.exitSlide').click(function(){
        $('.card-slider-show').css('display', 'none');
        $('footer').css('display', 'block');
    })
});


function preCarregamento(){
    var img = 1;
    for( var i = 1; i < 71; i++){
        imgs[i]= new Image();
        imgs[i].src = "../imagens/slides/biologia/folhas_e_flores/Slide"+img+".PNG";
        img++;
        
    }
}

function carregarImg(img){
    slider.style.backgroundImage = "url('"+imgs[img].src+"')";
}

function inicia(){
    preCarregamento();
    imgAtual = 1;
    maxImg = imgs.length-1;
    slider = document.getElementById("dvslider");
    vbarra = document.getElementById("dvbarra");
    carregarImg(imgAtual);
    pbarra  = 100 / maxImg;
    vtempo = pbarra * (imgAtual);
    vbarra.style.width = vtempo + "%";
    tempoTroca = 0;
}

function loadbarra(dir){
    pbarra  = 100 / maxImg;
    if( dir = 1){
        vtempo = pbarra * (imgAtual);
    }
    vbarra.style.width = vtempo + "%";
}

function troca(dir){
    tempoTroca = 0;
    imgAtual+=dir;
    if(imgAtual > maxImg){
        imgAtual = 0;
    }else if(imgAtual < 0){
        imgAtual = maxImg;
    }
    carregarImg(imgAtual);
    loadbarra(dir);
}

window.addEventListener("load", inicia);