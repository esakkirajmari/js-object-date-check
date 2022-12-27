let date =new Date();
console.log(date);

let time=date.setTime(parseInt(prompt("enter the time")));
console.log(time);

if(time>4 &&time<12){
    console.log("this is morning");
}
else if(time>=12 && time<=16){
    console.log("this is afternoon");
}
else if(time>16 && time<19){
    console.log("this is evening");
}
else{
    console.log("this is night");
}
