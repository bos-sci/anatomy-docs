import * as React from "react";

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="ads-breadcrumbs">
        <li className="ads-breadcrumb-item">
          <a href="grandparent">Grandparent Page</a>
        </li>
        <li className="ads-breadcrumb-item">
          <a href="parent">Parent Page</a>
        </li>
        <li className="ads-breadcrumb-item ads-breadcrumb-item-active" aria-current="page">Current Page</li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
