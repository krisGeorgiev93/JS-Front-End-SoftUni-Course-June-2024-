function pascalCaseSplitter(myString) {
    const words = myString.split(/(?=[A-Z])/).join(', ');

    console.log(words);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
// output: Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can