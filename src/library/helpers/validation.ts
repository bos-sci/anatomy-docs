export const valueMissingError = 'This is an example of an error message for a required form control.';

export const getValidationMessage = (input: HTMLInputElement): string => {
  const validityState = input.validity;
  switch (true) {
    case validityState.valueMissing:
      return valueMissingError;

    default:
      return input.validationMessage;
  }
};
