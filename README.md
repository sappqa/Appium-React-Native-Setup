# Overview

Appium is an HTTP based UI testing framework for web, mobile, and hybrid applications. Appium helps us confirm successful navigational functionality by allowing us to automate the navigation process.

# Setup

1. `npm install`
2. `npx pod-install`
3. `npm run appium-doctor-android`&nbsp; and troubleshoot any issues.
4. `npm run appium-doctor-ios`&nbsp; and troubleshoot any issues.

# Usage

Simply put, Appium is a server that can communicate with your iOS/Android emulator. As such, we must launch the Appium server and the desired emulator(s).

- In a separate terminal, run `npm run appium-server`
- In the original terminal, run `npm run android`&nbsp; to launch the app in the Android emulator
- `npm run ios`&nbsp; to launch the app in the iOS emulator.

To run the tests, simply enter:

- `npm run appium-test -- --os=android` &nbsp; or &nbsp; `npm run appium-test -- --os=ios`

By default, the Android tests will be run.

# Issues/Troubleshooting

- Carthage can be installed with the command `brew install carthage`

- Your .bashrc or .zshrc file should contain the following environment variables to satisfy appium-doctor-android requirements.

```
export ANDROID_HOME=$HOME/Library/Android/sdk
export JAVA_HOME=/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home
export PATH=$PATH:$JAVA_HOME/bin
```
