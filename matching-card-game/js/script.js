/*
    1. Create an array consisting of all the cards 
        Card = {src: imgfilename, matched: false}

    2. if card is clicked
        - every 2 actions = turnCount++
        - flip over
        - check to see if there is 2nd card that is flipped over
            - if these two cards have the same src, then the match key to true
                - if matched = true, then those two cards stay up for good
              else, flip the card back

    3. win condition
        if all the cards in the array have matched = true, then pop modal saying you won

    4. new game button
        if clicked
            - re-shuffles the card array
            - re renders the cards

*/

const cards = [
    {
        src: '',
        matched: false
    }, {}, {}
]

const shuffledCards = [...cards, ...cards]