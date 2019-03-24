import React from "react";
import Notification from "../../feature/NotificationsFeature/Notification";
import Spinner from "../../../spinner";

const LoadingNotifier = () => {
    return (
        <React.Fragment>
          <Notification>
              {({
                    loading,
                }) => {
                  return (
                      <Spinner open={loading} />
                  );
              }}
          </Notification>

        </React.Fragment>
    );
};

export default LoadingNotifier;

