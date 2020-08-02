window.onload = ()=>{

    setInterval(function() {
        var time = document.querySelector('#time');
        var date = new Date();
        var hr = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var ms = Math.round(date.getMilliseconds()/10);
        if(hr < 10){
            hr = '0'+hr
        }

        if(min < 10){
            min = '0'+min
        }

        if(sec < 10){
            sec = '0'+sec
        }

        if(ms < 10){
            ms = '0'+ms;
        }
        time.innerHTML = hr+' : '+min+' : '+sec + ' : ' + ms;
    },10)

}