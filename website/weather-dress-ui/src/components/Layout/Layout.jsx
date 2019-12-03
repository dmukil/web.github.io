/**
 * Base layout for the Weather Dress App
 * Created on April 7, 2019
 *
 * @author Ralph Florent <r.florent@jacobs-university.de>
 */
import React, { Component } from 'react';

// Layout components
import { Header, Footer }  from './index';

/**
 * `Layout` Component definition
 */
export default class Layout extends Component {

    render() {

        return (
            <>
                <Header />

                <section className="main-content">
                    { this.props.children }
                </section>

                <Footer />
            </>
        );
    }
}