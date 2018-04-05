// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let ejLyrics = ["Blue", "jean", "baby", "L.A.", "lady", "seamstress", "for", "the", "band", "Pretty", 
                "eyed", "pirate", "smile,", "you'll", "marry", "a", "music", "man"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
let addExcitement = (theWordArray, displayCharacter) => {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        buildMeUp += theWordArray[i];

        if((i-2) % 3 === 0) {
            
           var bangCount = (i-2)/3+1; 
           
           if(displayCharacter === undefined) {
               displayCharacter = "!";
           }
           buildMeUp += displayCharacter.repeat(bangCount);
        }

        // Print buildMeUp to the console
        console.log(buildMeUp);
        // console.log(i % 3);
        buildMeUp += " ";
    }  
}

// Invoke the function and pass in the array
addExcitement(sentence)
addExcitement(ejLyrics)