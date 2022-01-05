export const getValidationMessage = (input: HTMLInputElement): string => {
  const validityState = input.validity;
  switch (true) {
    case validityState.valueMissing:
      return 'Please fill out this field.';

    default:
      return input.validationMessage;
  }
}
