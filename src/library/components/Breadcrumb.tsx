// TODO:
// remove hardcoded english aria-label
// add warning/error for href="#"

interface Crumb {
  name: string;
  href: string;
}

interface Props {
  crumbs: Crumb[];
  currentPage: string;
}

const Breadcrumb = ({ crumbs, currentPage }: Props): JSX.Element => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="ads-breadcrumbs">
        {crumbs.map(crumb => (
          <li key={`crumb${crumb.name}`} className="ads-breadcrumb-item">
            <a href={crumb.href} className="ads-breadcrumb-link">{crumb.name}</a>
          </li>
        ))}
        <li className="ads-breadcrumb-item ads-breadcrumb-item-active" aria-current="page">{currentPage}</li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;