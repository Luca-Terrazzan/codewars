/**

You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'

Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.
Examples:
encryptThis "Hello" == "72olle"
encryptThis "good" == "103doo"
encryptThis "hello world" == "104olle 119drlo"

*/

export function decipherThis(str: string): string {
    const words = str.split(' ');
    const encryptedWords: string[] = [];

    for (const word of words) {
        let encryptedWord = '';
        encryptedWord += word.charCodeAt(0);

        if (word.length > 1) {
            encryptedWord += word[word.length - 1];

            if (word.length > 2) {
                encryptedWord += word.slice(2, word.length - 1);
                encryptedWord += word[1];
            }
        }

        encryptedWords.push(encryptedWord);
    }

    return encryptedWords.join(' ');
}


// const result = decipherThis('Hello World');
// const result2 = decipherThis('Hello World A Lot of pain');
const result3 = decipherThis('A AB ABC ABCD');

console.log(1);
