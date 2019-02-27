import React from "react";
import {Notification} from "../../feature";
import LoadingNotifier from "../singleNotificationScreen/LoadingNotifier";
import {SnackbarProvider} from "notistack";
import {Button, withStyles} from "@material-ui/core";


const styles = {
    success: {
        backgroundColor: '#20C0A1'
    },
    error: {
        backgroundColor: '#E3273B'
    }
}

class NotificationsScreen extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <SnackbarProvider
        maxSnack={2}
        classes={{
          variantSuccess: classes.success,
          variantError: classes.error
        }}
        action={
          <Button
            style={{
              color: 'white'
            }}
            variant='outlined'
            size='small'
          >
            {'Dismiss'}
          </Button>
        }
      >
        <React.Fragment>
          <Notification>
            {({
              loading,
              notification,
            }) => {
              return (
                <LoadingNotifier
                  loading={loading}
                  notification={notification}
                />
              );
            }}
          </Notification>
          {this.props.children}
        </React.Fragment>
      </SnackbarProvider>
    );
  }
}

export default withStyles(styles)(NotificationsScreen);
