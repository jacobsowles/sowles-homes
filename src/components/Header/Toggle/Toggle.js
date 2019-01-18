import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PureComponent } from 'react';
import { Navbar } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import './Toggle.scss';

class Toggle extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  render() {
    const { isActive } = this.state;

    return (
      <Navbar.Toggle
        onClick={() =>
          this.setState({
            isActive: !isActive,
          })
        }
      >
        <CSSTransition
          timeout={{ enter: 1000, exit: 1000 }}
          classNames="fade"
          key="bars"
          in={!isActive}
          unmountOnExit
        >
          <FontAwesomeIcon icon={['far', 'bars']} />
        </CSSTransition>

        <CSSTransition
          timeout={{ enter: 1000, exit: 1000 }}
          classNames="fade"
          key="times"
          in={isActive}
          unmountOnExit
        >
          <FontAwesomeIcon icon={['far', 'times']} />
        </CSSTransition>
      </Navbar.Toggle>
    );
  }

  toggle = () => {
    this.setState({
      showBars: !this.state.showBars,
      showTimes: !this.state.showTimes,
    });
  };
}

export default Toggle;
