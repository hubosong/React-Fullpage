import React, { Component } from 'react'

import M from 'materialize-css'

/*
se quiser usar jquery ao inves de javascript, so instalar
npm install jquery
import $ from 'jquery';
*/

export default class Nav extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems, {});
        });

        /*
        $(document).ready(function () {
         // nav
         $('.sidenav').sidenav();
 
     });
     */
    }

    render() {
        return (
            <nav className="purple darken-4">
                <div className="container">
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo">Logo</a>
                        <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul class="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">Javascript</a></li>
                            <li><a href="mobile.html">Mobile</a></li>
                        </ul>
                        <ul className="sidenav" id="mobile-demo">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">Javascript</a></li>
                            <li><a href="mobile.html">Mobile</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}