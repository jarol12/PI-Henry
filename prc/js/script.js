
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   /* const imagenes = ['img/1.png','https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80','img/3.jpg','img/1.png','https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80','img/3.jpg','img/1.png','https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80','img/3.jpg']

    let i = 0
    const img1 = document.querySelector('#img1')
    const img2 = document.querySelector('#img2')
    img1.src = imagenes[0]
    const slideshow = ()=>{
    if(i === imagenes.length){
        i = 0
    }else{
        img2.src = imagenes[i]
        img2.classList.add('active')
        i++
    setTimeout(() => {
        img1.src = img2.src
        img2.classList.remove('active')
    },1000 )
   }
}
setInterval(slideshow,4000)

 /*   function call(){
    if(i===imagenes.length){
        i=0
    }else{
    console.log(imagenes[i]);
    img1.src = imagenes[i]
    i+=1
}
}

setInterval(call,1000)*/