

const emojiContainer = document.getElementById("emoji-container")
const pushBtn = document.getElementById("push-btn")
const emojiInput = document.getElementById("emoji-input")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const myEmojis = ["👨‍💻", "⛷", "🍲"]
// let myEmojis= []


function render(){
    let arr= []
    emojiContainer.innerHTML = ""
    for(let i=0; i<myEmojis.length ; i++){
        
        arr += `<span>${myEmojis[i]}</span>`
        emojiContainer.innerHTML = arr    
    }    
    
}
render()


pushBtn.addEventListener("click",function(){
    
    console.log(emojiInput.value)
    if(emojiInput.value !=""){
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
       
        console.log(myEmojis) 
        render()
    }

    
})
// console.log(myEmojis)
unshiftBtn.addEventListener("click",function(){
    
    console.log(emojiInput.value)
    if(emojiInput.value !=""){
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        
        console.log(myEmojis) 
        render()
    }

    
})

popBtn.addEventListener("click",function(){
    myEmojis.pop()
    render()

})
shiftBtn.addEventListener("click",function(){
    myEmojis.shift()
    render()

})