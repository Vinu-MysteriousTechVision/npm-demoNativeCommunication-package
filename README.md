# npm-demoNativeCommunication-package
React-native npm package

Usage
getModuleList() fetches list of native modules. 


import CustomModule from 'npm-demonativecommunication-package';

    CustomModule.RNDeviceInfo.getModuleList((error, data) => {
        if (error) {
          alert("Result: " + error);
        } else {
          alert("Result: " + JSON.stringify(data));
        }
    });

