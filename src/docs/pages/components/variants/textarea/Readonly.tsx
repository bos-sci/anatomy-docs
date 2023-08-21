import Textarea from 'library/components/Textarea';
import Example from 'docs/shared/components/Example';

const ReadonlyTextarea = (): JSX.Element => {
  return (
    <Example>
      <div className="bsds-form-control">
        <Textarea label="Readonly textarea" readOnly />
      </div>
      <div className="bsds-form-control">
        <Textarea label="Readonly textarea" value="Value" readOnly />
      </div>
    </Example>
  );
};

export default ReadonlyTextarea;
