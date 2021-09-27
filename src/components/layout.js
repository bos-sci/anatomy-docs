import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import NavSecondary from "./shared/nav-secondary/nav-secondary";
import NavPrimary from './shared/nav-primary';

const Layout = ({ location, children, navItems }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="grid-container" data-is-root-path={isRootPath}>
      <NavPrimary isRootPath={isRootPath} />
      <div className="container-fluid container-lg app-body">
        <div className="row">
          <div className="col-12 col-lg-3 col-xl-2">
            {navItems && <NavSecondary navItems={navItems} />}
          </div>
          <div className="col-12 col-lg-9 col-xl-10">
            <main>
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
