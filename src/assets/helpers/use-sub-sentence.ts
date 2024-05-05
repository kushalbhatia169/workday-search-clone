type indexTypeValues = "oneThird" | "twoThird";

const useSubSentence = () => {

  const getSubSentence = ( sentence: string, indexType: indexTypeValues ): string => {

    // Split the sentence into an array of words.
    const words = sentence.split(" ");

    // Get the length of the array.
    const length = words.length;

    // Calculate the index of the word that is 1/3rd or 2/3rd of the way through the sentence.
    const index = indexType === "oneThird" ? Math.floor(length / 3) : Math.floor(length * 2 / 3);

    // Get the sliced 1/3rd or 2/3rd of the sentence and  Join the first 1/3rd of the sentence into a string.
    return indexType === "oneThird" ? words.slice(0, index).join(" ") : words.slice( (Math.floor(length / 3) - 1), index).join(" ");

}

  return getSubSentence;
}

export default useSubSentence;