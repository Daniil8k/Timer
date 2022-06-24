import logo512Image from "../assets/logo512.webp";

let notification = null;

const requestPermission = () => {
	if (!("Notification" in window)) {
		alert("This browser does not support desktop notification");
	} else if (
		Notification.permission !== "granted" ||
		Notification.permission !== "denied"
	) {
		Notification.requestPermission().then(function (permission) {
			if (permission === "denied") {
				alert(
					"You will not receive Notifications about the end of the Round until you turn it on in your Browser."
				);
			}
		});
	}
};

const show = (title = "", body = "", onclick = () => {}) => {
	let options = {
		body,
		silent: true,
		icon: logo512Image,
		badge: logo512Image,
		requireInteraction: true,
	};

	notification = new Notification(title, options);
	notification.onclick = onclick;
};

const close = () => {
	setTimeout(() => {
		notification && notification.close();
	}, 300);
};

export { requestPermission, show, close };
