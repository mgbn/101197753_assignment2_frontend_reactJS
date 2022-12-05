import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div style={{color: "white"}}>Employee Management App - Assignment2- Mustafa izci- 101197753</div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header