import Head from "next/head";
import Link from "next/link";
import "../styles/styles.sass";

export default ({ children }) => {
  /*
   * Added this to toggle the is-active class. See:
   *
   * https://bulma.io/documentation/components/navbar/#navbar-menu
   * https://github.com/jgthms/bulma/issues/856
   */
  const toggleStyles = event => {
    document.querySelector("#burger").classList.toggle("is-active");
    document.querySelector("#navbarmenu").classList.toggle("is-active");
  };

  return (
    <div>
      <Head>
        <title>safarslife</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item">
            </a>
            <a
              id="burger"
              onClick={toggleStyles}
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarmenu"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="navbarmenu" className="navbar-menu container">
            <div className="navbar-start">
              <Link prefetch href="/">
                <a className="navbar-item">HOME</a>
              </Link>
              <Link prefetch href="/aboutme">
                <a className="navbar-item">ABOUT ME</a>
              </Link>
              <Link prefetch href="/contacts">
                <a className="navbar-item">CONTACTS</a>
              </Link>
              <Link prefetch href="/newpost">
                <a className="navbar-item">NEW POST</a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      {children}
    </div>
  );
};
