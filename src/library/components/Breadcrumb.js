const Breadcrumb = props => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="ads-breadcrumbs">
        {props.crumbs.map(crumb => (
          <li key={`crumb${crumb.name}`} className="ads-breadcrumb-item">
            <a href={crumb.href}>{crumb.name}</a>
          </li>
        ))}
        <li className="ads-breadcrumb-item ads-breadcrumb-item-active" aria-current="page">{props.currentPage}</li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;