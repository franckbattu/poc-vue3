import { useLoremIpsumService } from "../lorem-ipsum.service";

describe('LoremIpsumService', () => {

  it('should generate random titles of 5 words', () => {
    const service = useLoremIpsumService();

    const numberOfWords = 5;
    const firstTitle = service.generateRandomTitle(numberOfWords);
    const secondTitle = service.generateRandomTitle(numberOfWords);

    expect(firstTitle.split(' ').length).toEqual(numberOfWords);
    expect(firstTitle).not.toEqual(secondTitle);
  });

});