# bloompub-viewer-RN

> A cross-platform mobile viewer for bloomPUB books

## Building

```bash
# install dependencies
yarn

# serve with hot reload
yarn start
```

(It should hot reload if you edit existing files, but if you change the file structure, hot reloading might not work, restart the server if necessary)

# Running the app on your phone

## One-Time Setup for Android

-   FYI, bloompub-viewer requires custom native code, so you cannot use the default Expo Go app on your device.
-   Instead, download a custom build APK from the Expo account.
-   Install it (there may be a ton of security warnings to dismiss since you're installing an APK outside of the play store and from an unknown developer) and open the app.
-   On dev machine, run "yarn start"
-   (If needed) Modify Network settings according to https://stackoverflow.com/questions/47966887/expo-lan-configuration-doesnt-work-for-new-reactnative-project (Ensure "Private" not "Public", change IPv4 Interface Metric to 5 instead of Auto or 4.
-   Re-scan the QR code. (if needed, Restart server and restart Expo app too)

## One-Time Setup for iOS

-   Probably not supported until we pay for an Apple Developer account?

## Build loop

-   Ensure Expo server running on dev machine (yarn start)
-   Open the custom Expo app on phone
-   Using your phone's camera or QR Scanner, scan the QR code that the Expo server on the dev machine printed out.
    Or, if you've already done this, just select it from the list of recents
-   If working, it should say "Bundling" and shortly thereafter the app should start running on the phone.

## Troubleshooting

-   Error in network response: Ensure network settings correct (see one-time setup)
-   "Cannot connect to Metro": It times out really quickly. Reload the app on your phone.

## Debugging bloom-player

-   Go to a bloom-player repo at the desired revision.
-   yarn build-dev. (This builds an unminified version)
-   Copy the contents of bloom-player's dist/bloomPlayer.js to this repo's dist/bloomPlayerMin.jsAsset
-   Reload the app
-   Edit this file (dist/bloomPlayerMin.jsAsset) as needed for debugging purposes.
-   Reload the app every time this file changes.
-   Note: If you re-run yarn in this repo, you will need to rerun these steps.

## Creating new custom build

-   It's only necessary to do an EAS build if new custom native modules are needed.
-   Otherwise, just doing "yarn start" from your dev machine is sufficient to deliver simpler changes like Typescript code changes or adding a new JS-only module.
-   yarn global add eas-cli
-   Run "eas build --profile development --platform android"
-   TODO: Figure out iOS
-   Further Reading: https://docs.expo.dev/development/create-development-builds/
