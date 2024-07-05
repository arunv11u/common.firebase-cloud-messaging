# @arunvaradharajalu/common.firebase-cloud-messaging

[![npm version](https://badge.fury.io/js/%40arunvaradharajalu%2Fcommon.firebase-cloud-messaging.svg)](https://badge.fury.io/js/%40arunvaradharajalu%2Fcommon.firebase-cloud-messaging)
[![GitHub issues](https://img.shields.io/github/issues/arunv11u/common.firebase-cloud-messaging)](https://github.com/arunv11u/common.errors/firebase-cloud-messaging)
[![GitHub license](https://img.shields.io/github/license/arunv11u/common.firebase-cloud-messaging)](https://github.com/arunv11u/common.firebase-cloud-messaging/blob/master/LICENSE)

This package contains a wrapper for Firebase Cloud Messaging (FCM), making it easier to interact with FCM in your Node.js applications.

## Installation

To install the package, run:

```bash
npm install @arunvaradharajalu/common.firebase-cloud-messaging
```

## Usage

Here's a basic example of how to use this package:

```typescript
import { firebaseCloudMessaging } from "@arunvaradharajalu/common.firebase-cloud-messaging";

// Set your Firebase configuration
firebaseCloudMessaging.name = "your-fcm-app-name";
firebaseCloudMessaging.projectId = "your-project-id";
firebaseCloudMessaging.clientEmail = "your-client-email";
firebaseCloudMessaging.privateKey = "your-private-key";

// Initialize Firebase Cloud Messaging
firebaseCloudMessaging.init();

// Create a message to send
const message = {
  token: "recipient-fcm-token",
  notification: {
    title: "Hello",
    body: "World"
  }
};

// Send the message
firebaseCloudMessaging.send(message)
  .then(response => {
    console.log("Successfully sent message:", response);
  })
  .catch(error => {
    console.error("Error sending message:", error);
  });
```

## API

### Properties

- `name`: Sets the name of the Firebase application.
- `projectId`: Sets the project ID of your Firebase project.
- `clientEmail`: Sets the client email for Firebase authentication.
- `privateKey`: Sets the private key for Firebase authentication.
- `fcm`: Gets the initialized Firebase app instance.

### Methods

- `init()`: Initializes the Firebase app with the provided configuration.
- `send(message: FcmMessage, dryRun?: boolean): Promise<string>`: Sends a message to a device. Optionally performs a dry run (validation only).


## Errors

This package uses custom error classes from `@arunvaradharajalu/common.errors` for specific error scenarios:

- `FirebaseCloudMessagingConnectionError`: Thrown when FCM is not properly initialized before usage.

## Running Tests

To run the tests, use:

```bash
npm test
```

The test results will be generated in an HTML report with the title "FIrebase Cloud Messaging Test Report".

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for bug fixes, improvements, or new features.

## Author

Arun Varadharajalu

## License

This project is licensed under the ISC License.