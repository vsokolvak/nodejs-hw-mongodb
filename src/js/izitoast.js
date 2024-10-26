import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

export const showModalMsg = (text, color = "red") => {
    iziToast.show({
      message: text,
      messageColor: 'white',
      messageSize: '26',
      messageLineHeight: '',
      backgroundColor: '',
      color: color, // blue, red, green, yellow
      close: true,
      closeOnEscape: true,
      closeOnClick: true,
      position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
      timeout: 4000,
    });
}