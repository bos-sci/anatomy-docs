const PageHeader = (props) => {
  return (
    <>
      <h1 className="page-title">{props.name}</h1>
      <dl>
        <dt>Last Updated</dt>
        <dd>{new Date(props.publishedAt).toLocaleDateString()}</dd>
      </dl>
    </>
  );
}

export default PageHeader;