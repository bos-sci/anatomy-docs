import { SelectHTMLAttributes, useEffect, useState } from 'react';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  value: string;
}

let optionId = 0;

const SelectOption = ({ label, value, ...selectAttrs }: Props): JSX.Element => {
  const [optionIdValue, setOptionIdValue] = useState('');

  useEffect(() => {
    const idNum = ++optionId;
    setOptionIdValue('Option' + idNum);
  }, []);

  return (
    <option id={optionIdValue} value={value}>
      {value}
    </option>
  );
};
SelectOption.displayName = 'SelectOption';
export default SelectOption;
