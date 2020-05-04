var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();

setInterval(function(){
    if(hour<10){
        hour = '0' + hour;
    }
    if(hour === 24){
        hour = '00';
    }
    if(minute<10){
        minute = '0' + minute;
    }
    if(second<10){
        second = '0' + second;
    }
    if(minute ==60){
        minute = '00';
        hour++;
    }
    if (second==60){
        second = '00';
        minute++;
    }
    document.querySelector('.time').innerHTML = hour + ':' + minute + ':' + second;
    second++;
    minute= parseInt(minute)
},1000);
var month = date.getMonth();
var day = date.getDay();

if(month<10){
    month= '0' + month;
}
if(day<10){
    day = '0' + day;
}



document.querySelector('.date').innerHTML = date.getFullYear() + '-' + month + '-' + day + " " + date.toString().split(' ')[0];



