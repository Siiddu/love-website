// ================================
// Typewriter Effect
// ================================

const message = `ขอบคุณที่เข้ามาเป็นส่วนหนึ่งของชีวิต 💖
ทุกช่วงเวลาที่ได้คุย ได้หัวเราะ และได้อยู่ด้วยกัน
เป็นความทรงจำที่มีค่ามาก

หวังว่าเราจะมีความสุขด้วยกันไปอีกนานเลยนะ 🌸`;

const typing = document.getElementById("typing");
const openLetter = document.getElementById("openLetter");

let index = 0;

openLetter.addEventListener("click", () => {

    typing.innerHTML = "";
    index = 0;

    type();

});

function type(){

    if(index < message.length){

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(type,40);

    }

}

// ================================
// YES Button
// ================================

const yesBtn = document.getElementById("yesBtn");
const popup = document.getElementById("popup");

yesBtn.onclick = ()=>{

    popup.style.display="flex";

    heartExplosion();

}

// ================================
// Close Popup
// ================================

document.getElementById("closePopup").onclick=()=>{

    popup.style.display="none";

}

// ================================
// NO Button Run Away
// ================================

const noBtn=document.getElementById("noBtn");

noBtn.addEventListener("mouseenter",moveButton);

noBtn.addEventListener("touchstart",moveButton);

function moveButton(){

    const x=Math.random()*(window.innerWidth-120);

    const y=Math.random()*(window.innerHeight-80);

    noBtn.style.position="fixed";

    noBtn.style.left=x+"px";

    noBtn.style.top=y+"px";

}

// ================================
// Music
// ================================

const music=document.getElementById("bgm");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.onclick=()=>{

    if(!playing){

        music.play();

        musicBtn.innerHTML="⏸ หยุดเพลง";

    }else{

        music.pause();

        musicBtn.innerHTML="🎵 เปิดเพลง";

    }

    playing=!playing;

}

// ================================
// Heart Explosion
// ================================

function heartExplosion(){

    for(let i=0;i<40;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left=(window.innerWidth/2)+"px";

        heart.style.top=(window.innerHeight/2)+"px";

        heart.style.fontSize=(20+Math.random()*20)+"px";

        heart.style.pointerEvents="none";

        heart.style.transition="all 2s ease";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.left=(Math.random()*window.innerWidth)+"px";

            heart.style.top=(Math.random()*window.innerHeight)+"px";

            heart.style.opacity=0;

            heart.style.transform="scale(2) rotate(360deg)";

        },50);

        setTimeout(()=>{

            heart.remove();

        },2200);

    }

}

// ================================
// Gallery Animation
// ================================

document.querySelectorAll(".gallery img").forEach(img=>{

    img.onclick=()=>{

        img.style.transform="scale(1.2)";

        setTimeout(()=>{

            img.style.transform="scale(1)";

        },300);

    }

});
