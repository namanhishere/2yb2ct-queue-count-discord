require("dotenv")
const Discord = require("discord.js")
const WebSocket = require('ws');
const cooldowns = new Discord.Collection();
const botcc = new Discord.Client()
var moment = require('moment-timezone');
const superagent = require("superagent")
const fs = require("fs")
botcc.login(process.env.token)
const util = require('minecraft-server-util');

function chaneg() {
    superagent.get("https://2b2t.io/api/queue?last=true").end((err, data) => {
        let bt = data.body[0][1];
        util.status('2y2c.org').then((response) => {
            // let yct = response.samplePlayers[1].name.split("§")[2];
            // let ycp = response.samplePlayers[2].name.split("§")[2];
            superagent.get("https://api.2b2t.dev/prioq").end((err, dataq) => {
                botcc.user.setActivity(`đề nghị admin không lấy tiền donate bao gái`,{type: "PLAYING"});
                let yct = parseInt(response.samplePlayers[2].name.split("§")[2].replace("l", ""))
                let ycp = parseInt(response.samplePlayers[1].name.split("§")[2].replace("l", ""))
                if(yct === response.onlinePlayers) return botcc.guilds.get("625715711481741322").members.get("806781306699513896").setNickname(`2y2c:res,2b2t:${bt}(p:${dataq.body[1]}))`)
                botcc.guilds.get("625715711481741322").members.get("806781306699513896").setNickname(`2y2c:${yct}(p:${ycp}),2b2t:${bt}(p:${dataq.body[1]})`)
                console.log("Changed")
            })
        })
    })
}
// (${moment().tz("Asia/Ho_Chi_Minh").format("h:mm")}
botcc.on("ready", ()=>{
    setInterval(() => {
        chaneg()
    }, 60000);
    chaneg()
})

botcc.on("message", async message => {
    if (message.content === "!!updatenic") {
        if(message.author.id === "632538377052225537")
        chaneg()
    }
    if (message.content === "!!hangcho") {
        if(message.author.id === "227281028396351488") return message.reply("m khong nen sai bot nay vi chinh m da la nguoi chui bot nay ngu. thanks condi")
        superagent.get("https://2b2t.io/api/queue?last=true").end((err, data) => {
            let bt = data.body[0][1];
            util.status('2y2c.org').then((response) => {
                let yc = response.onlinePlayers - 100;
                console.log(response.samplePlayers[2].name.split("§")[2])
                let yct = parseInt(response.samplePlayers[2].name.split("§")[2].replace("l", "")) 
                let ycq = parseInt(response.samplePlayers[1].name.split("§")[2].replace("l", "")) 
                superagent.get("https://api.2b2t.dev/prioq").end((err, dataq) => {
                    // if(yc<0) return message.reply("```Hàng chờ djt của```"+`\n<:4890_RicardoSmile:628266385977376782>**2Y2C ĐANG RESTART**<:4890_RicardoSmile:628266385977376782>\n<:6223_Water_sheep:754612540021014539>**Queue thường 2b2t:** ${bt}\n<:what:628265861547032610>**Queue ưu tiên 2b2t:** ${dataq.body[1]}\n`+"```diff\n+Bố m đéo có tiền mua queue của 2y2c và 2b2t\n+ Sài nhiều quá ăn l đấy\n- Nạp lần đầu đeeeee```"+"```ini\n[Code bay namanhishere#9333 and Moka Sakura#5864]```")
                    message.reply("```Hàng chờ djt của```"+`\n<:4890_RicardoSmile:628266385977376782>**Queue 2y2c thường**: ${yct}\n<:kappa:628264512209944599>**Queue ưu tiên 2y2c:** ${ycq}\n<:6223_Water_sheep:754612540021014539>**Queue thường 2b2t:** ${bt}\n<:what:628265861547032610>**Queue ưu tiên 2b2t:** ${dataq.body[1]}\n`+"```diff\n+Bố m đéo có tiền mua queue của 2y2c và 2b2t\n+Sài nhiều quá ăn l đấy\n+Djt xong nhớ trả tiền khách sạn\n- Nạp lần đầu đeeeee```"+"```ini\n[Code bay namanhishere#9333 and Moka Sakura#5864]```")
                })
            })
        })
    }
        if (message.content === "!!hangcho") {
        if(message.author.id === "227281028396351488") return message.reply("m khong nen sai bot nay vi chinh m da la nguoi chui bot nay ngu. thanks condi")
            message.reply("Xem tại: https://discord.com/channels/625715711481741322/625715711481741324/808710719531909129")
    }
})






