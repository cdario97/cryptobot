/*CMD
  command: /status
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 📊 Estadísticas
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
return
}
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently OFF*");
}else{
let TRX = Libs.ResourcesLib.anotherChatRes("userpayment", "global");
let tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
let depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
let reinvest = Libs.ResourcesLib.anotherChatRes("reinvest", "global");
Bot.sendMessage("*👤 Usuarios Totales:* " +tota.value()+ "\n\n*➕ Total Depositado: *\n" +depo.value().toFixed(8) + " TRX " + "\n\n*♻️ Total Reinvertido: *\n" +reinvest.value().toFixed(8) + " TRX " + "\n\n*➖ Total Retirado:*\n" +TRX.value().toFixed(8) + " TRX ")
}

