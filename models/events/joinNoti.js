module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "CatalizCS", //fixing ken gusler
  description: "Notify bot or group member with random gif/photo/video",
  dependencies: {
    "fs-extra": "",
    "path": "",
    "pidusage": ""
  }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

  const path = join(__dirname, "cache", "joinGif","randomgif");
  if (existsSync(path)) mkdirSync(path, { recursive: true });	

  const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
  const { join } = global.nodemodule["path"];
  const { threadID } = event;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? " " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    const fs = require("fs");
    return api.sendMessage("", event.threadID, () => api.sendMessage({body:`আসসালামুআলাইকুম🥀

আসসালামু আলাইকুম আমি একটি ইসলামিক বট🤖

(আমি আত- তাক্বওয়া ফাউন্ডেশন এর হয়ে কাজ করে থাকি)

 আমাকে কেউ আড্ডা গ্রুপে এড করবেন না
আমাকে ফাউন্ডেশনের সভাপতি মোঃ মোর্শেদ আপনাদের দৈনিক কাজকে সহজ করার জন্য তৈরি করেছে
____________________________________\n\n আপনাদের যেকোনো সমস্যা গ্রুপ লিডার এবং সহ-সভাপতি দের সাথে শেয়ার করবেন\n\n (সহ-সভাপতি=মোঃ শামীম ওসমান) (গ্রুপ লিডার=মোঃ জাকারিয়া) (গ্রুপ লিডার=মোঃ আব্দুল্লাহ

___________________________________আপনাদের যেকোনো সমস্যার কথা আপনারা ফাউন্ড দর্শনের দায়িত্বরত ব্যক্তিদের সাথে শেয়ার করতে পারবেন।
-
`, attachment: fs.createReadStream(__dirname + "/JOY/JOY-BOT.mp4")} ,threadID));
  }
  else {
    try {
      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);

      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      const path = join(__dirname, "cache", "joinGif");
      const pathGif = join(path, `${threadID}.gif`);

      var mentions = [], nameArray = [], memLength = [], i = 0;

      for (id in event.logMessageData.addedParticipants) {
        const userName = event.logMessageData.addedParticipants[id].fullName;
        nameArray.push(userName);
        mentions.push({ tag: userName, id });
        memLength.push(participantIDs.length - i++);
      }
      memLength.sort((a, b) => a - b);

      (typeof threadData.customJoin == "undefined") ? msg = "আসসালামু আলাইকুম\nপ্রিয় সহযোদ্ধা\n\n    ✨🆆🅴🅻🅻 🅲🅾🅼🅴✨\n\n                 🌺\n\n        ~🇲‌🇪‌🇲‌🇧‌🇪‌🇷‌~\n\n             [   {name} ]\n\nপ্রিয় সহযোদ্ধা\n\n{threadName}\n\n 🥰🖤🌸— এর পক্ষ থেকে—🌸🥀\n\n         🥀_ লাল গোলাপের শুভেচ্ছা_🥀\n\nআপনি ফাউন্ডেশনের{soThanhVien} তম সহযোদ্ধা\n\nআশা করি আপনি আমাদের সাথে কাঁধে কাঁধ মিলিয়ে ইসলাম প্রচার করবেন\n♥ ফাউন্ডেশনের বদনাম হয় এমন কোন কাজ করবেন না♥\n\n       ফাউন্ডেশনের নিয়ম সম্পর্কে জানতে লিখুন.   👉 (Rules)👈              \n\n  আশা করি আপনি সকল নিয়ম গুলো ভালো করে পড়বেন\n এবং সকল নিয়ম গুলো মেনে চলবেন" : msg = threadData.customJoin;
      msg = msg
      .replace(/\{name}/g, nameArray.join(', '))
      .replace(/\{type}/g, (memLength.length > 1) ?  'You' : 'Friend')
      .replace(/\{soThanhVien}/g, memLength.join(', '))
      .replace(/\{threadName}/g, threadName);

      if (existsSync(path)) mkdirSync(path, { recursive: true });

      const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

      if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
      else if (randomPath.length != 0) {
        const pathRandom = join(__dirname, "cache", "joinGif", "randomgif",`${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
        formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
      }
      else formPush = { body: msg, mentions }

      return api.sendMessage(formPush, threadID);
    } catch (e) { return console.log(e) };
  }
}
