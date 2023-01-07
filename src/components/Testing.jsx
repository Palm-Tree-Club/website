import { useEffect, useState } from 'react';
import { getRemoteConfig, getBoolean, fetchAndActivate, getString } from 'firebase/remote-config';
import firebase from "../services/firebase";
import { getPerformance } from "firebase/performance";
import { getAnalytics } from "firebase/analytics";



export default function RemoteConfig(){
    const remoteConfig = getRemoteConfig(firebase);
    remoteConfig.settings.minimumFetchIntervalMillis = 10000;
    remoteConfig.defaultConfig = {}
    return remoteConfig;
}

// export default function Testing() {
//     const [testing, setTesting] = useState(null);
//     useEffect(() => {
//         getPerformance(firebase);
//         getAnalytics(firebase);
//         const remoteConfig = getRemoteConfig(firebase);
//         remoteConfig.settings.minimumFetchIntervalMillis = 10000;
//         remoteConfig.defaultConfig = {
//             testing: "false",
//             test: "test"
//         };
//         fetchAndActivate(remoteConfig).then(() => {
//             const testing = getBoolean(remoteConfig, "testing");
//             const test = getString(remoteConfig, "test");
//             setTesting(testing);
//             console.log(testing);
//             console.log(test);
//         })
//     }, []);
//     return (
//         <div>
//             <h1>{testing != null ? testing : "null"}</h1>
//         </div>
//     );
// }