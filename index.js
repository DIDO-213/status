const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

// إذا كنت تستخدم استضافة Replit، تأكد من وجود ملف server.js بجانبه
const keepAlive = require('./server.js');
keepAlive();

function formatTime() {
  const date = new Date();
  const options = {
    timeZone: 'Africa/Algiers', // توقيت الجزائر لضمان GMT+1 ثابت
    hour12: false,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - Rich Presence started securely!`);
  
  const r = new Discord.RichPresence()
    .setApplicationId('1139873934012071947') 
    .setType('STREAMING')
    .setURL('https://discord.com') // رابط البث مطلوب إجبارياً لنشاط الستريم
    .setState('Devloped by .d_.o')
    .setName('nyyzk') 
    .setDetails(`nyzk `)
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/emojis/1365447064724705415.webp?size=96')
    .setAssetsLargeText('nyzk')
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1459896061266100428.webp?size=96&animated=true')
    .setAssetsSmallText('By .d_.o');
    // تم إلغاء الأزرار الفارغة addButton لتجنب الأخطاء والمشاكل مع ديسكورد

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); // وضع عدم الإزعاج الحمر

  let prevTime = null;
  setInterval(() => {
    const VirBonTime = formatTime();
    if (VirBonTime !== prevTime) {
      const newDetails = `nyzk | 🕒 ${VirBonTime}`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = VirBonTime;
    }
  }, 10000); // تحديث كل 10 ثوانٍ لتقليل الضغط على الحساب وأمانه من الباند
});

// ⚠️ تحذير: بعد تغيير باسور ديسكورد لحماية حسابك، ضع التوكن الجديد هنا
client.login("MTEzOTg3MzkzNDAxMjA3MTk0Nw.Gq8fsC.kWBQv6_3B59kO7gXSsUyEzFxpXH8oPGqYsksrQ"); 
