/* eslint-disable @typescript-eslint/no-explicit-any */
import { faker } from "@faker-js/faker";
import { FirebaseCloudMessagingConnectionError } from "@arunvaradharajalu/common.errors";
import { CloudMessaging, FcmMessage } from "../src";
import { FirebaseCloudMessaging } from "../src/firebase-cloud-messaging";



describe("Firebase Cloud Messaging Module", () => {
	let firebaseCloudMessaging: CloudMessaging;

	beforeEach(() => {
		firebaseCloudMessaging = new FirebaseCloudMessaging();
	});

	describe("\"fcm\" getter", () => {
		describe("Exception Path", () => {
			it("Fcm is not initialized, should throw error", () => {
				expect(() => firebaseCloudMessaging.fcm)
					.toThrow(FirebaseCloudMessagingConnectionError);
				expect(() => firebaseCloudMessaging.fcm).toThrow("Fcm must be initialized before retrieving it");
			});
		});

		describe("Happy Path", () => {
			it("If fcm is initialized, should return fcm", () => {
				firebaseCloudMessaging.name = faker.name.fullName();
				firebaseCloudMessaging.projectId = faker.random.alphaNumeric(5);
				firebaseCloudMessaging.clientEmail = faker.internet.email();
				firebaseCloudMessaging.privateKey = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDTcGbEXCdZYhbO\nTQd86WzD4ha0/9b6jrI2oWf65CBA6yid7ViCFL150E/C1B4g4PgUL6t0mcIDQ1A3\n0oQ8egy4G+usgwVO4QzwRF0PLW7bjvzJWkfVKEOZEfNYUgH38gLZ5ZGg6Y4ijt9/\nYJZW+B+RjqJfEAfJQtwXRvcNhTlVSpE2djFwB6bq3gX5HTCWITqXAgR14mTzOnGR\nfxTsVGiq8ERxx9vSjrtdyWioXBYpeeZKN9wfQUUOujF/iqq2NEzFv5lQrIlkCjUs\npL7Zz5+9DFTKB68gnGhcGGiqpaW+vl9bGNrIwuOvIuA599nHH1lrwCcEu3+J4C+R\nBs+1lkrPAgMBAAECggEAUrg1RFoHPPVelbxWExzhY+smVg6HZQQBndTcsK+iHLPD\ncrGiWEEr4KXKJp9E4DkysU8LBXWIDS2/Cu/NszlOk5K8y4OAxqDOJougWqk8JyKU\nLBQpaS+07oERlnqS8ZVZXzTsmeb1p/h8YMGBX6n388K5LHhSKX+CSnUc20nFKePp\ngW4SiVDMQnfgvoYBSLeZLp3nMU5dOUDVmVXe7w4399YQUbMIV9l90qKTh2Yjst5U\n97gJhjP08OoyLh7HSMnAkJE8au1r6pt5RTaKobpEGOJZontWJVOfdjch04G0FX8p\nzGUSJGcFCw7WxnZbB8NhXlpIQ3GlzT54vR22u9/FzQKBgQD2MHrwICHix5HH7/d+\nxfYnvqotmcdIk48kLkdJapyNuN2JpK92Hhp998DtESJEV/naaqfQ9OaQ+dgydBfv\nJJfjbJDPsd8YtV+ysrj+wRYS7ZWkyMsWg/a3GW/UO6ZQiyxCmlV6iaXCrJeALjdM\noOvMwOtP/zu4Q73vPzJ2JLeiEwKBgQDb3WnMxeWpG1+pBYpSPQgNvF7UlhGCplRc\n6CxQoc1aEurLdTPQhrilxrhPUbyEV8NBGwu8PqxTeM/u5X9E8PBDe80ktUjPtdsm\nnbo/kTR2TwHh7zmLaR/BljlATVBm3gAUZnlLfmtjhDxJ87U74OEUldPKVrrMxYT+\nevizRYfr1QKBgQCDPZr8EZUe6RbdCB7fNTchPvJHtvfWx9sCBa25BJ2Kq6dmLiXf\niPLEfmQZvQ2Qc3ndpwfpS/TyCk7nrp3nvZE/Cuwz3HW7HU1z3PTj0hkrY/5nRyeE\nzDqkp2nHMTlbLKYep1m0Jlb4bbuh+IFAV3T8xUdscPrsIyjItt72vmIqgwKBgFqn\nao5CMrWNUd4RKL1L6NwxYIDGR6YFCtfb6xm7/T3ceu80/g5G3i+MRkZ+PyqaPSnF\nCwutE8S/FY09F0LHzWklzKoMDV+Hbjr34el/54+4d+A+kQ2IZM2fMS/wMOyZMJM4\nxV55W7IGvg0H7Xwo9uVT+aV+KTtxXarH7W+NhcOZAoGBAIhpERDQV+y7WsP7GIFc\n3qvjf0Y4gl2jCISq1Hk3/d/GgDDIuai2fNDzBVMLiPVW6z997OWiOKM0wHWEVhfb\nPt4T1S1ExR+WjW4h2V5o+LYD7f9829JkUGve3rdWRlFHLKcJX/RePxWQ3Ayw8wmD\ny6zZY4/qiWR1IvZtNyRzWjDI\n-----END PRIVATE KEY-----\n";

				firebaseCloudMessaging.init();

				expect(firebaseCloudMessaging.fcm).toBeTruthy();
			});
		});
	});

	describe("\"init\" method", () => {
		describe("Exception Path", () => {
			it("If name is not provided, should throw error", () => {
				expect(
					() => firebaseCloudMessaging.init()
				).toThrow(FirebaseCloudMessagingConnectionError);
				expect(() => firebaseCloudMessaging.init()).toThrow("FCM, name must be set before initialization");
			});

			it("If project id is not provided, should throw error", () => {
				firebaseCloudMessaging.name = faker.name.fullName();

				expect(
					() => firebaseCloudMessaging.init()
				).toThrow(FirebaseCloudMessagingConnectionError);
				expect(() => firebaseCloudMessaging.init()).toThrow("FCM, project id must be set before initialization");
			});

			it("If client email is not provided, should throw error", () => {
				firebaseCloudMessaging.name = faker.name.fullName();
				firebaseCloudMessaging.projectId = faker.random.alphaNumeric(5);

				expect(
					() => firebaseCloudMessaging.init()
				).toThrow(FirebaseCloudMessagingConnectionError);
				expect(() => firebaseCloudMessaging.init()).toThrow("FCM, client email must be set before initialization");
			});

			it("If private key is not provided, should throw error", () => {
				firebaseCloudMessaging.name = faker.name.fullName();
				firebaseCloudMessaging.projectId = faker.random.alphaNumeric(5);
				firebaseCloudMessaging.clientEmail = faker.internet.email();

				expect(
					() => firebaseCloudMessaging.init()
				).toThrow(FirebaseCloudMessagingConnectionError);
				expect(() => firebaseCloudMessaging.init()).toThrow("FCM, private key must be set before initialization");
			});
		});

		describe("Happy Path", () => {
			it("If all values are set, should initialize the fcm", () => {
				const spyInit = jest.spyOn(firebaseCloudMessaging, "init");

				firebaseCloudMessaging.name = faker.name.fullName();
				firebaseCloudMessaging.projectId = faker.random.alphaNumeric(5);
				firebaseCloudMessaging.clientEmail = faker.internet.email();
				firebaseCloudMessaging.privateKey = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDTcGbEXCdZYhbO\nTQd86WzD4ha0/9b6jrI2oWf65CBA6yid7ViCFL150E/C1B4g4PgUL6t0mcIDQ1A3\n0oQ8egy4G+usgwVO4QzwRF0PLW7bjvzJWkfVKEOZEfNYUgH38gLZ5ZGg6Y4ijt9/\nYJZW+B+RjqJfEAfJQtwXRvcNhTlVSpE2djFwB6bq3gX5HTCWITqXAgR14mTzOnGR\nfxTsVGiq8ERxx9vSjrtdyWioXBYpeeZKN9wfQUUOujF/iqq2NEzFv5lQrIlkCjUs\npL7Zz5+9DFTKB68gnGhcGGiqpaW+vl9bGNrIwuOvIuA599nHH1lrwCcEu3+J4C+R\nBs+1lkrPAgMBAAECggEAUrg1RFoHPPVelbxWExzhY+smVg6HZQQBndTcsK+iHLPD\ncrGiWEEr4KXKJp9E4DkysU8LBXWIDS2/Cu/NszlOk5K8y4OAxqDOJougWqk8JyKU\nLBQpaS+07oERlnqS8ZVZXzTsmeb1p/h8YMGBX6n388K5LHhSKX+CSnUc20nFKePp\ngW4SiVDMQnfgvoYBSLeZLp3nMU5dOUDVmVXe7w4399YQUbMIV9l90qKTh2Yjst5U\n97gJhjP08OoyLh7HSMnAkJE8au1r6pt5RTaKobpEGOJZontWJVOfdjch04G0FX8p\nzGUSJGcFCw7WxnZbB8NhXlpIQ3GlzT54vR22u9/FzQKBgQD2MHrwICHix5HH7/d+\nxfYnvqotmcdIk48kLkdJapyNuN2JpK92Hhp998DtESJEV/naaqfQ9OaQ+dgydBfv\nJJfjbJDPsd8YtV+ysrj+wRYS7ZWkyMsWg/a3GW/UO6ZQiyxCmlV6iaXCrJeALjdM\noOvMwOtP/zu4Q73vPzJ2JLeiEwKBgQDb3WnMxeWpG1+pBYpSPQgNvF7UlhGCplRc\n6CxQoc1aEurLdTPQhrilxrhPUbyEV8NBGwu8PqxTeM/u5X9E8PBDe80ktUjPtdsm\nnbo/kTR2TwHh7zmLaR/BljlATVBm3gAUZnlLfmtjhDxJ87U74OEUldPKVrrMxYT+\nevizRYfr1QKBgQCDPZr8EZUe6RbdCB7fNTchPvJHtvfWx9sCBa25BJ2Kq6dmLiXf\niPLEfmQZvQ2Qc3ndpwfpS/TyCk7nrp3nvZE/Cuwz3HW7HU1z3PTj0hkrY/5nRyeE\nzDqkp2nHMTlbLKYep1m0Jlb4bbuh+IFAV3T8xUdscPrsIyjItt72vmIqgwKBgFqn\nao5CMrWNUd4RKL1L6NwxYIDGR6YFCtfb6xm7/T3ceu80/g5G3i+MRkZ+PyqaPSnF\nCwutE8S/FY09F0LHzWklzKoMDV+Hbjr34el/54+4d+A+kQ2IZM2fMS/wMOyZMJM4\nxV55W7IGvg0H7Xwo9uVT+aV+KTtxXarH7W+NhcOZAoGBAIhpERDQV+y7WsP7GIFc\n3qvjf0Y4gl2jCISq1Hk3/d/GgDDIuai2fNDzBVMLiPVW6z997OWiOKM0wHWEVhfb\nPt4T1S1ExR+WjW4h2V5o+LYD7f9829JkUGve3rdWRlFHLKcJX/RePxWQ3Ayw8wmD\ny6zZY4/qiWR1IvZtNyRzWjDI\n-----END PRIVATE KEY-----\n";

				firebaseCloudMessaging.init();

				expect(spyInit).toHaveBeenCalled();
			});
		});
	});

	describe("\"send\" method", () => {
		describe("Exception Path", () => {
			it("If fcm is not initialized, should throw error", () => {
				expect(
					() => firebaseCloudMessaging.send({} as any)
				).rejects.toThrow(FirebaseCloudMessagingConnectionError);
				expect(() => firebaseCloudMessaging.send({} as any)).rejects.toThrow("FCM must be initialized before sending message");
			});

			it("If private key is invalid, should throw error", async () => {
				firebaseCloudMessaging.name = faker.name.fullName();
				firebaseCloudMessaging.projectId = faker.random.alphaNumeric(5);
				firebaseCloudMessaging.clientEmail = faker.internet.email();
				firebaseCloudMessaging.privateKey = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDTcGbEXCdZYhbO\nTQd86WzD4ha0/9b6jrI2oWf65CBA6yid7ViCFL150E/C1B4g4PgUL6t0mcIDQ1A3\n0oQ8egy4G+usgwVO4QzwRF0PLW7bjvzJWkfVKEOZEfNYUgH38gLZ5ZGg6Y4ijt9/\nYJZW+B+RjqJfEAfJQtwXRvcNhTlVSpE2djFwB6bq3gX5HTCWITqXAgR14mTzOnGR\nfxTsVGiq8ERxx9vSjrtdyWioXBYpeeZKN9wfQUUOujF/iqq2NEzFv5lQrIlkCjUs\npL7Zz5+9DFTKB68gnGhcGGiqpaW+vl9bGNrIwuOvIuA599nHH1lrwCcEu3+J4C+R\nBs+1lkrPAgMBAAECggEAUrg1RFoHPPVelbxWExzhY+smVg6HZQQBndTcsK+iHLPD\ncrGiWEEr4KXKJp9E4DkysU8LBXWIDS2/Cu/NszlOk5K8y4OAxqDOJougWqk8JyKU\nLBQpaS+07oERlnqS8ZVZXzTsmeb1p/h8YMGBX6n388K5LHhSKX+CSnUc20nFKePp\ngW4SiVDMQnfgvoYBSLeZLp3nMU5dOUDVmVXe7w4399YQUbMIV9l90qKTh2Yjst5U\n97gJhjP08OoyLh7HSMnAkJE8au1r6pt5RTaKobpEGOJZontWJVOfdjch04G0FX8p\nzGUSJGcFCw7WxnZbB8NhXlpIQ3GlzT54vR22u9/FzQKBgQD2MHrwICHix5HH7/d+\nxfYnvqotmcdIk48kLkdJapyNuN2JpK92Hhp998DtESJEV/naaqfQ9OaQ+dgydBfv\nJJfjbJDPsd8YtV+ysrj+wRYS7ZWkyMsWg/a3GW/UO6ZQiyxCmlV6iaXCrJeALjdM\noOvMwOtP/zu4Q73vPzJ2JLeiEwKBgQDb3WnMxeWpG1+pBYpSPQgNvF7UlhGCplRc\n6CxQoc1aEurLdTPQhrilxrhPUbyEV8NBGwu8PqxTeM/u5X9E8PBDe80ktUjPtdsm\nnbo/kTR2TwHh7zmLaR/BljlATVBm3gAUZnlLfmtjhDxJ87U74OEUldPKVrrMxYT+\nevizRYfr1QKBgQCDPZr8EZUe6RbdCB7fNTchPvJHtvfWx9sCBa25BJ2Kq6dmLiXf\niPLEfmQZvQ2Qc3ndpwfpS/TyCk7nrp3nvZE/Cuwz3HW7HU1z3PTj0hkrY/5nRyeE\nzDqkp2nHMTlbLKYep1m0Jlb4bbuh+IFAV3T8xUdscPrsIyjItt72vmIqgwKBgFqn\nao5CMrWNUd4RKL1L6NwxYIDGR6YFCtfb6xm7/T3ceu80/g5G3i+MRkZ+PyqaPSnF\nCwutE8S/FY09F0LHzWklzKoMDV+Hbjr34el/54+4d+A+kQ2IZM2fMS/wMOyZMJM4\nxV55W7IGvg0H7Xwo9uVT+aV+KTtxXarH7W+NhcOZAoGBAIhpERDQV+y7WsP7GIFc\n3qvjf0Y4gl2jCISq1Hk3/d/GgDDIuai2fNDzBVMLiPVW6z997OWiOKM0wHWEVhfb\nPt4T1S1ExR+WjW4h2V5o+LYD7f9829JkUGve3rdWRlFHLKcJX/RePxWQ3Ayw8wmD\ny6zZY4/qiWR1IvZtNyRzWjDI\n-----END PRIVATE KEY-----\n";

				firebaseCloudMessaging.init();

				expect(
					() => firebaseCloudMessaging
						.send(new FcmMessage(
							faker.random.alphaNumeric(15),
							{ dummy: faker.random.alpha(5) }
						))
				).rejects.toThrow(Error);
			});
		});
	});
});
