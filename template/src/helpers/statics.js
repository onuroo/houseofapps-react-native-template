import {Platform, Dimensions} from 'react-native';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
export const IS_ANDROID = Platform.OS === 'android';
let calculatedScale;

if (IS_ANDROID) {
  if (WIDTH <= 414) {
    // Android smartphones
    calculatedScale = WIDTH / 414;
  } else {
    // Android tablets
    calculatedScale = 1;
  }
} else {
  switch (WIDTH) {
    // iPhone 4, 4S, 5, 5S
    case 320:
      // calculatedScale = 0.735;
      calculatedScale = 0.790;
      break;
    // iPhone 6, 6S
    case 375:
      calculatedScale = 0.902;
      break;
    // iPhone 6 plus, 6S plus
    case 414:
      calculatedScale = 1;
      break;
    default:
      calculatedScale = 1;
  }
}

const scale = calculatedScale;
const size = pixel => {
  return Math.ceil(pixel * calculatedScale);
};

export {scale, size};
