/*CMD
  command: /depot
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

  if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
}else{
let depo = User.getProperty("depowall")
let depot = "➕ *Welcome! Here you can start a new investment!*\n\n💵 We offer a single Investment plan, able to offer you the best profit!\n\n➡️ Our plan starts from 10 USD\n\n*⏱ Profit will be credited* 10% every 24,for 15 days: 10% daily!\n📆 Paid on Every Day"

if(depo){
Bot.sendMessage("⚠️ _El mínimo de depósito es de 5.00000000 TRX, si usted envía menos se tomará como una donación!_\n\n✅ *Envía el monto a invertir a la siguiente wallet:*")
Bot.sendMessage("`"+depo+"`")}else{
Bot.sendMessage("*✋ Espere... generando wallet de depósito*")

Libs.CoinPayments.createPermanentWallet({
  currency: "TRX",
  label: "myLabel",
  onSuccess: "/on",

  onIncome: "/onIncomeTRX"
});
}
}
