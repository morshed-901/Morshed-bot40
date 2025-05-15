module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "Joy-Ahmed",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "being kicked by the administrator";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`প্রিয় সহযোদ্ধা ${name}  ফাউন্ডেশন এর দায়িত্ব ব্যক্তিদের জানানো ছাড়া গ্রুপ থেকে লিভ নিবেন না :( `, event.threadID)
   } else api.sendMessage(`প্রিয় সহযোদ্ধা ${name} আগে ফাউন্ডেশন এর দায়িত্বগত ব্যক্তিদের জানান কি সমস্যা`, event.threadID);
  })
 }
                            }
