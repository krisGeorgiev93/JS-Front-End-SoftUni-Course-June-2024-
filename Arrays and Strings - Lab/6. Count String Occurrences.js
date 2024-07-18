function countOccurrences(text, word) {
    const words = text.split(' ');

    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase() === word.toLowerCase()) {
            count++;
        }
    }

    console.log(count);
}