
/**
 * @param {String} str 
 */
const getHashTags = (str) => {
    // split string
    const str_split = str.split(" ");

    // we have to sort the split array first
    str_split.sort((a, b) => {
        return b.length - a.length;
    });

    //console.log(str_split)

    // pick first 3 elements of array
    const longestWords = str_split.slice(0, 3);

    const taggedWords = longestWords.map((word) => {
        return `#${word}`
    });

    //console.log(taggedWords);

    return taggedWords;
}

const str = "Hey Parents, Surprise, Fruit Juice Is Not Fruit";
const response = getHashTags(str);
console.log(response);