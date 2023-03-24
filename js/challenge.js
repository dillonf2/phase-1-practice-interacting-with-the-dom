let i=0
let likeCounter=0
plusButton= document.querySelector(`#plus`)
minusButton= document.querySelector(`#minus`)
counterButton=document.querySelector(`#counter`)
likeButton=document.querySelector(`#heart`)
pauseButton=document.querySelector(`#pause`)

intervalVar= document.addEventListener(`DOMContentLoaded`,()=>{
    
    setInterval(()=>{
        i+=1
        counterButton.innerText=i
    }, 1000)
    
})

plusButton.addEventListener(`click`, ()=>{
    i++
    counterButton.innerText=i
})
minusButton.addEventListener(`click`, ()=>{
    i--
    counterButton.innerText=i
})

pauseButton.addEventListener(`click`, ()=>{
    clearInterval(i)
    
})

likeButton.addEventListener(`click`, ()=>{
    document.createElement(`li`)
    likeCounter++
    listItems= document.querySelector(`li`).innerText=`Number ${i} has ${likeCounter} likes!`
    document.querySelector(`.likes`).append(listItems)
    
})



