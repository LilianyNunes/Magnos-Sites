var balls = document.querySelector(".balls")
var quant = document.querySelectorAll(".slides .image")
var atual = 0
var imagem = document.getElementById("atual")

var next = document.getElementById("next")
var voltar = document.getElementById("voltar")
var rolar = true

/* function _0x168a(){var _0x3faa52=['451155tHQMWo','240JeKIqr','265599nAmvEb','16048076efTfWv','8kLVgbr','getElementById','82402cxdWqD','4025238wpGJfu','.slides\x20.image','querySelectorAll','1535EiUAAD','atual','21CiUJui','.balls','next','3437728CKmzmI','7956NrhMXv'];_0x168a=function(){return _0x3faa52;};return _0x168a();}var _0x3f86b9=_0xed52;function _0xed52(_0x56be4c,_0x37c0a2){var _0x168a15=_0x168a();return _0xed52=function(_0xed5236,_0x57236e){_0xed5236=_0xed5236-0x65;var _0x1aa10a=_0x168a15[_0xed5236];return _0x1aa10a;},_0xed52(_0x56be4c,_0x37c0a2);}(function(_0xcfe625,_0x250f13){var _0x450125=_0xed52,_0x3e5e7e=_0xcfe625();while(!![]){try{var _0x34ec51=-parseInt(_0x450125(0x6d))/0x1+-parseInt(_0x450125(0x73))/0x2*(parseInt(_0x450125(0x68))/0x3)+-parseInt(_0x450125(0x6c))/0x4*(parseInt(_0x450125(0x66))/0x5)+parseInt(_0x450125(0x74))/0x6+-parseInt(_0x450125(0x6b))/0x7*(-parseInt(_0x450125(0x71))/0x8)+parseInt(_0x450125(0x6f))/0x9*(-parseInt(_0x450125(0x6e))/0xa)+parseInt(_0x450125(0x70))/0xb;if(_0x34ec51===_0x250f13)break;else _0x3e5e7e['push'](_0x3e5e7e['shift']());}catch(_0x2ab9fd){_0x3e5e7e['push'](_0x3e5e7e['shift']());}}}(_0x168a,0x8950c));var balls=document['querySelector'](_0x3f86b9(0x69)),quant=document[_0x3f86b9(0x65)](_0x3f86b9(0x75)),atual=0x0,imagem=document[_0x3f86b9(0x72)](_0x3f86b9(0x67)),next=document[_0x3f86b9(0x72)](_0x3f86b9(0x6a)),voltar=document[_0x3f86b9(0x72)]('voltar'),rolar=!![];
 */

for (let i = 0; i < quant.length; i++) {
    var div = document.createElement("div")
    div.id = i
    balls.appendChild(div)
}

document.getElementById("0").classList.add("imgatual")
var pos = document.querySelectorAll(".balls div")


for (let i = 0; i < pos.length; i++) {
    pos[i].addEventListener("click", () => {
        atual = pos[i].id
        rolar = false
        slide()
    })
}

voltar.addEventListener("click", () => {
    atual--
    rolar = false
    slide()
})
next.addEventListener("click", () => {
    atual++
    rolar = false
    slide()
})

function slide() {
    if (atual >= quant.length) {
        atual = 0
    } else if (atual < 0) {
        atual = quant.length - 1
    }

    document.querySelector(".imgatual").classList.remove("imgatual")

    //começa aqui a codificação
    var largura = window.screen.width;
    if (largura < 800) {
        imagem.style.marginLeft = -100 * atual + "vw"
    } else {
        imagem.style.marginLeft = -75 * atual + "vw"
    }

    document.getElementById(atual).classList.add("imgatual")
    //termina aqui
    /* var _0x3d00b4=_0x3d78;(function(_0xeffa36,_0x43e094){var _0x5ae50f=_0x3d78,_0x5311ca=_0xeffa36();while(!![]){try{var _0x271b88=-parseInt(_0x5ae50f(0x75))/0x1*(-parseInt(_0x5ae50f(0x6c))/0x2)+parseInt(_0x5ae50f(0x67))/0x3+parseInt(_0x5ae50f(0x72))/0x4*(-parseInt(_0x5ae50f(0x6d))/0x5)+-parseInt(_0x5ae50f(0x6f))/0x6*(parseInt(_0x5ae50f(0x66))/0x7)+parseInt(_0x5ae50f(0x71))/0x8*(parseInt(_0x5ae50f(0x70))/0x9)+parseInt(_0x5ae50f(0x6b))/0xa*(-parseInt(_0x5ae50f(0x6a))/0xb)+-parseInt(_0x5ae50f(0x69))/0xc;if(_0x271b88===_0x43e094)break;else _0x5311ca['push'](_0x5311ca['shift']());}catch(_0x116154){_0x5311ca['push'](_0x5311ca['shift']());}}}(_0x9609,0xeaeaa));var largura=window[_0x3d00b4(0x65)]['width'];function _0x9609(){var _0x1bb8bd=['498pOptLF','1172853EagzgW','56apFfFv','12BlONEN','getElementById','add','7804yDQaUf','classList','screen','46627PGOzYm','2346693fvRezh','style','6888612yPVGAe','10967trcXsC','5230hZPOkJ','468mneenH','1516705VAAjVz','marginLeft'];_0x9609=function(){return _0x1bb8bd;};return _0x9609();}largura<0x320?imagem[_0x3d00b4(0x68)][_0x3d00b4(0x6e)]=-0x64*atual+'vw':imagem[_0x3d00b4(0x68)][_0x3d00b4(0x6e)]=-0x4b*atual+'vw';function _0x3d78(_0x4d407e,_0x83aa33){var _0x9609ef=_0x9609();return _0x3d78=function(_0x3d7842,_0x46f9ad){_0x3d7842=_0x3d7842-0x65;var _0x22b7c9=_0x9609ef[_0x3d7842];return _0x22b7c9;},_0x3d78(_0x4d407e,_0x83aa33);}document[_0x3d00b4(0x73)](atual)[_0x3d00b4(0x76)][_0x3d00b4(0x74)]('imgatual');
     */

}
slide()

