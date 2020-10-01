window.onload = ()=>{

    setInterval(function() {
        var time = document.querySelector('#time');
        var date = new Date();
        var hr = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var ms = Math.round(date.getMilliseconds()/10);

        function addzero(el){
         return el<10?('0' + el): el
        }
        
  time.innerHTML = `${addzero(hr)} : ${addzero(min)} : ${addzero(sec)} : ${addzero(ms)}`
    },10)

}
