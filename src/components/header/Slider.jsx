import React, { Component } from 'react'

import M from 'materialize-css'

export default class Slider extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.slider');
            M.Slider.init(elems, {});
        });
    }

    render() {
        return (
            <div className="slider">
                <ul className="slides">
                    <li>
                        <img src="images/background1.jpg" alt="" />
                        <div className="caption center-align">
                            <h3>This is our big Tagline!</h3>
                            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img src="/images/background2.jpg" alt="" />
                        <div className="caption left-align">
                            <h3>Left Aligned Caption</h3>
                            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img src="/images/background3.jpg" alt="" />
                        <div className="caption right-align">
                            <h3>Right Aligned Caption</h3>
                            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img src="/images/background1.jpg" alt="" />
                        <div className="caption center-align">
                            <h3>This is our big Tagline!</h3>
                            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}