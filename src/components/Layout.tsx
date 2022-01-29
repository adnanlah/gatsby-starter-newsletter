import * as React from 'react'
import { Link } from 'gatsby'

const Layout: React.FunctionComponent = ({children}) => {
    return (
        <div>
            <header>
                <nav>
                    <h3>
                        <Link to="/">Gatsby Starter Newsletter</Link>
                    </h3>
                    <h5>
                        <Link to="/issues">All issues</Link>
                    </h5>
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                © {new Date().getFullYear()}, Built by <a href="https://www.twitter.com/adencodes">Adnan Lahrech</a>, with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>
        </div>
    )
}

export default Layout