import NavPrimary from './shared/nav-primary';

const Layout = ({ location, children, navItems }) => {
  return (
    <div className="grid-container">
      <NavPrimary />
      <div className="container-fluid container-lg app-body">
        <div className="row">
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
