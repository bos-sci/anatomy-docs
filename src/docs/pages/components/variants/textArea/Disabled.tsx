import TextArea from 'library/components/TextArea';
import Example from 'docs/shared/components/Example';

const DisabledTextArea = (): JSX.Element => {
  return (
    <Example>
      <div className="bsds-form-control">
        <TextArea label="Disabled textarea" disabled />
      </div>
      <div className="bsds-form-control">
        <TextArea label="Disabled textarea" value="Value" disabled />
      </div>
    </Example>
  );
};

export default DisabledTextArea;
