import * as fcmAdmin from "firebase-admin";
import { FirebaseCloudMessagingConnectionError } from "@arunvaradharajalu/common.errors";
import { CloudMessaging } from "./types";
import { FcmMessage } from "./fcm-message";



class FirebaseCloudMessaging implements CloudMessaging {
	private _name: string | null = null;
	private _projectId: string | null = null;
	private _clientEmail: string | null = null;
	private _privateKey: string | null = null;
	private _fcm: fcmAdmin.app.App | null = null;

	set name(name: string) {
		this._name = name;
	}

	set projectId(projectId: string) {
		this._projectId = projectId;
	}

	set clientEmail(clientEmail: string) {
		this._clientEmail = clientEmail;
	}

	set privateKey(privateKey: string) {
		this._privateKey = privateKey;
	}

	get fcm(): fcmAdmin.app.App {
		if (!this._fcm) throw new FirebaseCloudMessagingConnectionError("Fcm must be initialized before retrieving it");

		return this._fcm;
	}

	init(): void {
		if (!this._name)
			throw new FirebaseCloudMessagingConnectionError("FCM, name must be set before initialization");

		if (!this._projectId)
			throw new FirebaseCloudMessagingConnectionError("FCM, project id must be set before initialization");

		if (!this._clientEmail)
			throw new FirebaseCloudMessagingConnectionError("FCM, client email must be set before initialization");

		if (!this._privateKey)
			throw new FirebaseCloudMessagingConnectionError("FCM, private key must be set before initialization");

		if (!this._fcm) {
			this._fcm = fcmAdmin.initializeApp({
				credential: fcmAdmin.credential.cert({
					projectId: this._projectId,
					clientEmail: this._clientEmail,
					privateKey: this._privateKey
				})
			}, this._name);
		}
	}

	async send(message: FcmMessage): Promise<string>;
	async send(message: FcmMessage, dryRun?: boolean): Promise<string> {
		if (!this._fcm)
			throw new FirebaseCloudMessagingConnectionError("FCM must be initialized before sending message");

		try {
			const result = await this._fcm.messaging().send(message, dryRun);

			return result;
		} catch (error: any) {
			// if (error.errorInfo.code === "messaging/registration-token-not-registered")
			// 	await deleteExpiredFcmToken(message.token);
			throw error;
		}

	}

}

const firebaseCloudMessaging = new FirebaseCloudMessaging();

export {
	FirebaseCloudMessaging,
	firebaseCloudMessaging
};