/*CMD
  command: /with
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ➖ withdraw
CMD*/

var wallet = User.getProperty("wallet")
if (wallet == undefined) {
  var button = [[{ title: "💼Establecer/Cambiar Wallet", command: "/wallet" }]]
  Bot.sendInlineKeyboard(
    button,
    "*💡 Su billetera TRX actualmente establecida es:* No establecida\n\nSe utilizará para todos los retiros futuros."
  )
} else {
Bot.runCommand("/trx")
}
