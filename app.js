//Create Deck of cards


clubArray = ['2-C.png','3-C.png', '4-C.png', '5-C.png','6-C.png','7-C.png','8-C.png','9-C.png','10-C.png','A-C.png','J-C.png','Q-C.png','K-C.png']

diamondArray = ['2-D.png','3-D.png', '4-D.png', '5-D.png','6-D.png','7-D.png','8-D.png','9-D.png','10-D.png','A-D.png','J-D.png','Q-D.png','K-D.png']

heartArray = ['2-H.png','3-H.png', '4-H.png', '5-H.png','6-H.png','7-H.png','8-H.png','9-H.png','10-H.png','A-H.png','J-H.png','Q-H.png','K-H.png']

spadesArray = ['2-S.png','3-S.png', '4-S.png', '5-S.png','6-S.png','7-S.png','8-S.png','9-S.png','10-S.png','A-S.png','J-S.png','Q-S.png','K-S.png']

 // Create function that randomly selects "suit"  

const suitOne = Math.ceil(Math.random()*4)
const cardOne = Math.floor(Math.random()*13)
console.log(suitOne)
console.log(cardOne)
// create an if statement that will chose based on suit's random array      

if (suitOne == "1")
{
    //function alert will be used if clubArray was chosen 
    console.log(clubArray[cardOne])
    document.getElementById('card1').src = "cards/" + clubArray[cardOne]

} else if (suitOne == "2") {
    
     //function alert will be used if diamondArray was chosen 
console.log(diamondArray[cardOne])
document.getElementById('card1').src = "cards/" + diamondArray[cardOne]

} else if (suitOne == "3") {   
     //function alert will be used if heartArray was chosen 

console.log(heartArray[cardOne])
document.getElementById('card1').src = "cards/" + heartArray[cardOne]
} else {
   
     //function alert will be used if spadesArray was chosen 
    console.log(spadesArray[cardOne]) 
    document.getElementById('card1').src = "cards/" + spadesArray[cardOne]
}