setInterval(() => {
    if (rolar) {
        atual++

        slide()
    } else {
        rolar = true
    }
}, 7000)
/*
function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg");
}*/

$(".buton").click(function () {

    if ($(".buton").hasClass("add")) {

        //começa aqui
        setTimeout(function () {
            $(".nav").css("display", "none");
            $("#menu_p").css("display", "none");
        }, 1500);

        $(this).delay(100).animate({
            marginTop: "-1px"
        }, 850);

        setTimeout(function () {
            $(".buton").removeClass("add")
        }, 1100);

        //termina aqui
        /* function _0x1189(_0x4c6faa,_0x31e6db){var _0x2e7d5c=_0x2e7d();return _0x1189=function(_0x118986,_0x44bcae){_0x118986=_0x118986-0x140;var _0x40891b=_0x2e7d5c[_0x118986];return _0x40891b;},_0x1189(_0x4c6faa,_0x31e6db);}var _0x5861d5=_0x1189;function _0x2e7d(){var _0x51d04e=['display','-1px','97217LFAxET','90pFsZMU','.buton','1733232CYZngc','1021743ImaOdo','1739950AIVNpa','none','add','.nav','css','515044IFJlZk','235907wQmRTf','88ewmvEH','10hgehXN','7095306BZzfti','delay'];_0x2e7d=function(){return _0x51d04e;};return _0x2e7d();}(function(_0x710677,_0x1957cb){var _0x29b1af=_0x1189,_0x3f1707=_0x710677();while(!![]){try{var _0x3a371f=-parseInt(_0x29b1af(0x144))/0x1*(-parseInt(_0x29b1af(0x151))/0x2)+parseInt(_0x29b1af(0x147))/0x3+-parseInt(_0x29b1af(0x14e))/0x4+parseInt(_0x29b1af(0x149))/0x5+-parseInt(_0x29b1af(0x140))/0x6+parseInt(_0x29b1af(0x14f))/0x7*(-parseInt(_0x29b1af(0x150))/0x8)+-parseInt(_0x29b1af(0x148))/0x9*(-parseInt(_0x29b1af(0x145))/0xa);if(_0x3a371f===_0x1957cb)break;else _0x3f1707['push'](_0x3f1707['shift']());}catch(_0x230201){_0x3f1707['push'](_0x3f1707['shift']());}}}(_0x2e7d,0xb77b3),setTimeout(function(){var _0x200ae5=_0x1189;$(_0x200ae5(0x14c))[_0x200ae5(0x14d)](_0x200ae5(0x142),_0x200ae5(0x14a)),$('#menu_p')[_0x200ae5(0x14d)](_0x200ae5(0x142),_0x200ae5(0x14a));},0x5dc),$(this)[_0x5861d5(0x141)](0x64)['animate']({'marginTop':_0x5861d5(0x143)},0x352),setTimeout(function(){var _0x1261b6=_0x5861d5;$(_0x1261b6(0x146))['removeClass'](_0x1261b6(0x14b));},0x44c));
         */

        $(".nav li:nth-child(7)").delay(142.7).animate({
            width: "0vw"
        }, 169);
        $(".nav li:nth-child(7) a").delay(142.7).animate({
            opacity: "0"
        }, 169);
        $(".nav li:nth-child(6)").delay(285.4).animate({
            width: "0vw"
        }, 169);
        $(".nav li:nth-child(6) a").delay(285.4).animate({
            opacity: "0"
        }, 169);
        $(".nav li:nth-child(5)").delay(428.1).animate({
            width: "0vw"
        }, 169);
        $(".nav li:nth-child(5) a").delay(428.1).animate({
            opacity: "0"
        }, 169);
        $(".nav li:nth-child(4)").delay(570.8).animate({
            width: "0vw"
        }, 169);
        $(".nav li:nth-child(4) a").delay(570.8).animate({
            opacity: "0"
        }, 169);
        $(".nav li:nth-child(3)").delay(713.5).animate({
            width: "0vw"
        }, 169);
        $(".nav li:nth-child(3) a").delay(713.5).animate({
            opacity: "0"
        }, 169);
        $(".nav li:nth-child(2)").delay(856.2).animate({
            width: "0vw"
        }, 169);
        $(".nav li:nth-child(2) a").delay(856.2).animate({
            opacity: "0"
        }, 169);
        $(".nav li:nth-child(1)").delay(998.9).animate({
            width: "0vw"
        }, 169);
        $(".nav li:nth-child(1) a").delay(998.9).animate({
            opacity: "0"
        }, 169);

    } else {

        //começa aqui

        $(".nav").css("display", "block");
        $("#menu_p").css("display", "block");

        $(".buton").addClass("add");

        $(this).delay(200).animate({
            marginTop: "244px"
        }, 650);
        //termina aqui
        /* function _0x1529(_0x11a5bf,_0x37c103){var _0x7cb57a=_0x7cb5();return _0x1529=function(_0x152957,_0x4d29c1){_0x152957=_0x152957-0x186;var _0x59a937=_0x7cb57a[_0x152957];return _0x59a937;},_0x1529(_0x11a5bf,_0x37c103);}var _0x53e6d4=_0x1529;(function(_0x4c52a7,_0xac4b52){var _0x1be517=_0x1529,_0xc8c6e9=_0x4c52a7();while(!![]){try{var _0x3988fa=-parseInt(_0x1be517(0x18c))/0x1+parseInt(_0x1be517(0x18d))/0x2+parseInt(_0x1be517(0x191))/0x3+-parseInt(_0x1be517(0x192))/0x4+-parseInt(_0x1be517(0x18a))/0x5*(parseInt(_0x1be517(0x193))/0x6)+parseInt(_0x1be517(0x194))/0x7+-parseInt(_0x1be517(0x190))/0x8;if(_0x3988fa===_0xac4b52)break;else _0xc8c6e9['push'](_0xc8c6e9['shift']());}catch(_0x17f0b0){_0xc8c6e9['push'](_0xc8c6e9['shift']());}}}(_0x7cb5,0xba200),$(_0x53e6d4(0x187))['css'](_0x53e6d4(0x188),'block'),$(_0x53e6d4(0x18e))['css'](_0x53e6d4(0x188),'block'),$(_0x53e6d4(0x18b))[_0x53e6d4(0x189)](_0x53e6d4(0x18f)),$(this)[_0x53e6d4(0x186)](0xc8)[_0x53e6d4(0x195)]({'marginTop':'244px'},0x28a));function _0x7cb5(){var _0x5c1bce=['add','2092760GGulwG','4554600oYrKOo','4003176nrMOkz','150dKKEhX','7754481nJyYoJ','animate','delay','.nav','display','addClass','150770rTJOyI','.buton','643375qfYBTJ','1591998KMdphZ','#menu_p'];_0x7cb5=function(){return _0x5c1bce;};return _0x7cb5();} */

        $(".nav li:nth-child(1)").delay(142.7).animate({
            width: "80vw"
        }, 169);
        $(".nav li:nth-child(1) a").delay(142.7).animate({
            opacity: "1"
        }, 169);
        $(".nav li:nth-child(2)").delay(285.4).animate({
            width: "70vw"
        }, 169);
        $(".nav li:nth-child(2) a").delay(285.4).animate({
            opacity: "1"
        }, 169);
        $(".nav li:nth-child(3)").delay(428.1).animate({
            width: "60vw"
        }, 169);
        $(".nav li:nth-child(3) a").delay(428.1).animate({
            opacity: "1"
        }, 169);
        $(".nav li:nth-child(4)").delay(570.8).animate({
            width: "50vw"
        }, 169);
        $(".nav li:nth-child(4) a").delay(570.8).animate({
            opacity: "1"
        }, 169);
        $(".nav li:nth-child(5)").delay(713.5).animate({
            width: "40vw"
        }, 169);
        $(".nav li:nth-child(5) a").delay(713.5).animate({
            opacity: "1"
        }, 169);
        $(".nav li:nth-child(6)").delay(856.2).animate({
            width: "30vw"
        }, 169);
        $(".nav li:nth-child(6) a").delay(856.2).animate({
            opacity: "1"
        }, 169);
        $(".nav li:nth-child(7)").delay(998.9).animate({
            width: "20vw"
        }, 169);
        $(".nav li:nth-child(7) a").delay(998.9).animate({
            opacity: "1"
        }, 169);


    }

});

