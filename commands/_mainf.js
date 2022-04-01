/*CMD
  command: /mainf
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

                                                                                                             

var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
let res = Libs.ResourcesLib.userRes("balance");
let id = "@TronUniverseV1Bot"
Bot.sendKeyboard("💢 Saldo ~ " + res.value().toFixed(8) + " TRX 💢" + "\n➕ Depositar,➰ Re-Invertir,➖ Retirar,\n📊 Estadísticas,🎙 Payment Hub,\n🎁 Bonus,👥 Invitar,🖥 Calculador,\n💡 About,💳 Wallet, 📬 Soporte","🔝 Menú Principal")
