//STEP 1
function getLetters(str) {
    let letters = str.split('').sort().join('');
    console.log(letters);
}
getLetters('webmaster');

//STEP 2
function capitalize(str) {
    let words = str.split(' ');
    for(let word in words){
        let text = words[word];
        words[word] = text.charAt(0).toUpperCase() + text.slice(1);
    }
    console.log(words.join(' '));    
}
capitalize('the quick brown fox');

//STEP 3
function countVowels(str) {
    let vowels = str.match(/[aeiouAEIOU]/g);
    console.log(vowels.length);
}
countVowels('The quick brown fox');

//STEP 4
function getStringID(len) {
    let str = Math.random().toString(36).slice(2, len);
    console.log(str);
}
getStringID(10);

//STEP 5
function longestCountryName(list) {
    let longestName = list[0];
    let len = list[0].length;

    for (let i of list){
        if (i.length > len) {
            longestName = i;
        }
    }

    console.log(longestName);
}
longestCountryName(['Australia', 'Germany','United States of America']);