fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew cask install fastlane`

# Available Actions
## iOS
### ios setup
```
fastlane ios setup
```
Sets up project
### ios test
```
fastlane ios test
```
Runs all the tests
### ios coverage
```
fastlane ios coverage
```
Runs all the tests and generates a coverage report
### ios beta
```
fastlane ios beta
```
Submit a new Beta Build to Apple TestFlight
### ios deploy
```
fastlane ios deploy
```
Deploy a new version to the App Store

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
