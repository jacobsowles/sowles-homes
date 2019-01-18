import classNames from 'classnames';
import React, { PureComponent } from 'react';
import { Navbar } from 'react-bootstrap';

import './Toggle.scss';

class Toggle extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      isFirstLoad: true,
    };
  }

  render() {
    let className = undefined;

    if (this.state.isActive) {
      className = 'active';
    } else {
      // don't want the first load to animate, so don't give first load the trigger class name
      if (!this.state.isFirstLoad) {
        className = 'inactive';
      }
    }

    return (
      <Navbar.Toggle onClick={this.toggle}>
        <div className={classNames('toggle-icon', className)} />
      </Navbar.Toggle>
    );
  }

  toggle = () => {
    this.setState({
      isActive: !this.state.isActive,
      isFirstLoad: false,
    });
  };
}

export default Toggle;
