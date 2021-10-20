const txtElement = ['Activist', 'Database Designer', 'Student'];
let count = 0;
let txtindex = 0;
let currentxt='';
let words ='';

(function jalan(){

    if(count==txtElement.length){
        count=0;
    }

    currenttxt = txtElement[count];
    words=currenttxt.slice(0, ++txtindex);
    document.querySelector('.efek-ngetik').textContent = words;
    if(words.length == currenttxt.length){
        count++;
        txtindex = 0;
    }

    setTimeout(jalan, 500);

})();

window.addEventListener("scroll",function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY >0);
})