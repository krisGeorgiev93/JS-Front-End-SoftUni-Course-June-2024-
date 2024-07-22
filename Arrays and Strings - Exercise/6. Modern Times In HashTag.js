
function hashedWords(myString) {
    const words = myString.split(' ');

    words.forEach(word => {
        if (word.startsWith('#')) {
            const cleanWord = word.slice(1); // премахваме '#'
            if (/^[A-Za-z]+$/.test(cleanWord)) {
                console.log(cleanWord);
            }
        }
    });
}