import * as React from 'react';
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
import {removeNotification} from "../../../redux/actions/notifications";
import {KEY_LOADING} from "../../../constants/keys";
import {extractor} from "../../../utils/util";


class Notification extends React.Component {
  render() {
    const {
      children,
      notifications,
      enqueueSnackbar
    } = this.props;

    notifications.forEach((item) => {
      setTimeout(() => {
        enqueueSnackbar(`${item.message}`, {
          anchorOrigin: {
            horizontal: 'center',
            vertical: 'bottom'
          },
          variant: item.type
        });
      }, 250);
      this.props.removeNotification(item.id);
    });

    return children({
      loading: this.props.loading
    });
  }
}

const mapStateToProps = (state) => ({
  loading: extractor(state, KEY_LOADING),
  notifications: state.nfs
});

export default connect(mapStateToProps, {removeNotification})(withSnackbar(Notification));
