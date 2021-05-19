console.log("Game on")

window.addEventListener("DOMContentLoaded", () =>{
    const grid =document.querySelector(".game-board")
    
    let scoreNum = 1
    let heroSpot = 130
    let tileCount = 140
    let playerMoves = 0
    let showTimer = 90
    let boxes = document.querySelectorAll(".box")
    let startButton = document.getElementById("button")
    let gameOver = true
    
    let heroMove = document.getElementById(`${heroSpot}`) 
    let  inkySpot = 90
    let  blinkySpot = 91
    let  pinkySpot = 110
    let  clydeSpot = 111
    let tileSteps = []
    let win = false





boardList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
              21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
              41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 
              61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 
              81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 
             101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
             121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140,
             141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 
             161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 
             181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200]



function winCheck(){
    if (tileCount==1){
        gameOver = true
        document.getElementById("big-message").innerText = "You Won, Nice!"
        console.log(showTimer)
        win = true

        

    }
}



    

    startButton.addEventListener("click", () =>{ 
        
        //on click goes through list and clears the board and messages, 
        //changes gameOver to false, and display player turn
        boxes.forEach(function(box) {
            box.innerText = "◽"
        })
        if (gameOver == true){

            //reset the board
            heroSpot = 130
            tileSteps = [130]
            document.getElementById("big-message").innerText = ""
            heroMove = document.getElementById(`${heroSpot}`)
            heroMove.innerText = "🦔"
           
            
            gameOver = false
            
            scoreNum = 1
            
            tileCount = 140
            playerMoves = 0
            showTimer = 90
            boxes = document.querySelectorAll(".box")
            startButton = document.getElementById("button")
            inkySpot = 90
            blinkySpot = 91
            pinkySpot = 110
            clydeSpot = 111

            
          
            


 

            // Timer 

            let clock = setInterval(tick, 1000)

            function tick(){
                showTimer--
                document.getElementById("timer").innerText = `Timer: ${showTimer}`
                
                if(showTimer<87){

                    inkySpot = ghostMovement(inkySpot)
                    blinkySpot = ghostMovement(blinkySpot)
                    pinkySpot = ghostMovement(pinkySpot)
                    clydeSpot = ghostMovement(clydeSpot)
                }
                if(showTimer<85){
                    document.getElementById(`90`).innerText = ""
                    document.getElementById(`91`).innerText = ""
                    document.getElementById(`110`).innerText = ""
                    document.getElementById(`111`).innerText = ""
                }
                
                winCheck()
            
                if(win == true){
                    clearInterval(clock)
                    scoreNum += showTimer
                    document.getElementById("score").innerText = `Score: ${scoreNum}`
                    document.getElementById("big-message").innerText = "You Won!!!!!"


                    
                }else if(gameOver == true){
                    clearInterval(clock)
                    scoreNum += showTimer
                    document.getElementById("score").innerText = `Score: ${scoreNum}`
                    document.getElementById("big-message").innerText = "You died!"

                
                
            }else if(showTimer <= 0){
                    
                        document.getElementById("big-message").innerText = "Game Over"
                        gameOver = true
                        clearInterval(clock)
                }
            }

           


        } //Start button IF statement
    }) //Start Button event Listener

            
            
            
    


        // arrow key functions:

        document.addEventListener("keydown", (event) => {

            //clear the old spot
            heroMove.innerText = ""
            
            //log move count
            playerMoves ++
            // console.log(playerMoves)
                


                if (event.key == "ArrowUp"){
                
                    
                //move up one sq
                    heroSpot -= 20
                    
                    heroMove = document.getElementById(`${heroSpot}`)
                    
                    //need to make it unable to go negative and stay off walls
                    
                    if (heroSpot <1 || heroMove.className === "wall") {
                        
                        heroSpot+=20
                        heroMove = document.getElementById(`${heroSpot}`)
                    }  
                    
                    //put hero in new spot
                   
                    
                    
                    
                }else if(event.key == "ArrowDown"){
                    
                    //move down one sq
                    heroSpot += 20
                    
                    heroMove = document.getElementById(`${heroSpot}`)

                    //need to make it unable to go past 200 and stay off walls
                    if (heroSpot >200 || heroMove.className == "wall") {
                        
                        heroSpot-=20
                        heroMove = document.getElementById(`${heroSpot}`)
                    }
                    
                    
                    
                    //put hero in new spot
                    
                    
                    
                    
                    
                }else if(event.key == "ArrowLeft"){
                    
                    //move left one sq
                    heroSpot -= 1
                    
                    heroMove = document.getElementById(`${heroSpot}`)

                    //need to make it unable to go negative and stay off walls
                    
                    if (heroSpot <1 || heroMove.className == "wall") {
                        
                        heroSpot+=1
                        heroMove = document.getElementById(`${heroSpot}`)
                    }
                    
                    
                    
                    
                    //put hero in new spot
                    
                    
                    
                    
                }else if(event.key == "ArrowRight"){
                    
                    //move right one sq
                    heroSpot += 1
                    
                    heroMove = document.getElementById(`${heroSpot}`)
                    
                    //need to make it unable to go past 200 and stay off walls
                    if (heroSpot >200 || heroMove.className == "wall") {
                        
                        heroSpot-=1
                        heroMove = document.getElementById(`${heroSpot}`)
                    }
                    
                    
                    
    
                    
                } //ArrowRight


                 //if new spot is blank text, nothing, but if dot, change tileCount --
                 if(gameOver == false){

                     if(heroMove.innerText === "◽"){
                         tileCount --
                         scoreNum++
                         
                         
                         document.getElementById("score").innerText = `Score: ${scoreNum}`
                         
                         
                         
                        }
                    }
                tileSteps.push(heroSpot)
                dotsEaten = new Set(tileSteps)
                // console.log(dotsEaten)
                heroMove.innerText = "🦔"
                winCheck()



            })  //Set of arrow key if statements    
            
    
            //loop to make all zombie steps back into dots
            // while(gameOver==false){

                for(box of boxes){
                    // console.log(box)
                    if(tileSteps.includes(box)){
                        console.log(box)
                        box.innerText = ""
                    }else{
                        box.innerText = "◽"
                    }
                }  
            // }

        
    
        
        


        
        inkyMove = document.getElementById(`${inkySpot}`)
        inkyMove.innerText = "👤"
        blinkyMove = document.getElementById(`${blinkySpot}`)
        blinkyMove.innerText = "👤"
        pinkyMove = document.getElementById(`${pinkySpot}`)
        pinkyMove.innerText = "👤"
        clydeMove = document.getElementById(`${clydeSpot}`)
        clydeMove.innerText = "👤"
        
      
        


        function ghostMovement(ghost){
            //new location will be 70, 71, 130, 131 repectively 
            

            //have them move in random directions
            //get random direction, then move
            x = Math.floor(Math.random() * 4)

            
            // console.log(x)
            console.log(ghost)
            // console.log(tiles)
            // console.log(document.getElementById(`${ghost}`).id)

            if(tileSteps.includes(ghost)){

                 document.getElementById(`${ghost}`).innerText = ""

            }else{document.getElementById(`${ghost}`).innerText = "◽"

            }

            //want the ghosts to keep moving in their random direction until they hit a wall or edge
            // while (gameOver == false){

                
                if (x == 0){
                    //move up one sq

                    ghost -= 20

                    


                    // Want to keep the space the way it was before ghost stepped on it
                    
                    
                    
                    document.getElementById(`${ghost}`)
                    
                    //need to make it unable to go negative and stay off walls
                    
                    if (ghost <1 || document.getElementById(`${ghost}`).className === "wall") {
                        
                        ghost+=20
                        
                        document.getElementById(`${ghost}`)
                    }  else if(document.getElementById(`${ghost}`).innerText == "🦔"){
                        gameOver = true
                    
                    }
                    
                    
                }else if(x == 1){
                    //move down one sq
                    ghost += 20
                    
                    document.getElementById(`${ghost}`)
                    
                    //need to make it unable to go negative and stay off walls
                    
                    if (ghost >200 || document.getElementById(`${ghost}`).className === "wall") {
                    
                        ghost-=20
                        
                        document.getElementById(`${ghost}`)
                    }  else if(document.getElementById(`${ghost}`).innerText == "🦔"){
                        gameOver = true
                }
                
                }else if(x==2){
                    //move left one sq
                    ghost -= 1
                    
                    document.getElementById(`${ghost}`)
                    
                    //need to make it unable to go negative and stay off walls
                    
                    if (ghost <1 || document.getElementById(`${ghost}`).className === "wall") {
                        
                        ghost+=1
                        
                        document.getElementById(`${ghost}`)
                    }  else if(document.getElementById(`${ghost}`).innerText == "🦔"){
                        gameOver = true
                    }
                
                
                }else if(x==3){
                    //move down one sq
                    ghost += 1
                    
                    document.getElementById(`${ghost}`)
                    
                    //need to make it unable to go negative and stay off walls
                    
                    if (ghost >200 || document.getElementById(`${ghost}`).className === "wall") {
                        
                        ghost-=1
                        
                        document.getElementById(`${ghost}`)
                    } else if(document.getElementById(`${ghost}`).innerText == "🦔"){
                        gameOver = true
                    }
                }
        
            
        
            

        document.getElementById(`${ghost}`).innerText = "👤"
        return ghost
    }//end of ghost movement func 
    
        
    
           


    



})    //DOMContentLoaded       









//start button places guy on board on sq f10

// if up is clicked, move hero up one letter, if down move down.
// if left move down one number, if right, move up

// need a list of board spaces to loop through and update as arrows are pressed


//while gameOver !== true || timerOn !== false{

//}




















