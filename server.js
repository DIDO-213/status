const express = require('express');
const server = express();

server.all('/', (req, res) => {
    res.send('<h1>البوت الشخصي يعمل بنجاح ومستمر 24/7!</h1>');
});

function keepAlive() {
    server.listen(3000, () => {
        console.log("📌 خادم الـ KeepAlive جاهز ويعمل على المنفذ 3000");
    });
}

module.exports = keepAlive;
