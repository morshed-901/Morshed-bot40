module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JOY",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100014220751394") {
    var aid = ["100014220751394"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["কোন কিছুর দরকার হলে আমাকে বলতে পারেন আপনাদের সেবার জন্য আমাকে তৈরি করেছে🥰", " আপনি কি ফাউন্ডেশনের হাদিয়া দিতে চান। তাহলে কিসের মাধ্যমে দিবেন ওইটা লিখুন🫶","আপনি কি হাদিয়া পরিষদ করতে চান","আপনার যদি বেশি প্রয়োজন পড়ে আবার মেনশন করুন"," কি সমস্যা আমার সাথে শেয়ার করতে পারেন। আমার জানা থাকলে অবশ্যই বলবো", "বেশি প্রয়োজন পড়লে ফাউন্ডেশনের গ্রুপ লিডারদের সাথে আলোচনা করুন"," আপনি কি ফাউন্ডেশনের হাদিয়া দিতে চান","আপনার হাদিয়াটি বিকাশ রকেট নগদের মাধ্যমে পরিশোধ করতে পারেন",," বেশি দরকার পড়লে আবার মেনশন করুন","খুব দরকার পড়লে আবার মেনশন করুন"," ফাউন্ডেশন এর বিষয় জানতে আমাকে বলুন"," ফাউন্ডেশনের হাদিয়া পরিষদ করুন বকেয়া থাকলে"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
