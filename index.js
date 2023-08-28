
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
} ,500 )

