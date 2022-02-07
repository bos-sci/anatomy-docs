import { FormEvent, FormHTMLAttributes, ReactNode } from 'react';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const Form = ({ children, onInvalid, ...formAttrs }: Props): JSX.Element => {

  const handleInvalid = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onInvalid) {
      onInvalid(e);
    }
  }

  return <form className="ads-form" onInvalid={handleInvalid} {...formAttrs}>{children}</form>;
}

export default Form;