// CODE

import { z } from 'zod';
import { afterAll, describe, it, expect, vi } from 'vitest';

const StarWarsPerson = z.object({
  name: z.string(),
});

const StarWarsPeopleResults = z.object({
  results: z.array(StarWarsPerson),
});

export type StarWarsPeopleResultsType = z.infer<typeof StarWarsPeopleResults>;

const logStarWarsPeopleResults = (data: StarWarsPeopleResultsType) => {
  //                                    ^ 🕵️‍♂️
  data.results.forEach(person => {
    console.log(person.name);
  });
};

// TESTS
describe('Extracting a type from a parser object', () => {
  const consoleMock = vi
    .spyOn(console, 'log')
    .mockImplementation(() => undefined);

  afterAll(() => {
    consoleMock.mockReset();
  });

  it('Logs Star Wars People Results are logged to the console in a correct format', () => {
    const testData = {
      results: [{ name: 'Luke Skywalker' }, { name: 'Darth Vader' }],
    };

    logStarWarsPeopleResults(testData);

    expect(consoleMock).toHaveBeenCalledWith('Luke Skywalker');
    expect(consoleMock).toHaveBeenCalledWith('Darth Vader');
  });
});
