/**
 * `Slider` behaving like a carousel for the displaying of clothes
 *
 * Created on April 08, 2019
 * @author Ralph Florent <r.florent@jacobs-university.de>
 */

import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// import jacketImg from '../../../assets/img/jacket.jpg';
// import bootImg from '../../../assets/img/boots.png';
// import sweaterImg from '../../../assets/img/sweater.jpg';
/**
 * `Slider` Component definition
 */
export default class Slider extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
          index: 0,
          direction: null,
        };
      }

      handleSelect(selectedIndex, e) {
        this.setState({
          index: selectedIndex,
          direction: e.direction,
        });
      }

      render() {
        const { index, direction } = this.state;
        const baseUrl = `https://raw.githubusercontent.com/ralflorent/devops/master/resources/wd/img`;
        return (
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={`${baseUrl}/jacket.jpg`}
                alt="Jacket"
              />
              <Carousel.Caption>
                <h3>Jacket</h3>
                <p>Warm enough to deal with the cold.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={`${baseUrl}/sweater.jpg`}
                alt="sweater"
              />

              <Carousel.Caption>
                <h3>Sweater</h3>
                <p>Ideal for the given temperature</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={`${baseUrl}/boots.png`}
                alt="Boots"
              />

              <Carousel.Caption>
                <h3>Heavy shoes</h3>
                <p>This kind of boots will definitely help.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      }
}

