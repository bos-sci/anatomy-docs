export const getValidationMessage = (input: HTMLInputElement): string => {
  const validityState = input.validity;
  switch (true) {
    case validityState.valueMissing:
      return 'This is an example of an error message for a required form control.';

    default:
      return input.validationMessage;
  }
}
