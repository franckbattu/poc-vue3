import { LoremIpsum } from "lorem-ipsum";
import { reactive } from "vue";

const lorem = reactive(new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
}));

function generateRandomTitle(value: number) {
  return lorem.generateWords(value);
}

export function useLoremIpsumService() {
  return {
    lorem,
    generateRandomTitle
  }
}