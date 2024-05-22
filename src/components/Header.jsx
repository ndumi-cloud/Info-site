/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react"

function Header () {
        return(
          <main>
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
          </main>
        )
}

export default Header;