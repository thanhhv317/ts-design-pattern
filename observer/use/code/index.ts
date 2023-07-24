// Main

import { EmailNotifier } from "./notifier/email-notifier";
import { PhoneNotifier } from "./notifier/phone-notifier";
import { YoutubeNotifier } from "./notifier/youtube-notifier";
import { VideoData } from "./video-data";

const videoData = new VideoData();

const emailNotifier = new EmailNotifier(videoData);
const phoneNofitifer = new PhoneNotifier(videoData);
const youtubeNotifier = new YoutubeNotifier(videoData);

videoData.setTitle("Observer Design Pattern");

videoData.detachObserver(emailNotifier);
console.log("=================");
videoData.setDescription("Thanhhv studied Observer desgin pattern");
