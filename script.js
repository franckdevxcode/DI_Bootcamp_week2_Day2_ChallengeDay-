// 1 Create a variable called . The value of the variable should be a string that contains the words “not” and “bad”.
const sentences= "The movie is not that bad, I like it"
//2 Create a variable called where it’s value is the first appearance
// (ie. the position) of the substring “not” (from the variable).wordNotsentence
const wordNot = sentences.search("not")
console.log('wordNot', wordNot)
//3 Create a variable called where it’s value is the first appearance 
//(ie. the position) of the substring “bad”  (from the variable).wordBadsentence
const wordBad = sentences.search("bad")
console.log('wordBad', wordBad)
/*4  If the word “bad” comes after the word “not”, you should replace 
the whole “not…bad” substring with “good”, then console.log the result.*/
if (wordNot < wordBad){
    const firspart=sentences.slice(0,wordNot)
    const secondpart = sentences.slice(wordBad + 3)
    console.log(firspart + "good " + secondpart)
}

/*
If the word “bad” does not come after “not” or the words are not in the sentence, 
console.log the original sentence.
*/

if (wordNot < wordBad){
    const firspart=sentences.slice(0,wordNot)
    const secondpart = sentences.slice(wordBad + 3)
    console.log(firspart + "good " + secondpart)
} else {
    console.log(sentences)
}