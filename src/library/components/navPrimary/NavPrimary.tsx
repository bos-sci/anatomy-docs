import logo from "../../../assets/images/logo-anatomy.svg";
import Button from '../Button';
import IconChevronRight from '../icon/icons/IconChevronRight';
import './NavPrimary.scss';

const NavPrimary = (): JSX.Element => {
  return (
    <header>
      <a href="#mainContent" className="skip-link">Skip to main content</a>
      <nav className="nav-utility" aria-label="utility">
        <ul className="nav">
          <li className="nav-item">
            <a href="#demo" className="nav-link">Utility link</a>
          </li>
          <li className="nav-item">
            <a href="#demo" className="nav-link">Utility link</a>
          </li>
          <li className="nav-item">
            <a href="#demo" className="nav-link">Utility link</a>
          </li>
          <li className="nav-item">
            <a href="#demo" className="nav-link">Utility link</a>
          </li>
        </ul>
      </nav>
      <nav className="nav-primary" aria-label="primary">
        <div className="nav-primary-main">
          <ul className="nav">
            <li className="nav-item push-left">
              <a href="#demo" aria-label="Boston Scientific home page">
                <img src={logo} alt="Anatomy logo" />
              </a>
            </li>
            <li className="nav-item">
              <a href="#demo" className="nav-link">For healthcare professionals</a>
            </li>
            <li className="nav-item">
              <a href="#demo" className="nav-link active">For patients & caregivers</a>
            </li>
            <li className="nav-item">
              <a href="#demo" className="nav-link">About Boston Scientific</a>
            </li>
          </ul>
        </div>
        <div className="nav-primary-menu">
          <div className="nav-primary-menu-panels">
            <div className="nav-primary-menu-panel-custom">
              <h4>Navigation section</h4>
              <p className="body-subtle">Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.</p>
            </div>
            <ul className="nav nav-primary-menu-panel">
              <li className="nav-item">
                <a href="#demo" className="nav-link">Nav item</a>
              </li>
              <li className="nav-item">
                <a href="#demo" className="nav-link">Nav item</a>
              </li>
              <li className="nav-item-parent">
                <Button variant="subtle" className="nav-link">Nav item parent <IconChevronRight className="ads-icon-lg"/></Button>
                <ul className="nav nav-primary-menu-panel">
                  <li className="nav-item">
                    <a href="#demo" className="nav-link">Nested nav item</a>
                  </li>
                  <li className="nav-item">
                    <a href="#demo" className="nav-link">Nested nav item</a>
                  </li>
                  <li className="nav-item">
                    <a href="#demo" className="nav-link">Nested nav item</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#demo" className="nav-link">Nav item</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        {/* <div className="search">
          <input type="search" aria-label="Search" placeholder="Search" />
          <button type="submit">
            🔎
          </button>
        </div>
      </div> */}
    </header>
  );
}

export default NavPrimary;