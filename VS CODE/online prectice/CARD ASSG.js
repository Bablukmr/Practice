const cardData = [
    {
        suit: "heart",
        value: 7,
    },
    {
        suit: "club",
        value: 8,
    },
    {
        suit: "club",
        value: 2,
    },
    {
        suit: "diamond",
        value: 2,
    },
    {
        suit: "diamond",
        value: 5,
    },
    {
        suit: "club",
        value: 10,
    },
];

// =========================================== 1 ==================================================== //


function findCard(value, suit) {
    for(let i=0;i<cardData.length;i++){
    if(cardData[i].value==value && cardData[i].suit==suit){
        return true
    }
    return false
}
console.log(findCard(5, 'heart'));
console.log(findCard(10, 'club'));
}

/** * 1. complete the above function,
 * it should return true /false if card is present/absent
 * example
 * findCard(5, 'heart') should return false
 * findCard(10, 'club') should return true
*/

// =============================================== 2 ================================================ //


function getSuits(cardData) { 
    const suits = [];
    for (let i = 0; i < cardData.length; i++) {
      const card = cardData[i];
      if (suits.includes(card.suit)) {
        suits.push(card.suit);
      }
    }
    return suits;
}


/**
    2. write a function which returns the list of available suits in the above data
 * ans => ["heart", "club", "diamond"]
*/


// ================================================ 3 =============================================== //


function getSuitCount() {
    const result = {}
    cardData.forEach( card => {
        const { suit } = card  //card.suit
        // console.log(result)
        if(result.hasOwnProperty(suit)){
            result[suit] = result[suit] + 1
        }else{
            result[suit] = 1
        }
    })

    return result
}


console.log(getSuitCount())

/**
 * 3. write a function which returns an object with the suits as its key and its total count as its value
 * ans => {  heart:1,  club:3, diamond:2,}
*/

// ================================================= 4 ==============================================//