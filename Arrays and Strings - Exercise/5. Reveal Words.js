function revealWords(wordsStr, sentence) {
    let words = wordsStr.split(', ');
    for (let word of words) {
        let template = '*'.repeat(word.length);
        sentence = sentence.replace(template, word);
    }
    return sentence;
}


console.log(revealWords('great, learning', 'softuni is ***** place for ******** new programming languages'));
// Output: softuni is great place for learning new programming languages