window.onscroll = function () {

    var largura = window.innerWidth;

    if (largura > 800) {

        const visor = window.pageYOffset;
        dado = document.querySelector("#menu_p");
        dado2 = document.querySelector("#sep");
        dado3 = document.querySelector(".cirone ~ span");

        //começa aqui
        var ele = 715;

        if (visor < ele) {
            dado.style.top = "730px";
            dado.style.position = "absolute";

            dado2.style.position = "absolute";
            dado2.style.top = "685px";
            dado2.style.width = "100vw";
            dado2.style.height = "70px";
            dado2.style.marginLeft = "0";

        } else {
            dado.style.position = "fixed";
            dado.style.top = "35px";

            dado2.style.position = "fixed";
            dado2.style.top = "0px";
            dado2.style.width = "100vw";
            dado2.style.height = "60px";
        }
        //termina aqui
        /* var _0x40891c=_0x4b1d;function _0x3118(){var _0x475a9b=['marginLeft','2072550Vrpnsp','height','4351991LAhOvX','35px','5408280njTLaA','top','70px','192DqemGX','absolute','width','17994465TqdYbo','1607468tVuhMF','685px','100vw','position','style','1636WRcIBI','781510MfLldL','6cDWKQe'];_0x3118=function(){return _0x475a9b;};return _0x3118();}function _0x4b1d(_0x2a289b,_0x464032){var _0x3118f5=_0x3118();return _0x4b1d=function(_0x4b1da6,_0x596f7d){_0x4b1da6=_0x4b1da6-0x99;var _0x37e650=_0x3118f5[_0x4b1da6];return _0x37e650;},_0x4b1d(_0x2a289b,_0x464032);}(function(_0x283d5c,_0x30f678){var _0x452d0=_0x4b1d,_0x13cc37=_0x283d5c();while(!![]){try{var _0x3b7489=parseInt(_0x452d0(0xac))/0x1*(parseInt(_0x452d0(0xa1))/0x2)+-parseInt(_0x452d0(0xa5))/0x3+parseInt(_0x452d0(0x9c))/0x4+parseInt(_0x452d0(0xa2))/0x5*(-parseInt(_0x452d0(0xa3))/0x6)+-parseInt(_0x452d0(0xa7))/0x7+-parseInt(_0x452d0(0xa9))/0x8+parseInt(_0x452d0(0x9b))/0x9;if(_0x3b7489===_0x30f678)break;else _0x13cc37['push'](_0x13cc37['shift']());}catch(_0x184607){_0x13cc37['push'](_0x13cc37['shift']());}}}(_0x3118,0x64ee0));var ele=0x2cb;visor<ele?(dado[_0x40891c(0xa0)]['top']='730px',dado['style'][_0x40891c(0x9f)]=_0x40891c(0x99),dado2[_0x40891c(0xa0)][_0x40891c(0x9f)]=_0x40891c(0x99),dado2[_0x40891c(0xa0)][_0x40891c(0xaa)]=_0x40891c(0x9d),dado2[_0x40891c(0xa0)][_0x40891c(0x9a)]='100vw',dado2[_0x40891c(0xa0)][_0x40891c(0xa6)]=_0x40891c(0xab),dado2[_0x40891c(0xa0)][_0x40891c(0xa4)]='0'):(dado[_0x40891c(0xa0)][_0x40891c(0x9f)]='fixed',dado[_0x40891c(0xa0)]['top']=_0x40891c(0xa8),dado2[_0x40891c(0xa0)][_0x40891c(0x9f)]='fixed',dado2[_0x40891c(0xa0)][_0x40891c(0xaa)]='0px',dado2[_0x40891c(0xa0)][_0x40891c(0x9a)]=_0x40891c(0x9e),dado2['style'][_0x40891c(0xa6)]='60px');
         */

    }
}

