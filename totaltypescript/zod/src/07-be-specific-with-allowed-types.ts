// CODE

import { expect, it } from 'vitest';
import { z } from 'zod';

const Form = z.object({
  repoName: z.string(),
  privacyLevel: z.union([z.literal('private'), z.literal('public')]),
});

/* 
//* This can be achieved with enums too
const Form = z.object({
  repoName: z.string(),
  privacyLevel: z.enum(["private", "public"]),
});

This does not create an enum the way you think of it in TypeScript.

In TypeScript we would write:

enum PrivacyLevel {
  private,
  public,
}

Instead, a union type is created.
*/

export const validateFormInput = (values: unknown) => {
  const parsedData = Form.parse(values);

  console.log(parsedData);

  return parsedData;
};

type FormType = z.infer<typeof Form>;

// TESTS

it('Should fail if an invalid privacyLevel passed', async () => {
  expect(() =>
    validateFormInput({
      repoName: 'mattpocock',
      privacyLevel: 'something-not-allowed',
    })
  ).toThrowError();
});

it('Should permit valid privacy levels', async () => {
  expect(
    validateFormInput({
      repoName: 'mattpocock',
      privacyLevel: 'private',
    }).privacyLevel
  ).toEqual('private');

  expect(
    validateFormInput({
      repoName: 'mattpocock',
      privacyLevel: 'public',
    }).privacyLevel
  ).toEqual('public');
});
