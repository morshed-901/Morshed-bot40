module.exports.config = {
  'name': "gojol",
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'credits': "SaGor",
  'description': "Made By« SaGor",
  'commandCategory': "Hình ảnh",
  'usages': "sad vedio",
  'cooldowns': 0x5,
  'dependencies': {
    'request': '',
    'fs-extra': '',
    'axios': ''
  }
};
module.exports.run = async ({
  api: _0x585a7e,
  event: _0x2cb5c2,
  args: _0x11fbf2,
  client: _0x3ac5a8,
  Users: _0x213bec,
  Threads: _0xdd3f5d,
  __GLOBAL: _0x25cabd,
  Currencies: _0x483731
}) => {
  const _0x4f2d5d = global.nodemodule.request;
  const _0x5cf344 = global.nodemodule["fs-extra"];
  var _0x5400f6 = ["--Islamic Gojol By SaGor 🕌--"];
  var _0x149c3a = _0x5400f6[Math.floor(Math.random() * _0x5400f6.length)];
  var _0x36bc3b = ["https://drive.google.com/uc?id=1xjyq3BrlW3bGrp8y7eedQSuddCbdvLMN", "https://drive.google.com/uc?id=1ySwrEG6xVqPdY5BcBP8I3YFCUOX4jV9e", "https://drive.google.com/uc?id=1xnht0PdBt9DnLGzW7GmJUTsTIJnxxByo", "https://drive.google.com/uc?id=1yHB48N_wPJnU5uV18KMZOLNqo5NE7L4W", "https://drive.google.com/uc?id=1xpwuubDL_ebjKJhujb-Ee-FikUF92oF6", "https://drive.google.com/uc?id=1yK0A3lyIJoPRp6g3UjNrC31n0yLfc1Ht", "https://drive.google.com/uc?id=1xrwhHLhsdKVAn_9umLfUysCt0S2v5QWe", "https://drive.google.com/uc?id=1yKwewV-oYbn57lGnlACykSD-yt8fOsfT", "https://drive.google.com/uc?id=1xulSi_qyJA47sF9rC9BUIPyBqh47t9Ls", "https://drive.google.com/uc?id=1y-PIYYziv-m8QRwmMBWCTl2wzuH8NpYJ", "https://drive.google.com/uc?id=1y0wV96m-notKVHnuNdF8xVCWiockSiME", "https://drive.google.com/uc?id=1xxMQnp-9-4BoLrGpReps93JQv4k8WUOP"];
  var _0x1720ff = () => _0x585a7e.sendMessage({
    'body': "「 " + _0x149c3a + " 」",
    'attachment': _0x5cf344.createReadStream(__dirname + "/cache/26.mp3")
  }, _0x2cb5c2.threadID, () => _0x5cf344.unlinkSync(__dirname + "/cache/26.mp3"));
  return _0x4f2d5d(encodeURI(_0x36bc3b[Math.floor(Math.random() * _0x36bc3b.length)])).pipe(_0x5cf344.createWriteStream(__dirname + "/cache/26.mp3")).on("close", () => _0x1720ff());
};
