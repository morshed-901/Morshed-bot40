const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "bot",
  version: "1.0.1",
  hasPermssion: 0,
 credits: "JOY",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["আমাকে না ডেকে একটি ইসলামিক পোস্ট করে আসো", " আমাকে না ডেকে ইসলামের দাওয়াত দাও পরকালে কাজে আসবে", "ইসলাম শান্তির ধর্ম", "আমাকে না ডেকে (.gojol) লেখুন সুন্দর সুন্দর গজল শুনতে পারবেন", " একটি ইসলামিক পোস্ট করুন কে জানে আপনার একটি পোস্টে বদলে যেতে পারে একজন নাস্তিকের জীবন"," ভালো কাজে মানুষকে সহযোগিতা করুন", "আল্লাহর প্রতিটি সৃষ্টির দিকে তাকালে আল্লাহর উপস্থিতি বুঝতে পারবেন", "ব্যস্ততা আল্লাহকে ভুলিয়ে দেয়"," বেশি বেশি নামাজ পড়ুন কারণ নামাজ জীবন পরিবর্তন করতে সাহায্য করে", "গ্রুপের বাজে কথা না বলে একটি ইসলামিক পোস্ট করুন","আমি একটি ইসলামিক রোবট"," হিংসা মানুষকে ধ্বংস করে দেয়"," পাঁচ ওয়াক্ত নামাজ পড়ুন এবং অন্যকে দাওয়াত দিন"," অনেক তো গ্রুপে আড্ডা দিয়েছো যাও এবার একটি ইসলামিক পোস্ট করো"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
  if (event.body.indexOf("বট") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