debounce = function (func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout - null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

(function () {

    //começa aqui
    var number = 0;
    var target = $('#fig > div, #fig > span');
    var offset = $(window).height();
    var animationc = "animestart";
    var graph = $(".graph").offset().top;
    //termina aqui
    /* function _0x282c(){var _0x402a8c=['84RCHncN','animestart','39979pmFxAy','65EZXGNU','4339224jwHzTs','#fig\x20>\x20div,\x20#fig\x20>\x20span','2034267KQJWsB','28SJCorQ','580535rpDTwc','offset','261YDRePx','1639808wuzxGs','14rToAwT','345250qKbStC','4ATPTiv','height','15953685VXWVnB','top'];_0x282c=function(){return _0x402a8c;};return _0x282c();}var _0x28fc15=_0x5888;(function(_0x3e1ffa,_0xfde58){var _0x35930d=_0x5888,_0x1c8e8d=_0x3e1ffa();while(!![]){try{var _0x3a0270=-parseInt(_0x35930d(0xa0))/0x1*(parseInt(_0x35930d(0x98))/0x2)+parseInt(_0x35930d(0xa4))/0x3*(-parseInt(_0x35930d(0x9a))/0x4)+-parseInt(_0x35930d(0xa6))/0x5*(-parseInt(_0x35930d(0x9e))/0x6)+-parseInt(_0x35930d(0xa5))/0x7*(-parseInt(_0x35930d(0xa9))/0x8)+-parseInt(_0x35930d(0xa8))/0x9*(parseInt(_0x35930d(0x99))/0xa)+-parseInt(_0x35930d(0x9c))/0xb+parseInt(_0x35930d(0xa2))/0xc*(parseInt(_0x35930d(0xa1))/0xd);if(_0x3a0270===_0xfde58)break;else _0x1c8e8d['push'](_0x1c8e8d['shift']());}catch(_0x84e3f5){_0x1c8e8d['push'](_0x1c8e8d['shift']());}}}(_0x282c,0xce086));function _0x5888(_0x146b0c,_0x3bdb2e){var _0x282c0c=_0x282c();return _0x5888=function(_0x58888b,_0x1a5da3){_0x58888b=_0x58888b-0x98;var _0x58401c=_0x282c0c[_0x58888b];return _0x58401c;},_0x5888(_0x146b0c,_0x3bdb2e);}var number=0x0,target=$(_0x28fc15(0xa3)),offset=$(window)[_0x28fc15(0x9b)](),animationc=_0x28fc15(0x9f),graph=$('.graph')[_0x28fc15(0xa7)]()[_0x28fc15(0x9d)];
     */

    //começa aqui 

    function animeScroll() {
        var documentTop = $(document).scrollTop();

        if (documentTop > graph - offset) {
            $(".graph").addClass("graphh");

        } else {
            $(".graph").removeClass("graphh");

        }

        target.each(function () {
            var itenTop = $(this).offset().top;
            if (documentTop > itenTop - offset) {

                $(this).addClass(animationc);
                $(this).removeClass("rotanime");

            } else {
                number = 0;
                $(this).removeClass(animationc);
                $(this).addClass("rotanime");

            };
        });

        var itenTop = $(".kk").offset().top;
        if (documentTop > itenTop - offset) {

            $(".kk").addClass("nntrans");

        } else {
            $(".kk").removeClass("nntrans");
        }

        var wid = $("#sobre_nos").offset().top;
        if (documentTop > wid - offset) {
            $("#sobre_nos").addClass("gir");
            $(".pp").css("color", "black");
        } else {
            $("#sobre_nos").removeClass("gir");
            $(".pp").css("color", "white")
        }

        var an = $("#tex").offset().top;
        if (documentTop > an - offset) {
            $("#tex").css("transform", "rotateX(0deg)");
        } else {
            $("#tex").css("transform", "rotateX(90deg)");
        }

        var tem = $(".p_text").offset().top;
        if (documentTop > tem - offset) {
            $(".p_text").css("transform", "rotateY(0deg)");
            $(".img_text img").css("transform", "rotateX(0deg)");
        } else {
            $(".p_text").css("transform", "rotateY(90deg)");
            $(".img_text img").css("transform", "rotateX(90deg)");
        }

        var teximg = $("#tt").offset().top;
        if (documentTop > teximg - offset) {
            $("#tt").css("marginLeft", "0");
        } else {
            $("#tt").css("marginLeft", "-900px");
        }

    };

    //termina aqui
     /* var _0x9eab=["\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70","\x67\x72\x61\x70\x68\x68","\x61\x64\x64\x43\x6C\x61\x73\x73","\x2E\x67\x72\x61\x70\x68","\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73","\x74\x6F\x70","\x6F\x66\x66\x73\x65\x74","\x72\x6F\x74\x61\x6E\x69\x6D\x65","\x65\x61\x63\x68","\x2E\x6B\x6B","\x6E\x6E\x74\x72\x61\x6E\x73","\x23\x73\x6F\x62\x72\x65\x5F\x6E\x6F\x73","\x67\x69\x72","\x63\x6F\x6C\x6F\x72","\x62\x6C\x61\x63\x6B","\x63\x73\x73","\x2E\x70\x70","\x77\x68\x69\x74\x65","\x23\x74\x65\x78","\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D","\x72\x6F\x74\x61\x74\x65\x58\x28\x30\x64\x65\x67\x29","\x72\x6F\x74\x61\x74\x65\x58\x28\x39\x30\x64\x65\x67\x29","\x2E\x70\x5F\x74\x65\x78\x74","\x72\x6F\x74\x61\x74\x65\x59\x28\x30\x64\x65\x67\x29","\x2E\x69\x6D\x67\x5F\x74\x65\x78\x74\x20\x69\x6D\x67","\x72\x6F\x74\x61\x74\x65\x59\x28\x39\x30\x64\x65\x67\x29"];function animeScroll(){var _0xc7ecx2=$(document)[_0x9eab[0]]();if(_0xc7ecx2> graph- offset){$(_0x9eab[3])[_0x9eab[2]](_0x9eab[1])}else {$(_0x9eab[3])[_0x9eab[4]](_0x9eab[1])};target[_0x9eab[8]](function(){var _0xc7ecx3=$(this)[_0x9eab[6]]()[_0x9eab[5]];if(_0xc7ecx2> _0xc7ecx3- offset){$(this)[_0x9eab[2]](animationc);$(this)[_0x9eab[4]](_0x9eab[7])}else {number= 0;$(this)[_0x9eab[4]](animationc);$(this)[_0x9eab[2]](_0x9eab[7])}});var _0xc7ecx3=$(_0x9eab[9])[_0x9eab[6]]()[_0x9eab[5]];if(_0xc7ecx2> _0xc7ecx3- offset){$(_0x9eab[9])[_0x9eab[2]](_0x9eab[10])}else {$(_0x9eab[9])[_0x9eab[4]](_0x9eab[10])};var _0xc7ecx4=$(_0x9eab[11])[_0x9eab[6]]()[_0x9eab[5]];if(_0xc7ecx2> _0xc7ecx4- offset){$(_0x9eab[11])[_0x9eab[2]](_0x9eab[12]);$(_0x9eab[16])[_0x9eab[15]](_0x9eab[13],_0x9eab[14])}else {$(_0x9eab[11])[_0x9eab[4]](_0x9eab[12]);$(_0x9eab[16])[_0x9eab[15]](_0x9eab[13],_0x9eab[17])};var _0xc7ecx5=$(_0x9eab[18])[_0x9eab[6]]()[_0x9eab[5]];if(_0xc7ecx2> _0xc7ecx5- offset){$(_0x9eab[18])[_0x9eab[15]](_0x9eab[19],_0x9eab[20])}else {$(_0x9eab[18])[_0x9eab[15]](_0x9eab[19],_0x9eab[21])};var _0xc7ecx6=$(_0x9eab[22])[_0x9eab[6]]()[_0x9eab[5]];if(_0xc7ecx2> _0xc7ecx6- offset){$(_0x9eab[22])[_0x9eab[15]](_0x9eab[19],_0x9eab[23]);$(_0x9eab[24])[_0x9eab[15]](_0x9eab[19],_0x9eab[20])}else {$(_0x9eab[22])[_0x9eab[15]](_0x9eab[19],_0x9eab[25]);$(_0x9eab[24])[_0x9eab[15]](_0x9eab[19],_0x9eab[21])}}
     */

    //começ aqui
    animeScroll();

    $(document).scroll(debounce(function () {
        animeScroll();
    }, 200));
    //termina aqui
    /* var _0x5bde54=_0x16d6;function _0x16d6(_0x43208d,_0x37687f){var _0x298409=_0x2984();return _0x16d6=function(_0x16d636,_0x3def35){_0x16d636=_0x16d636-0x1be;var _0x62dcc8=_0x298409[_0x16d636];return _0x62dcc8;},_0x16d6(_0x43208d,_0x37687f);}function _0x2984(){var _0x8e4088=['2195064kRhlaN','scroll','5455475EoIlsA','686798kqtkdS','784038AShfZW','80apXBBt','713586fAuurq','1220226rIgLnK','827732JGYBal','3iUjpsO'];_0x2984=function(){return _0x8e4088;};return _0x2984();}(function(_0x310f09,_0x3e6746){var _0x567efb=_0x16d6,_0x52dcad=_0x310f09();while(!![]){try{var _0x236484=parseInt(_0x567efb(0x1c1))/0x1+-parseInt(_0x567efb(0x1c4))/0x2+-parseInt(_0x567efb(0x1c6))/0x3*(-parseInt(_0x567efb(0x1c5))/0x4)+parseInt(_0x567efb(0x1bf))/0x5+-parseInt(_0x567efb(0x1c3))/0x6+parseInt(_0x567efb(0x1c0))/0x7*(-parseInt(_0x567efb(0x1c2))/0x8)+parseInt(_0x567efb(0x1c7))/0x9;if(_0x236484===_0x3e6746)break;else _0x52dcad['push'](_0x52dcad['shift']());}catch(_0x515671){_0x52dcad['push'](_0x52dcad['shift']());}}}(_0x2984,0x96562),animeScroll(),$(document)[_0x5bde54(0x1be)](debounce(function(){animeScroll();},0xc8)));
     */
}());

$(".pontoo:nth-child(1)").mouseenter(function () {

    $(".ponto:nth-child(1)").addClass("ponto1");
    $(".ponto:nth-child(1) p").delay(500).animate({
        opacity: "1"
    });
    $(".pontos:nth-child(1)").css("background", "rgb(52, 208, 255)");

});

$(".pontoo:nth-child(1)").mouseleave(function () {

    $(".ponto:nth-child(1)").removeClass("ponto1");
    $(".ponto:nth-child(1) p").delay(500).animate({
        opacity: "0"
    });
    $(".pontos:nth-child(1)").css("background", "linear-gradient(45deg, rgb(29, 240, 255) 0%, rgb(0, 195, 255) 30%,rgb(0, 84, 149)  100%)");

});

$(".pontoo:nth-child(2)").mouseenter(function () {

    $(".ponto:nth-child(2)").addClass("ponto1");
    $(".ponto:nth-child(2) p").delay(500).animate({
        opacity: "1"
    });
    $(".pontos:nth-child(2)").css("background", "rgb(52, 208, 255)");


});

$(".pontoo:nth-child(2)").mouseleave(function () {

    $(".ponto:nth-child(2)").removeClass("ponto1");
    $(".ponto:nth-child(2) p").delay(500).animate({
        opacity: "0"
    });
    $(".pontos:nth-child(2)").css("background", "linear-gradient(45deg, rgb(29, 240, 255) 0%, rgb(0, 195, 255) 30%,rgb(0, 84, 149)  100%)");

});

$(".pontoo:nth-child(3)").mouseenter(function () {

    $(".ponto:nth-child(3)").addClass("ponto1");
    $(".ponto:nth-child(3) p").delay(500).animate({
        opacity: "1"
    });
    $(".pontos:nth-child(3)").css("background", "rgb(52, 208, 255)");


});

$(".pontoo:nth-child(3)").mouseleave(function () {

    $(".ponto:nth-child(3)").removeClass("ponto1");
    $(".ponto:nth-child(3) p").delay(500).animate({
        opacity: "0"
    });
    $(".pontos:nth-child(3)").css("background", "linear-gradient(45deg, rgb(29, 240, 255) 0%, rgb(0, 195, 255) 30%,rgb(0, 84, 149)  100%)");


});

$(".pontoo:nth-child(4)").mouseenter(function () {

    $(".ponto:nth-child(4)").addClass("ponto1");
    $(".ponto:nth-child(4) p").delay(500).animate({
        opacity: "1"
    });
    $(".pontos:nth-child(4)").css("background", "rgb(52, 208, 255)");


});

$(".pontoo:nth-child(4)").mouseleave(function () {

    $(".ponto:nth-child(4)").removeClass("ponto1");
    $(".ponto:nth-child(4) p").delay(500).animate({
        opacity: "0"
    });
    $(".pontos:nth-child(4)").css("background", "linear-gradient(45deg, rgb(29, 240, 255) 0%, rgb(0, 195, 255) 30%,rgb(0, 84, 149)  100%)");


});

$(".pontoo:nth-child(5)").mouseenter(function () {

    $(".ponto:nth-child(5)").addClass("ponto1");
    $(".ponto:nth-child(5) p").delay(500).animate({
        opacity: "1"
    });
    $(".pontos:nth-child(5)").css("background", "rgb(52, 208, 255)");


});

$(".pontoo:nth-child(5)").mouseleave(function () {

    $(".ponto:nth-child(5)").removeClass("ponto1");
    $(".ponto:nth-child(5) p").delay(500).animate({
        opacity: "0"
    });
    $(".pontos:nth-child(5)").css("background", "linear-gradient(45deg, rgb(29, 240, 255) 0%, rgb(0, 195, 255) 30%,rgb(0, 84, 149)  100%)");


});

$(".pontoo:nth-child(6)").mouseenter(function () {

    $(".ponto:nth-child(6)").addClass("ponto1");
    $(".ponto:nth-child(6) p").delay(500).animate({
        opacity: "1"
    });
    $(".pontos:nth-child(6)").css("background", "rgb(52, 208, 255)");


});

$(".pontoo:nth-child(6)").mouseleave(function () {

    $(".ponto:nth-child(6)").removeClass("ponto1");
    $(".ponto:nth-child(6) p").delay(500).animate({
        opacity: "0"
    });
    $(".pontos:nth-child(6)").css("background", "linear-gradient(45deg, rgb(29, 240, 255) 0%, rgb(0, 195, 255) 30%,rgb(0, 84, 149)  100%)");


});

$(".resposta").slideUp();

$(".duvida1").click(function () {

    if ($(".resposta").hasClass("att")) {
        $(".resposta").removeClass("att");
        $(".resposta").slideUp();
    }
    $(".duvida1 > .resposta").addClass("att");
    $(".duvida1 > .resposta").slideDown();


});

$(".duvida2").click(function () {

    if ($(".resposta").hasClass("att")) {
        $(".resposta").removeClass("att");
        $(".resposta").slideUp();
    }
    $(".duvida2 > .resposta").addClass("att");
    $(".duvida2 > .resposta").slideDown();


});

$(".duvida3").click(function () {

    if ($(".resposta").hasClass("att")) {
        $(".resposta").removeClass("att");
        $(".resposta").slideUp();
    }
    $(".duvida3 > .resposta").addClass("att");
    $(".duvida3 > .resposta").slideDown();


});

$(".duvida4").click(function () {

    if ($(".resposta").hasClass("att")) {
        $(".resposta").removeClass("att");
        $(".resposta").slideUp();
    }
    $(".duvida4 > .resposta").addClass("att");
    $(".duvida4 > .resposta").slideDown();

});

$(".duvida5").click(function () {

    if ($(".resposta").hasClass("att")) {
        $(".resposta").removeClass("att");
        $(".resposta").slideUp();
    }
    $(".duvida5 > .resposta").addClass("att");
    $(".duvida5 > .resposta").slideDown();

});

$(".conttt").mouseenter(function(){
    $(this).css("background", "#00c8ff")
    $(".conttt > a").animate({
        marginLeft: "100px"
    })
    $(".conttt > a").css("color", "white")
    $(".tris").animate({
        marginLeft: "250px"
    })
    $(".tris").css("backgroundColor", "white")
})

$(".conttt").mouseleave(function(){
    $(this).css("background", "white")
    $(".conttt > a").animate({
        marginLeft: "30px"
    })
    $(".conttt > a").css("color", "black")
    $(".tris").animate({
        marginLeft: "180px"
    })
    $(".tris").css("backgroundColor", "#00d9ff")
})

//começa aqui

$(".func").each(function(){
    $(this).mouseenter(function(){
        
    $(this).addClass("mud")
    })
    $(this).mouseleave(function(){
        $(this).removeClass("mud")
    })
})

//termina aqui
// function _0x23bc(_0x557bf0,_0x118d88){var _0x314f3d=_0x314f();return _0x23bc=function(_0x23bc74,_0xb12822){_0x23bc74=_0x23bc74-0x17f;var _0x2b049f=_0x314f3d[_0x23bc74];return _0x2b049f;},_0x23bc(_0x557bf0,_0x118d88);}function _0x314f(){var _0x2755f9=['70ZDOVuM','27LXOtEj','mouseenter','mud','.func','24705350NiLYfm','569079ytuQQm','2016296KwayKx','4589VWTUjb','5NNvYVa','3010878TQkNnV','addClass','2166477wbgaBi','2648456FMhXKy','each'];_0x314f=function(){return _0x2755f9;};return _0x314f();}var _0x31d8ea=_0x23bc;(function(_0x477a08,_0x27bb6a){var _0x129dd6=_0x23bc,_0x67ccc6=_0x477a08();while(!![]){try{var _0x5e70ec=-parseInt(_0x129dd6(0x186))/0x1*(-parseInt(_0x129dd6(0x18d))/0x2)+parseInt(_0x129dd6(0x18a))/0x3+parseInt(_0x129dd6(0x18b))/0x4*(parseInt(_0x129dd6(0x187))/0x5)+parseInt(_0x129dd6(0x188))/0x6+parseInt(_0x129dd6(0x184))/0x7+-parseInt(_0x129dd6(0x185))/0x8*(-parseInt(_0x129dd6(0x17f))/0x9)+-parseInt(_0x129dd6(0x183))/0xa;if(_0x5e70ec===_0x27bb6a)break;else _0x67ccc6['push'](_0x67ccc6['shift']());}catch(_0x5ba08d){_0x67ccc6['push'](_0x67ccc6['shift']());}}}(_0x314f,0x64f86),$(_0x31d8ea(0x182))[_0x31d8ea(0x18c)](function(){var _0x41635c=_0x31d8ea;$(this)[_0x41635c(0x180)](function(){var _0x31b324=_0x41635c;$(this)[_0x31b324(0x189)](_0x31b324(0x181));}),$(this)['mouseleave'](function(){var _0x1d72d2=_0x41635c;$(this)['removeClass'](_0x1d72d2(0x181));});}));
$(function () {
    const token = "IGQVJXeXVlWFJQblFFVU1ZAQVhYeHAxNUNQRnJ4T1N5aEd0cUFVb2pNeEw0MEs3QXlhcnNNcFpGV1g1YXZApeUI4aEh6dzd3T1JPT002MldKSklaVHdja05ZASTNza2NYWElzOWlwOUpXVnplNWdGdEctTwZDZD";
    const url = "https://graph.instagram.com/me/media?access_token=" + token + "&fields=media_url,media_type,caption,permalink";

    $.get(url).then(function (response) {
        let images = response.data;
        let conteudo = "<div class='estilo_insta'>";

        //começa aqui
        for (let i = 0; i < 5; i++) {
            let feed = images[i];
            let titulo = feed.caption !== null ? feed.caption : "";
            let tipo = feed.media_type;
            if (tipo === "VIDEO") {

                conteudo += '<div class="vid_insta"><video poster="img/capavideo.png" controls><source src = "' + feed.media_url + '" type = "video/mp4" onclick="window.open(\'' + feed.permalink + '\');"></video></div>';

            } else if (tipo === "IMAGE" || "CAROUSEL_ALBUM") {
                conteudo += '<div class="img_insta"><img title = "' + titulo + '" alt = "' + titulo + '" src = "' + feed.media_url + '" onclick="window.open(\'' + feed.permalink + '\');"></div>';
            }

        }
        //termina aqui
        /* var _0xe00d=["\x63\x61\x70\x74\x69\x6F\x6E","","\x6D\x65\x64\x69\x61\x5F\x74\x79\x70\x65","\x56\x49\x44\x45\x4F","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x76\x69\x64\x5F\x69\x6E\x73\x74\x61\x22\x3E\x3C\x76\x69\x64\x65\x6F\x20\x70\x6F\x73\x74\x65\x72\x3D\x22\x69\x6D\x67\x2F\x63\x61\x70\x61\x76\x69\x64\x65\x6F\x2E\x70\x6E\x67\x22\x20\x63\x6F\x6E\x74\x72\x6F\x6C\x73\x3E\x3C\x73\x6F\x75\x72\x63\x65\x20\x73\x72\x63\x20\x3D\x20\x22","\x6D\x65\x64\x69\x61\x5F\x75\x72\x6C","\x22\x20\x74\x79\x70\x65\x20\x3D\x20\x22\x76\x69\x64\x65\x6F\x2F\x6D\x70\x34\x22\x20\x6F\x6E\x63\x6C\x69\x63\x6B\x3D\x22\x77\x69\x6E\x64\x6F\x77\x2E\x6F\x70\x65\x6E\x28\x27","\x70\x65\x72\x6D\x61\x6C\x69\x6E\x6B","\x27\x29\x3B\x22\x3E\x3C\x2F\x76\x69\x64\x65\x6F\x3E\x3C\x2F\x64\x69\x76\x3E","\x49\x4D\x41\x47\x45","\x43\x41\x52\x4F\x55\x53\x45\x4C\x5F\x41\x4C\x42\x55\x4D","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x69\x6D\x67\x5F\x69\x6E\x73\x74\x61\x22\x3E\x3C\x69\x6D\x67\x20\x74\x69\x74\x6C\x65\x20\x3D\x20\x22","\x22\x20\x61\x6C\x74\x20\x3D\x20\x22","\x22\x20\x73\x72\x63\x20\x3D\x20\x22","\x22\x20\x6F\x6E\x63\x6C\x69\x63\x6B\x3D\x22\x77\x69\x6E\x64\x6F\x77\x2E\x6F\x70\x65\x6E\x28\x27","\x27\x29\x3B\x22\x3E\x3C\x2F\x64\x69\x76\x3E"];for(let i=0;i< 5;i++){let feed=images[i];let titulo=feed[_0xe00d[0]]!== null?feed[_0xe00d[0]]:_0xe00d[1];let tipo=feed[_0xe00d[2]];if(tipo=== _0xe00d[3]){conteudo+= _0xe00d[4]+ feed[_0xe00d[5]]+ _0xe00d[6]+ feed[_0xe00d[7]]+ _0xe00d[8]}else {if(tipo=== _0xe00d[9]|| _0xe00d[10]){conteudo+= _0xe00d[11]+ titulo+ _0xe00d[12]+ titulo+ _0xe00d[13]+ feed[_0xe00d[5]]+ _0xe00d[14]+ feed[_0xe00d[7]]+ _0xe00d[15]}}}
         */

        //começa aqui
        conteudo += "<a href='https://www.instagram.com/magnossites/'><div class='insta'><img src='img/instagram.png'></div></a></div>";
        $("#insta").html(conteudo);
        //termina aqui
        /* function _0x2196(){var _0x171928=['6388OBkmCg','161hHDTwO','2161656jddjaw','10oZupuT','44mgQqzs','28136dBbAsg','463915WDROMY','4375080bHwRcq','23889FVADkB','#insta','24VBuArb','103YWTbiB','1374428KTweWK','html'];_0x2196=function(){return _0x171928;};return _0x2196();}var _0x142dce=_0x1d10;function _0x1d10(_0x2d9e79,_0x2ae954){var _0x219685=_0x2196();return _0x1d10=function(_0x1d1091,_0x47b1dd){_0x1d1091=_0x1d1091-0xa4;var _0x2e5b21=_0x219685[_0x1d1091];return _0x2e5b21;},_0x1d10(_0x2d9e79,_0x2ae954);}(function(_0x1b2535,_0x814a0c){var _0x408b42=_0x1d10,_0x48f2d0=_0x1b2535();while(!![]){try{var _0x33a169=-parseInt(_0x408b42(0xa6))/0x1*(-parseInt(_0x408b42(0xa9))/0x2)+parseInt(_0x408b42(0xb1))/0x3*(parseInt(_0x408b42(0xad))/0x4)+parseInt(_0x408b42(0xaf))/0x5*(parseInt(_0x408b42(0xa5))/0x6)+-parseInt(_0x408b42(0xaa))/0x7*(parseInt(_0x408b42(0xae))/0x8)+-parseInt(_0x408b42(0xab))/0x9+parseInt(_0x408b42(0xac))/0xa*(parseInt(_0x408b42(0xa7))/0xb)+-parseInt(_0x408b42(0xb0))/0xc;if(_0x33a169===_0x814a0c)break;else _0x48f2d0['push'](_0x48f2d0['shift']());}catch(_0x506218){_0x48f2d0['push'](_0x48f2d0['shift']());}}}(_0x2196,0x376ae),conteudo+='<a\x20href=\x27https://www.instagram.com/magnossites/\x27><div\x20class=\x27insta\x27><img\x20src=\x27img/instagram.png\x27></div></a></div>',$(_0x142dce(0xa4))[_0x142dce(0xa8)](conteudo));
         */
    })

})

var nulo = "<span><p>Preencha este campo</p></span>";
$('input').keyup(function(){

    var text = $(this).val();
    
    if(text != ""){
        $(this).css("border", "2px solid blue");
    }else{
        $(this).css("border", "2px solid  rgb(0, 179, 255)");
    }
});


/*
if ($("#nome") != "") {
    $("#nome").css("backgroundColor", "red")
} else {

    $("#nome").css("backgroundColor", "green")
}*/