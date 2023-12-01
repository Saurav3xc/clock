let hrs= document.getElementById("hrs");
let mins= document.getElementById("mins");
let secs= document.getElementById("secs");
let time_f=document.getElementById("time-f");
function getdate(){
    let td= new Date();
    let hr = td.getHours();
    let min= td.getMinutes();
    let sec= td.getSeconds();
    let pmam=hr>12?'PM':'AM';
    hr=hr>12?+hr-12:'0'+hr;
    min=min<10?'0'+min:min;
    sec= sec<10?'0'+sec:sec;
    hrs.innerHTML=hr + ":";
    mins.innerHTML=min + ":";
    secs.innerHTML=sec ;
   time_f.innerHTML=pmam;

}
setInterval(getdate,1000)