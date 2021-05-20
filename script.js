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
    let dotsEaten = []
    let tileSteps = []
    let win = false
    let highscoredisp = 0
    document.getElementById("highscore").innerText = "High Score: "+ highscoredisp

    //objects attempt for straighter movement
    // let inky = {spot:90, x:""}
    // let blinky = {spot:91, x:""}
    // let pinky = {spot:110, x:""}
    // let clyde = {spot:111, x:""}

    
    
   
    //update high score

    function newHS(){
        if(scoreNum>highscoredisp){
            console.log("in hs func")
            highscoredisp = scoreNum
            console.log(scoreNum, highscoredisp)
            document.getElementById("highscore").innerText = `High Score: ${highscoredisp}`
        }
    }
    





function winCheck(){
    if (dotsEaten.size==140){
        console.log(dotsEaten.size)
        gameOver = true
        document.getElementById("big-message").innerText = "You Won!"
        newHS()
        win = true
        
        

     } //console.log(dotsEaten.size)
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
            tileSteps = []
            document.getElementById("big-message").innerText = ""
            heroMove = document.getElementById(`${heroSpot}`)
            heroMove.innerText = "🦔"
           
            
            gameOver = false
            
            scoreNum = 1
            dotsEaten = []
            tileCount = 140
            playerMoves = 0
            showTimer = 90
            boxes = document.querySelectorAll(".box")
            // startButton = document.getElementById("button")
            inkySpot = 90
            blinkySpot = 91
            pinkySpot = 110
            clydeSpot = 111
            win = false
            inkyMove = document.getElementById(`${inkySpot}`)
            inkyMove.innerText = "👤"
            blinkyMove = document.getElementById(`${blinkySpot}`)
            blinkyMove.innerText = "👤"
            pinkyMove = document.getElementById(`${pinkySpot}`)
            pinkyMove.innerText = "👤"
            clydeMove = document.getElementById(`${clydeSpot}`)
            clydeMove.innerText = "👤"
            
            
            
            
            
 

            // Timer 

            let clock = setInterval(tick, 1000)

            function tick(){
                showTimer--
                document.getElementById("timer").innerText = `Timer: ${showTimer}`
                winCheck()
                newHS()
                if(showTimer<88){

                    inkySpot = ghostMovement(inkySpot)
                    blinkySpot = ghostMovement(blinkySpot)
                    pinkySpot = ghostMovement(pinkySpot)
                    clydeSpot = ghostMovement(clydeSpot)

                    //objects attempt for straighter movement
                    // ghostMovement(inky.Spot)
                    // ghostMovement(blinky.Spot)
                    // ghostMovement(pinky.Spot)
                    // ghostMovement(clyde.Spot)
                }
                if(showTimer<86){
                    document.getElementById(`90`).innerText = ""
                    document.getElementById(`91`).innerText = ""
                    document.getElementById(`110`).innerText = ""
                    document.getElementById(`111`).innerText = ""
                    
                }
                if(showTimer%10 == 0 && showTimer<60){
                    
                    bonusItem()
                    
                    

                }
                
                winCheck()
                // if you win:
                if(win == true){
                    clearInterval(clock)
                    scoreNum += showTimer
                    document.getElementById("score").innerText = `Score: ${scoreNum}`
                    document.getElementById("big-message").innerText = "You Won!!!!!"
                    newHS()


                // if you die
                }else if(gameOver == true){
                    clearInterval(clock)
                    scoreNum += showTimer
                    document.getElementById("score").innerText = `Score: ${scoreNum}`
                    document.getElementById("big-message").innerText = "You died!"
                    newHS()
                
                // if you run out of time
                }else if(showTimer <= 0){
                        newHS()
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
                    // heroMove.innerText.transform = "translate(0px, 20px)"
                    heroSpot += 20
                    
                
                    // console.log(heroSpot)

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
                         
                         
                         
                    }else if(heroMove.innerText === "🎈"){
                        scoreNum += 25
                         
                         
                        document.getElementById("score").innerText = `Score: ${scoreNum}`
                    }
                }
                tileSteps.push(heroSpot)
                dotsEaten = new Set(tileSteps)
                // console.log(dotsEaten)
                heroMove.innerText = "🦔"
                winCheck()


            // console.log(tileCount)
        })  //Set of arrow key if statements    
            
    
            // for bonus items:
            function bonusItem(){
                
                rando = Math.floor(Math.random() * tileSteps.length)
                
                randoInTiles = tileSteps[rando]
                
                if(document.getElementById(`${randoInTiles}`).innerText == "" ){
                    document.getElementById(`${randoInTiles}`).innerText =  "🎈"
                    
                }
                
            }


     
    
        
        


        
        inkyMove = document.getElementById(`${inkySpot}`)
        inkyMove.innerText = "👤"
        blinkyMove = document.getElementById(`${blinkySpot}`)
        blinkyMove.innerText = "👤"
        pinkyMove = document.getElementById(`${pinkySpot}`)
        pinkyMove.innerText = "👤"
        clydeMove = document.getElementById(`${clydeSpot}`)
        clydeMove.innerText = "👤"


        //objects attempt for straighter movement
        // inkyMove = document.getElementById(`${inky.Spot}`)
        // inkyMove.innerText = "👤"
        // console.log(inkyMove.innerText)
        // blinkyMove = document.getElementById(`${blinky.Spot}`)
        // blinkyMove.innerText = "👤"
        // pinkyMove = document.getElementById(`${pinky.Spot}`)
        // pinkyMove.innerText = "👤"
        // clydeMove = document.getElementById(`${clyde.Spot}`)
        // clydeMove.innerText = "👤"
      
        


        function ghostMovement(ghost){
            //new location will be 70, 71, 130, 131 repectively 
            

            //have them move in random directions
            //get random direction, then move
            // let dir = false
            let x = Math.floor(Math.random() * 4) 

            
            // console.log(x)
            // console.log(ghost)
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
                    
                    if (ghost <1 || document.getElementById(`${ghost}`).className === "wall"|| document.getElementById(`${ghost}`).innerText == "👤") {
                        dir = false
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
                    
                    if (ghost >200 || document.getElementById(`${ghost}`).className === "wall" || document.getElementById(`${ghost}`).innerText == "👤") {
                        dir = false
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
                    
                    if (ghost <1 || document.getElementById(`${ghost}`).className === "wall"|| document.getElementById(`${ghost}`).innerText == "👤") {
                        dir=false
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
                    
                    if (ghost >200 || document.getElementById(`${ghost}`).className === "wall"|| document.getElementById(`${ghost}`).innerText == "👤") {
                        dir = false
                        ghost-=1
                        
                        document.getElementById(`${ghost}`)
                    } else if(document.getElementById(`${ghost}`).innerText == "🦔"){
                        gameOver = true
                    }
                }
        
                
        
                
                
                document.getElementById(`${ghost}`).innerText = "👤"
                return ghost
            
    }//end of ghost movement func 
    
    
    
    
    //change to night mode

    nightButton = document.getElementById("night-mode")
    standardButton = document.getElementById("standard")

    nightButton.addEventListener("click", () =>{
        document.querySelector(".container").style.alignItems ="center"
    })
    standardButton.addEventListener("click", () =>{
        document.querySelector(".container").style.alignItems =""
    })
    



})    //DOMContentLoaded       









//start button places guy on board on sq f10

// if up is clicked, move hero up one letter, if down move down.
// if left move down one number, if right, move up

// need a list of board spaces to loop through and update as arrows are pressed


//while gameOver !== true || timerOn !== false{

//}




















