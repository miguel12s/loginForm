const navlist=document.getElementById('list')
const btn=document.getElementsByClassName('btn')
for (let index = 0; index < btn.length; index++) {
    btn[index].addEventListener('click',function(){

        let current=document.getElementsByClassName('active')
        console.log(current);
        current[0].className=current[0].className.replace(' active')
        this.className+=' active'
    })}
    

