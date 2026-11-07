# Calculator

A lightweight everyday calculator by **GERMAN'$ CODE TEAM**.

## Platforms

- **Web:** static HTML/CSS/JavaScript, suitable for GitHub Pages.
- **Android:** Kotlin application that loads the bundled web app through Android WebView.
- **Offline:** the web assets are packaged inside the APK; no network connection is required for calculations.

## Features

- Addition, subtraction, multiplication and division
- Parentheses, decimals, unary signs, percentages and powers
- Common-fraction display with mixed-number formatting (toggle `a/b`)
- Scientific functions: square/cube-style powers, factorial, square root, trigonometry (degrees), logarithms, absolute value, π and e
- Reciprocal, square, square root and sign toggle
- Memory keys (MC, MR, M+, M−)
- Live expression preview, copy result and calculation history
- Local history and preferences stored on the device
- Keyboard input on desktop; touch-friendly controls on mobile
- Automatic light/dark theme, with optional manual override
- Five selectable accent colors; Russian and English interface
- Responsive layout and offline Android WebView assets

## Safety and calculation limits

- Expressions are parsed by a small arithmetic parser; JavaScript `eval` and dynamic code execution are not used.
- Input is limited to 256 characters, 128 tokens and 32 nested parentheses. Factorials are limited to integers from 0 to 170; invalid logarithms, roots, tangents and non-finite results are rejected.
- Division by zero and non-finite results are rejected.
- History and preferences remain in local browser storage; no account, analytics, or remote API is used.

## Run the web version

Open `index.html` in a browser or serve the repository with any static web server.

For GitHub Pages, select the `main` branch and `/(root)` as the publishing source.

## Build Android APK

Open the `android/` directory in Android Studio, allow Gradle sync, then use:

- **Build → Build Bundle(s) / APK(s) → Build APK(s)**

Or download the automatically built debug APK from the **Build Android APK** workflow's Artifacts section in GitHub Actions. The workflow runs on pushes to `main` and can also be started manually (`workflow_dispatch`). Artifacts are retained for 30 days.

For a local build from the `android/` directory, install Gradle 8.11.1 and run:

```bash
gradle --no-daemon assembleDebug
```

The debug APK is generated at `android/app/build/outputs/apk/debug/app-debug.apk`.

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
