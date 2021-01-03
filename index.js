const panel = document.querySelector('.panel');
const sw = document.querySelector('.sw');
const nw = document.querySelector('.nw');
const se = document.querySelector('.se');
const ne = document.querySelector('.ne');
let note = document.querySelector('.note');

sw.addEventListener("mouseover", () => setRotate('s','w'));
nw.addEventListener("mouseover", () => setRotate('n','w'));
se.addEventListener("mouseover", () => setRotate('s','e'));
ne.addEventListener("mouseover", () => setRotate('n','e'));

function setRotate(){
    let a = 15;
    let rY;
    let rX;
    let ns;
    let we;

    arguments[0]==='n' ? ns="North" : ns="South";
    arguments[1]==='e' ? we="east" : we="west";
    note.innerHTML = `${ns+we}`;

    arguments[0]==='n' ? rX=-a : rX=a;
    arguments[1]==='e' ? rY=-a : rY=a;
    panel.style.transform = `rotateX(${rX}deg) rotateY(${rY}deg)`;
}

sw.addEventListener("mouseout", () => resetRotate('s','w'));
nw.addEventListener("mouseout", () => resetRotate('n','w'));
se.addEventListener("mouseout", () => resetRotate('s','e'));
ne.addEventListener("mouseout", () => resetRotate('n','e'));s

function resetRotate(){
    panel.style.transform = `rotateX(0deg) rotateY(0deg)`;
    note.innerHTML = `direction?`;
}