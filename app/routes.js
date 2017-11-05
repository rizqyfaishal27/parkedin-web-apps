// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'login',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Login/reducer'),
          import('containers/Login/sagas'),
          import('containers/Login'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, saga, component]) => {
          injectReducer('login', reducer.default);
          injectSagas(saga.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/profile',
      name: 'profile',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Profile/reducer'),
          import('containers/Profile/sagas'),
          import('containers/Profile'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, saga, component]) => {
          injectReducer('profile', reducer.default);
          injectSagas(saga.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/building-map',
      name: 'buildingMap',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/BuildingMap/reducer'),
          import('containers/BuildingMap/sagas'),
          import('containers/BuildingMap'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, saga, component]) => {
          injectReducer('buildingMap', reducer.default);
          injectSagas(saga.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/building-info',
      name: 'buildingInfo',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/BuildingInfo/reducer'),
          import('containers/BuildingInfo/sagas'),
          import('containers/BuildingInfo'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, saga, component]) => {
          injectReducer('buildingInfo', reducer.default);
          injectSagas(saga.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/tap',
      name: 'tap',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Tap/reducer'),
          import('containers/Tap/sagas'),
          import('containers/Tap'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, saga, component]) => {
          injectReducer('tap', reducer.default);
          injectSagas(saga.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/pin-code',
      name: 'pincode',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Pincode/reducer'),
          import('containers/Pincode/sagas'),
          import('containers/Pincode'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, saga, component]) => {
          injectReducer('pincode', reducer.default);
          injectSagas(saga.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/recommendation',
      name: 'recommendation',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Recommendation/reducer'),
          import('containers/Recommendation/sagas'),
          import('containers/Recommendation'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, saga, component]) => {
          injectReducer('recommendation', reducer.default);
          injectSagas(saga.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/parking-lot',
      name: 'parkingLot',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ParkingLot/reducer'),
          import('containers/ParkingLot/sagas'),
          import('containers/ParkingLot'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, saga, component]) => {
          injectReducer('parkingLot', reducer.default);
          injectSagas(saga.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/parking-detail',
      name: 'parkingDetail',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ParkingDetail/reducer'),
          import('containers/ParkingDetail/sagas'),
          import('containers/ParkingDetail'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, saga, component]) => {
          injectReducer('parkingDetail', reducer.default);
          injectSagas(saga.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/parking-history',
      name: 'parkingHistory',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ParkingHistory/reducer'),
          import('containers/ParkingHistory/sagas'),
          import('containers/ParkingHistory'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, saga, component]) => {
          injectReducer('parkingHistory', reducer.default);
          injectSagas(saga.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/redeem-points',
      name: 'redeemPoints',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/RedeemPoints/reducer'),
          import('containers/RedeemPoints/sagas'),
          import('containers/RedeemPoints'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, saga, component]) => {
          injectReducer('redeemPoints', reducer.default);
          injectSagas(saga.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
