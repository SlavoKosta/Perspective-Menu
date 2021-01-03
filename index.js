const panel = document.querySelector('.panel');
const sw = document.querySelector('.sw');
const nw = document.querySelector('.nw');
const se = document.querySelector('.se');
const ne = document.querySelector('.ne');

const s= document.querySelector('.s');
const n = document.querySelector('.n');
const e = document.querySelector('.e');
const w = document.querySelector('.w');
const center = document.querySelector('.center');

let note = document.querySelector('.note');

sw.addEventListener("mouseover", () => setRotate('s','w'));
nw.addEventListener("mouseover", () => setRotate('n','w'));
se.addEventListener("mouseover", () => setRotate('s','e'));
ne.addEventListener("mouseover", () => setRotate('n','e'));

s.addEventListener("mouseover", () => setRotate('s',''));
n.addEventListener("mouseover", () => setRotate('n',''));
e.addEventListener("mouseover", () => setRotate('','e'));
w.addEventListener("mouseover", () => setRotate('','w'));

center.addEventListener("mouseover", () => resetRotate());

function setRotate(){
    let a = 15;
    let rY;
    let rX;
    let ns;
    let we;

    arguments[0]==='n' ? ns="North" : ns="South";
    arguments[1]==='e' ? we="east" : we="west";
    
    if(arguments[0]===''){
        ns='';
        arguments[1]==='e' ? we="East" : we="West";
    }  

    if(arguments[1]===''){
        we='';
    }

    note.innerHTML = `${ns+we}`;

    arguments[0]==='n' ? rX=-a : rX=a;
    arguments[1]==='e' ? rY=-a : rY=a;

    arguments[0]==='' ? rX=0 : rX=rX; 
    arguments[1]==='' ? rY=0 : rY=rY;

    panel.style.transform = `rotateX(${rX}deg) rotateY(${rY}deg)`;
}

sw.addEventListener("mouseout", () => resetRotate());
nw.addEventListener("mouseout", () => resetRotate());
se.addEventListener("mouseout", () => resetRotate());
ne.addEventListener("mouseout", () => resetRotate());

s.addEventListener("mouseout", () => resetRotate());
n.addEventListener("mouseout", () => resetRotate());
e.addEventListener("mouseout", () => resetRotate());
w.addEventListener("mouseout", () => resetRotate());

function resetRotate(){
    panel.style.transform = `rotateX(0deg) rotateY(0deg)`;
    note.innerHTML = `direction?`;
}