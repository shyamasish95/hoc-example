import React from 'react';
import UpdatedComponent from './withCounter';

class ButtonCounter extends React.Component {
  render() {
    const { count, incrementCount } = this.props;
    return <button onClick={incrementCount}>{count}</button>;
  }
}
export default UpdatedComponent(ButtonCounter);
