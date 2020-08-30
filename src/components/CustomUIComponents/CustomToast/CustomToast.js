import React from "react";
import NotificationSystem from "react-notification-system";

//images
import { ReactComponent as ToastIcon } from "ASSETS/toast_checked.svg";

//style
import "./CustomToast.scss";

class CustomToast extends React.Component {
  notificationSystem = React.createRef();

  addNotification = () => {
    const notification = this.notificationSystem.current;
    notification.addNotification({
      level: "success",
      position: "bc",
      dismissible: "click",
      autoDismiss: "0",
      children: (
        <div>
          <div className="toast-message">
            <ToastIcon />
            <span className="px-2">{this.props.message}</span>
          </div>
        </div>
      ),
    });
  };

  render() {
    return (
      <div className="custom-toast">
        <NotificationSystem ref={this.notificationSystem} />
      </div>
    );
  }
}

export default CustomToast;
