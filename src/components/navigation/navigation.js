import { load, query } from '../utils';

export const loadAbout = () => {
  Promise.all([
      load('./pages/about/about.html'),
      load('./components/navigation/navigation.html')
    ])
    .then((data) => {
      query('#app').innerHTML = data[0];
      query('#navigation').innerHTML = data[1];
      componentHandler.upgradeAllRegistered();
    });
};
