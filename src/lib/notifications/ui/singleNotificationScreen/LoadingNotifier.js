import * as React from 'react';
import Spinner from '../../../spinner';

class LoadingNotifier extends React.Component {
  render() {
    const {loading} = this.props;

    return (
      <React.Fragment>
        <Spinner open={loading} />
      </React.Fragment>
    );
  }
}

export default LoadingNotifier;
