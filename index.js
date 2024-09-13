let box1=document.querySelector(".Box1")
let box2=document.querySelector(".Box2")
let box3=document.querySelector(".Box3")
let box4=document.querySelector(".Box4")
// let pasLen=Math.floor(Math.random()*8)+8
// let rand = Math.floor(Math.random()*94)+33


// for(let i=0;i<pasLen;i++){
//     let rand = Math.floor(Math.random()*94)+33
//     console.log(rand)
//     password +=String.fromCharCode(rand)
// }
function generate(){
    let pass_array=[]
    for(let i=0;i<4;i++){
        let pasLen=Math.floor(Math.random()*8)+8
        let num=Math.floor(Math.random()*16-pasLen+1)+8
        let password=""
        let rand
        for(let i=0;i<=pasLen;i++){
            if(i===num){
                
                rand = Math.floor(Math.random()*10)+48
                password +=String.fromCharCode(rand)
            }
            else{ 
                rand = Math.floor(Math.random()*94)+33
                password +=String.fromCharCode(rand)
            }
        }
        pass_array.push(password)
    }
    box1.innerHTML =pass_array[0]
box2.innerHTML =pass_array[1]
box3.innerHTML =pass_array[2]
box4.innerHTML =pass_array[3]
}