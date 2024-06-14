import { App } from "firebase-admin/app";
import { FcmMessage } from "../fcm-message";

export abstract class CloudMessaging {
	abstract set name(name: string);
	abstract set projectId(projectId: string);
	abstract set clientEmail(clientEmail: string);
	abstract set privateKey(privateKey: string);
	abstract get fcm(): App;

	abstract init(): void;
	abstract send(message: FcmMessage): Promise<string>;
	abstract send(message: FcmMessage, dryRun: boolean): Promise<string>;
}
