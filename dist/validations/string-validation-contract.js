"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notifiable_1 = require("../notifications/notifiable");
const notification_1 = require("../notifications/notification");
class StringValidationContract extends notifiable_1.Notifiable {
    stringIsNotNullOrEmpty(val, property, message) {
        if (typeof val === "undefined" || val === null || !val || val === "") {
            this.addNotification(new notification_1.Notification(property, message));
        }
        return this;
    }
    stringIsNullOrEmpty(val, property, message) {
        if (typeof val === "undefined" || val !== null || val || val !== "") {
            this.addNotification(new notification_1.Notification(property, message));
        }
        return this;
    }
    stringHasMinLen(val, min, property, message) {
        if ((val || "").length < min) {
            this.addNotification(new notification_1.Notification(property, message));
        }
        return this;
    }
    stringHasMaxLen(val, max, property, message) {
        if ((val || "").length > max) {
            this.addNotification(new notification_1.Notification(property, message));
        }
        return this;
    }
    stringHasLen(val, len, property, message) {
        if ((val || "").length !== len) {
            this.addNotification(new notification_1.Notification(property, message));
        }
        return this;
    }
    stringContains(val, text, property, message) {
        if (((val || "").indexOf(text) < 0)) {
            this.addNotification(new notification_1.Notification(property, message));
        }
        return this;
    }
    stringAreEquals(val, text, property, message) {
        if (val !== text) {
            this.addNotification(new notification_1.Notification(property, message));
        }
        return this;
    }
    stringAreNotEquals(val, text, property, message) {
        if (val === text) {
            this.addNotification(new notification_1.Notification(property, message));
        }
        return this;
    }
    isEmail(email, property, message) {
        const pattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (!pattern.test((email || "").toLowerCase())) {
            this.addNotification(new notification_1.Notification(property, message));
        }
        return this;
    }
    isUrl(url, property, message) {
        const pattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
        if (!pattern.test((url || "").toLowerCase())) {
            this.addNotification(new notification_1.Notification(property, message));
        }
        return this;
    }
}
exports.StringValidationContract = StringValidationContract;
