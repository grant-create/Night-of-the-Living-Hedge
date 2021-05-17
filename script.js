console.log("Game")








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













window.addEventListener("DOMContentLoaded", () =>{
    const grid =document.querySelector(".game-board")
    let score = document.getElementById("score")
    let heroSpot = 130

    
    
    // function endGameCheck() {
    //     tiles = 0
    //     for(boxid of boardList){
    //         if(document.getElementById(`${boxid}`).innerText == "◽"){
    //             console.log(document.getElementById(`${boxid}`).innerText)
                
    //         }else if(document.getElementById(`${boxid}`).innerText != "◽"){
    //             tiles += 1
    //             console.log(tiles)
    //         }
    //     }
    // }
    
    






    
    
    
    
    
    let startButton = document.getElementById("button")
    let gameOver = true
    let tiles = 0
    startButton.addEventListener("click", () =>{ 
        
        //on click goes through list and clears the board and messages, 
        //changes gameOver to false, and display player turn
        if (gameOver == true){

            heroSpot = 131
            tiles = 0
            score = 0
            gameOver = false
            
            
            
            let tokens = 140 //140 non wall spaces on board, might need to do 139 since we start on a sq
            

        
            // starting pos of pac
            
        
        let heroMove = document.getElementById(`${heroSpot}`) 
        
        //add this to start game function
        heroMove.innerText = "🦔"
        
        
        
        
        
        
        
        
        
        document.addEventListener("keydown", (event) => {
            
            
            
                heroMove.innerText = ""
                
                if (event.key == "ArrowUp"){
                
                    
                //move up one sq
                    heroSpot -= 20
                    heroMove = document.getElementById(`${heroSpot}`)
                    
                    //need to make it unable to go negative and stay off walls
                    
                    if (heroSpot <1 || heroMove.className === "wall") {
                        console.log("blocked")
                        heroSpot+=20
                    }  
                    heroMove = document.getElementById(`${heroSpot}`)
                    
                    //put hero in new spot
                    heroMove.innerText = "🦔"
                    endGameCheck()
                    
                    
                }else if(event.key == "ArrowDown"){
                    
                    //move down one sq
                    heroSpot += 20
                    heroMove = document.getElementById(`${heroSpot}`)

                    //need to make it unable to go past 200 and stay off walls
                    if (heroSpot >200 || heroMove.className == "wall") {
                        console.log("blocked")
                        heroSpot-=20
                    }
                    heroMove = document.getElementById(`${heroSpot}`)
                    
                    
                    //put hero in new spot
                    heroMove.innerText = "🦔"
                    endGameCheck()
                    
                    
                    
                }else if(event.key == "ArrowLeft"){
                    
                    //move left one sq
                    heroSpot -= 1
                    heroMove = document.getElementById(`${heroSpot}`)

                    //need to make it unable to go negative and stay off walls
                    
                    if (heroSpot <1 || heroMove.className == "wall") {
                        console.log("blocked")
                        heroSpot+=1
                    }
                    heroMove = document.getElementById(`${heroSpot}`)
                    
                    
                    
                    //put hero in new spot
                    heroMove.innerText = "🦔"
                    endGameCheck()
                    
                    
                }else if(event.key === "ArrowRight"){
                    
                    //move right one sq
                    heroSpot += 1
                    heroMove = document.getElementById(`${heroSpot}`)
                    
                    //need to make it unable to go past 200 and stay off walls
                    if (heroSpot >200 || heroMove.className == "wall") {
                        console.log("blocked")
                        heroSpot-=1
                    }
                    
                    heroMove = document.getElementById(`${heroSpot}`)
                    
                    //put hero in new spot 
                    
                    heroMove.innerText = "🦔"
                    endGameCheck()

                } //ArrowRight
                
            })  //Set of arrow key if statements    
            
        } //Start button IF statement
    }) //Start Button event Listener
        
    
        
        
    
        
        
        
    
        
    
            

    


    
})    //DOMContentLoaded       









//start button places guy on board on sq f10

// if up is clicked, move hero up one letter, if down move down.
// if left move down one number, if right, move up

// need a list of board spaces to loop through and update as arrows are pressed


//while gameOver !== true || timerOn !== false{

//}




















