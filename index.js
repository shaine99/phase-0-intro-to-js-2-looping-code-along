const cards = ["Guadalupe", "Ollie", "Aki"];
function writeCards(cards) { 
    const thankYouCards = [] 
    for (let s = 0; s < cards.length; s++) {
        thankYouCards.push(`Thank you, ${cards[s]}, for the wonderful surprise gift!`);
    } 
    return thankYouCards
}
writeCards(["Guadalupe", "Ollie", "Aki"], "suprise")

function countDown(n) { 
    if (n < 0) {
        console.log("positive integer. ");
        return;''
    } 
    while (n >= 0) { 
        console.log(n);
        n--;
    }

}
 


