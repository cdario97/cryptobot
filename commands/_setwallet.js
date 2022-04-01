/*CMD
  command: /setwallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 💳 Wallet
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
let wallet = User.getProperty("wallet")
if(wallet==undefined){
var button = [
[{title : "💼 Establecer/Cambiar Wallet" , command : "/wallet"}]
]
Bot.sendInlineKeyboard(button,"*💡 Su billetera TRX actualmente establecida es:* `No establecida`\n\n💹Se utilizará para *todos los retiros futuros.*");
}else{
var button = [
[{title : "💼 Cambiar Wallet" , command : "/wallet"}]
]
Bot.sendInlineKeyboard(button,"*💡 Su billetera TRX actualmente establecida es:* \n `"+wallet+"`\n\n💹Se utilizará para *todos los retiros futuros.*");
}
}
