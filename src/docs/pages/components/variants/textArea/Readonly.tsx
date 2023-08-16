import TextArea from 'library/components/TextArea';
import Example from 'docs/shared/components/Example';

const ReadonlyTextArea = (): JSX.Element => {
  return (
    <Example>
      <div className="bsds-form-control">
        <TextArea label="Readonly textarea" readOnly />
      </div>
      <div className="bsds-form-control">
        <TextArea label="Readonly textarea" value="Value" readOnly />
      </div>
    </Example>
  );
};

export default ReadonlyTextArea;
