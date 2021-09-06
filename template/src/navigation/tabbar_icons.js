// import { Images } from '../helpers/assets';
const home = require('../assets/images/tabIcons/home.png');
const account = require('../assets/images/tabIcons/account.png');

const ICONS = {
  HomeTab: home,
  ProfileTab: account,
};

const INDEXES = {
  HomeTab: 0,
  ProfileTab: 1,
};

const getTabIcon = (name, activeIndex) => {
  const obj = {
    icon: ICONS[name],
    opacity: INDEXES[name] === activeIndex ? 1 : 0.5,
  };

  return obj;
};

export default getTabIcon;
