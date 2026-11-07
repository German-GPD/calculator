# Calculator

A lightweight everyday calculator by **GERMAN'$ CODE TEAM**.

## Platforms

- **Web:** static HTML/CSS/JavaScript, suitable for GitHub Pages.
- **Android:** Kotlin application that loads the bundled web app through Android WebView.
- **Offline:** the web assets are packaged inside the APK; no network connection is required for calculations.

## Features

- Addition, subtraction, multiplication and division
- Parentheses, decimals, unary signs and percentages
- Live expression preview and calculation history
- Local history storage on the device
- Keyboard input on desktop
- Automatic light/dark theme based on the system
- Selectable accent colors
- Russian and English interface
- Responsive layout

## Run the web version

Open `index.html` in a browser or serve the repository with any static web server.

For GitHub Pages, select the `main` branch and `/(root)` as the publishing source.

## Build Android APK

Open the `android/` directory in Android Studio, allow Gradle sync, then use:

- **Build → Build Bundle(s) / APK(s) → Build APK(s)**

Or from the `android/` directory:

```bash
gradle assembleDebug
```

The debug APK is generated at:

`android/app/build/outputs/apk/debug/app-debug.apk`

A release APK should be built with your own signing key before distribution.

## Project structure

```text
calculator/
├── index.html
├── README.md
└── android/
    ├── settings.gradle.kts
    ├── build.gradle.kts
    └── app/
        ├── build.gradle.kts
        └── src/main/
            ├── AndroidManifest.xml
            ├── java/com/germangpd/calculator/MainActivity.kt
            └── assets/index.html
```

## Credits and license

© 2026 German — GERMAN'$ CODE TEAM.

Unless stated otherwise, the project source is provided under **CC BY-NC 4.0**:
https://creativecommons.org/licenses/by-nc/4.0/
