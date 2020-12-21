(function(){
    var updateClock=function(){
        var date=new Date();
        //date
        var day=date.getDate();
        var month=date.getMonth()+1;
        var year=date.getFullYear();

        document.getElementById("month").innerHTML=month;
        document.getElementById("day").innerHTML=day;
        document.getElementById("year").innerHTML=year;

        //clock

        var hours=date.getHours();
        var minute=date.getMinutes();
        var second=date.getSeconds();
        if(second <10){
            second="0"+second;
        }
        document.getElementById("hour").innerHTML=hours;
        document.getElementById("min").innerHTML=minute;
        document.getElementById("sec").innerHTML=second;

    }
    updateClock();
    var inter = setInterval(updateClock,1000);
})();