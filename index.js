//get the data

var users=[
    {
        profilePic:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        displayPic:"https://plus.unsplash.com/premium_photo-1683147724451-33fe3f2ad914?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
        pendingMessage:4,
        loaction:"Delhi, India",
        name:"Harshita", 
        age:23,
        interests:["music","painting"],
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, impedit velit officia laborum nemo maiores obcaecati eveniet voluptatibus! Corrupti commodi eius ab temporibus veritatis, ratione reiciendis ducimus voluptate velit beatae?",
        isFriend:null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        displayPic:"https://images.unsplash.com/photo-1507081323647-4d250478b919?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
        pendingMessage:4,
        loaction:"Delhi, India",
        name:"Saurabh", 
        age:23,
        interests:["music","painting"],
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, impedit velit officia laborum nemo maiores obcaecati eveniet voluptatibus! Corrupti commodi eius ab temporibus veritatis, ratione reiciendis ducimus voluptate velit beatae?",
        isFriend:null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"https://images.unsplash.com/photo-1521061972219-a1894a27a040?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
        pendingMessage:4,
        loaction:"Delhi, India",
        name:"Deepak", 
        age:23,
        interests:["music","painting"],
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, impedit velit officia laborum nemo maiores obcaecati eveniet voluptatibus! Corrupti commodi eius ab temporibus veritatis, ratione reiciendis ducimus voluptate velit beatae?",
        isFriend:null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        displayPic:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
        pendingMessage:4,
        loaction:"Delhi, India",
        name:"Lavanya", 
        age:23,
        interests:["music","painting"],
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, impedit velit officia laborum nemo maiores obcaecati eveniet voluptatibus! Corrupti commodi eius ab temporibus veritatis, ratione reiciendis ducimus voluptate velit beatae?",
        isFriend:null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        displayPic:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        pendingMessage:4,
        loaction:"Delhi, India",
        name:"Ragahav", 
        age:23,
        interests:["music","painting"],
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, impedit velit officia laborum nemo maiores obcaecati eveniet voluptatibus! Corrupti commodi eius ab temporibus veritatis, ratione reiciendis ducimus voluptate velit beatae?",
        isFriend:null
    },
]
function select(elem){
    return document.querySelector(elem);
}
let curr=0;
let isAnimate=false
function setData(index){
    profile=select(".prflimg img")
    batch=select(".batch h5")
    select(".location").textContent=users[index].loaction
    select(".name").textContent=users[index].name
    select(".age").textContent=users[index].age
    select(".bio p").textContent=users[index].bio
    var clutter=""
    users[index].interests.forEach((e)=>{
        clutter+=` <div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
        <i class="text-sm ri-music-2-fill"></i>
        <h3 class="text-sm tracking-tight capitalize">${e}</h3>
        </div>`
        batch.textContent=users[index].pendingMessage
        profile.src=users[index].profilePic
    })
    select('.tags').innerHTML=clutter
}
function setInitial(){
    main=select(".maincard img")
    incomingcard=select(".incomingcard img")
    main.src=users[curr].displayPic;
    incomingcard.src=users[curr+1].displayPic;
    setData(curr)
    curr=2;
}
setInitial()


function imageChange(){
    if(!isAnimate){
        isAnimate=true
        let tl=gsap.timeline({
            onComplete:function(){
                isAnimate=false
                let main=select(".maincard")
                let incomingcard=select(".incomingcard")
                incomingcard.classList.remove("z-[2]")
                incomingcard.classList.add("z-[3]")
                incomingcard.classList.remove("incomingcard")
    
                main.classList.remove("z-[3]")
                main.classList.add("z-[2]")
                gsap.set(main,{
                    scale:1,
                    opacity:1
                })
                if(curr===users.length) curr=0;
                select(".maincard img").src=users[curr].displayPic
                curr++;
                main.classList.remove("maincard");
                incomingcard.classList.add("maincard")
                main.classList.add("incomingcard")
            }
        });
        tl.to(".maincard",{
            scale:1.1,
            opacity:0,
            ease:Circ,
            duration:.9
    
        },"a")
        .from(".incomingcard",{
            scale:.9,
            opacity:0,
            ease:Circ,
            duration:1.1
        },"a")
    }
    
}

let deny=select(".deny")
let accept=select(".accept")

deny.addEventListener('click',()=>{
    imageChange()
    setData(curr-1)
    gsap.from(".details .element",{
        y:"100%",
        opacity:0,
        stagger:.06,
        ease:Power4.easeInOut ,
        duration:1.5
    })
})
accept.addEventListener('click',()=>{
    imageChange()
    setData(curr-1)
    gsap.from(".details .element",{
        y:"100%",
        opacity:0,
        stagger:.06,
        ease:Power4.easeInOut ,
        duration:1.5
    })
})

function containerCreator(){
    let elem=document.querySelectorAll(".element");
    elem.forEach((e)=>{
        let div=document.createElement("div")
        div.classList.add(`${e.classList[1]}container`,'overflow-hidden')
        div.appendChild(e)
        select(".details").appendChild(div)
    })
    
}
containerCreator()


