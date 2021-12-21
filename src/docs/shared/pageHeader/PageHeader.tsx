import './PageHeader.scss';

interface Props {
  name: string;
  publishedAt: string;
}

const PageHeader = (props: Props): JSX.Element => {
  return (
    <div className="page-header">
      <h1 className="page-title">{props.name}</h1>
      <dl className="page-publish-date body-subtle">
        <dt>Last Updated:</dt>
        <dd>{props.publishedAt ? new Date(props.publishedAt).toLocaleDateString() : 'Draft'}</dd>
      </dl>
    </div>
  );
}

export default PageHeader;