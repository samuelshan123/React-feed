// toastManager.js
import Toast from "react-native-toast-message";

export const showToast = (type, head, body) => {
  Toast.show({
    type: type, // 'success', 'error', 'info'
    text1: head,
    text2: body,
    position: "top",
    visibilityTime: 3000, // duration in ms
    autoHide: true, // automatically hide the toast
  });
};

export default showToast;
