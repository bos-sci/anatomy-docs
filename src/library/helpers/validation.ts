export const errorValueMissing = 'This is an example of an error message for a required form control.';

export const getValidationMessage = (input: HTMLInputElement): string => {
  const validityState = input.validity;
  switch (true) {
    case validityState.valueMissing:
      return errorValueMissing;

    default:
      return input.validationMessage;
  }
};

export const getTextareaValidationMessage = (input: HTMLTextAreaElement): string => {
  const validityState = input.validity;
  switch (true) {
    case validityState.valueMissing:
      return errorValueMissing;

    default:
      return input.validationMessage;
  }
};
