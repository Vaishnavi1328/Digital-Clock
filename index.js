
setInterval(() => {
    let date = new Date(); 
    if(date.getHours() >= 12){
        const time = document.getElementById('ampm');
        time.innerHTML='PM';
    }
    else{
        const time = document.getElementById('ampm');
        time.innerHTML='PM';
    }

    document.getElementById('sec').innerHTML = Number(date.getSeconds());
    document.getElementById('min').innerHTML = Number(date.getMinutes());
    document.getElementById('hour').innerHTML = Number(date.getHours());
} ,1000 )

/*
let date = new Date(); 

const sec = document.getElementById('sec');
const min = document.getElementById('min');
const hour = document.getElementById('hour');

sec.innerHTML = date.getSeconds();
min.innerHTML = date.getMinutes();
hour.innerHTML = date.getHours();

let n1 = date.getSeconds()

if(date.getHours() >= 12){
    const time = document.getElementById('ampm');
    time.innerHTML='PM';
}
else{
    const time = document.getElementById('ampm');
    time.innerHTML='PM';
}

setInterval(() => {
    const sec = document.getElementById('sec');
    let n = Number(sec.innerHTML);
    if(n===59){
        sec.innerHTML = "00";
        n=0;
    }
    else
        sec.innerHTML = n+1;
}, 1000);

setInterval(() => {
    const sec = document.getElementById('min');
    let n = Number(sec.innerHTML);
    if(n===59)
    {
        min.innerHTML = "00";
        n=0;
    }
    else
    min.innerHTML = n+1;
}, 60000-(n1*600));

setInterval(() => {
    const sec = document.getElementById('hour');
    let n = Number(sec.innerHTML);
    if(n===23)
    {
        hour.innerHTML = "00";
        const time = document.getElementById('ampm');
    if(time.innerHTML==='AM')
        time.innerHTML='PM';
    else
        time.innerHTML='AM';
        n=0;
    }
    hour.innerHTML = n+1;
}, 7200000);
*/
