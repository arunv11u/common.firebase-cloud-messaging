/* eslint-disable max-classes-per-file */

class AndroidFcmOptions {
	analyticsLabel: string | undefined = undefined;
}

class AndroidMessage {
	collapseKey: string | undefined = undefined;
	data: { [key: string]: string } | undefined = undefined;
	fcmOptions: AndroidFcmOptions = new AndroidFcmOptions();
	notification: AndroidNotification = new AndroidNotification();
	priority: AndroidConfigPriorities | undefined = undefined;
	restrictedPackageName: string | undefined = undefined;
	ttl: number | undefined = undefined;
}

class AndroidNotificationLightSettings {
	color: string;
	lightOffDurationMillis: number;
	lightOnDurationMillis: number;

	constructor(
		color: string,
		lightOffDurationMillis: number,
		lightOnDurationMillis: number
	) {
		this.color = color;
		this.lightOffDurationMillis = lightOffDurationMillis;
		this.lightOnDurationMillis = lightOnDurationMillis;
	}
}

enum AndroidMessagePriorities {
	high = "high",
	min = "min",
	low = "low",
	default = "default",
	max = "max"
}

enum AndroidNotificationVisibilities {
	private = "private",
	public = "public",
	secret = "secret"
}

enum AndroidConfigPriorities {
	normal = "normal",
	high = "high"
}

class AndroidNotification {
	body: string | undefined = undefined;
	bodyLocArgs: string[] = [];
	bodyLocKey: string | undefined = undefined;
	channelId: string | undefined = undefined;
	clickAction: string | undefined = undefined;
	color: string | undefined = undefined;
	defaultLightSettings = false;
	defaultSound = false;
	defaultVibrateTimings = false;
	eventTimestamp: Date = new Date();
	icon: string | undefined = undefined;
	imageUrl: string | undefined = undefined;
	lightSettings: AndroidNotificationLightSettings | undefined = undefined;
	localOnly = false;
	notificationCount: number;
	priority: AndroidMessagePriorities | undefined = undefined;
	sound: string | undefined = undefined;
	sticky = false;
	tag: string | undefined = undefined;
	ticker: string | undefined = undefined;
	title: string | undefined = undefined;
	titleLocArgs: string[] = [];
	titleLocKey: string | undefined = undefined;
	vibrateTimingsMillis: number[] | undefined = undefined;
	visibility: AndroidNotificationVisibilities =
		AndroidNotificationVisibilities.private;
}

class ApnsFcmOptions {
	analyticsLabel: string | undefined = undefined;
	imageUrl: string | undefined = undefined;
}

class ApnsPayloadApsAlert {
	actionLocKey: string | undefined = undefined;
	body: string | undefined = undefined;
	launchImage: string | undefined = undefined;
	locArgs: string[] = [];
	locKey: string | undefined = undefined;
	subtitle: string | undefined = undefined;
	subtitleLocArgs: string[] = [];
	subtitleLocKey: string | undefined = undefined;
	title: string | undefined = undefined;
	titleLocArgs: string[] = [];
	titleLocKey: string | undefined = undefined;
}

class ApnsPayloadApsCriticalSound {
	name: string;
	critical: boolean;
	volume: number;

	constructor(
		name: string,
		critical: boolean,
		volume: number
	) {
		this.name = name;
		this.critical = critical;
		this.volume = volume;
	}
}

class ApnsPayloadAps {
	alert: ApnsPayloadApsAlert = new ApnsPayloadApsAlert();
	badge: number | undefined = undefined;
	category: string | undefined = undefined;
	contentAvailable = false;
	mutableContent = false;
	sound: ApnsPayloadApsCriticalSound | undefined = undefined;
	threadId: string | undefined = undefined;
}

class ApnsPayload {
	aps: ApnsPayloadAps = new ApnsPayloadAps();
}

class ApnsMessage {
	fcmOptions: ApnsFcmOptions = new ApnsFcmOptions();
	headers: { [key: string]: string; } | undefined = undefined;
	payload: ApnsPayload = new ApnsPayload();
}

class FcmOptions {
	analyticsLabel: string | undefined = undefined;
}

class FcmNotification {
	body: string | undefined = undefined;
	imageUrl: string | undefined = undefined;
	title: string | undefined = undefined;
	click_action: string | undefined;
}

class WebpushFcmOptions {
	link: string | undefined = undefined;
}

class WebpushNotificationAction {
	action: string;
	title: string;
	icon: string | undefined = undefined;
}

enum WebpushNotificationDirections {
	auto = "auto",
	ltr = "ltr",
	rtl = "rtl"
}

class FcmWebpushNotification {
	actions: WebpushNotificationAction[] = [];
	badge: string | undefined = undefined;
	body: string | undefined = undefined;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any;
	dir: WebpushNotificationDirections | undefined = undefined;
	icon: string | undefined = undefined;
	image: string | undefined = undefined;
	lang: string | undefined = undefined;
	renotify = false;
	requireInteraction = false;
	silent = false;
	tag: string | undefined = undefined;
	timestamp: number | undefined = undefined;
	title: string | undefined = undefined;
	vibrate: number | number[] | undefined = undefined;
}

class FcmWebpush {
	data: { [key: string]: string; } | undefined = undefined;
	fcmOptions: WebpushFcmOptions = new WebpushFcmOptions();
	headers: { [key: string]: string; } | undefined = undefined;
	notification: FcmWebpushNotification = new FcmWebpushNotification();
}

class FcmMessage {
	token: string;
	condition: string | undefined = undefined;
	topic: string | undefined = undefined;
	android: AndroidMessage = new AndroidMessage();
	apns: ApnsMessage = new ApnsMessage();
	data: { [key: string]: string; };
	fcmOptions: FcmOptions = new FcmOptions();
	notification: FcmNotification = new FcmNotification();
	webpush: FcmWebpush = new FcmWebpush();

	constructor(token: string, data: { [key: string]: string; }) {
		this.token = token;
		this.data = data;
	}
}

export {
	FcmMessage,
	AndroidNotificationLightSettings,
	AndroidMessagePriorities,
	AndroidNotificationVisibilities,
	AndroidConfigPriorities,
	ApnsPayloadApsCriticalSound,
	WebpushNotificationAction,
	WebpushNotificationDirections
};