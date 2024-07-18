function censorText(text, word) {
    const regex = new RegExp(word, 'gi');

    const censoredText = text.replace(regex, '*'.repeat(word.length));

    console.log(censoredText);
}
