/*CMD
  command: /onIncomeTRX
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!options){
   // for security we need to check
   // that this command runned only by lib
   // user can not run command with options
   return
}

var wallet = options.address;
var currency = options.currency;
var amount = options.amount;
var amountt = amount*1.2
var f = amount*2

var fiat_amount = options.fiat_amount;
var fiat_currency = options.fiat_coin;
var fee = options.fee;
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
var history = User.getProperty("history");
let id = "@TronUniverseV1Bot"
let ID = "@TronUniverseV1Payments"
var key = Bot.getProperty("channel");

var txn_id = options.txn_id
var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
let hash = "⛓ Transaction Hash"

// see another fields by
//Bot.sendMessage(inspect(options));
if(currency!=="TRX"){
return
}
if (amount>= 1 && amount <=1000){
Bot.sendMessage ("*✅ New Investment Started in Bot* " + "\n\n📆 Total Investment Duration: 1 Days" + ", for a daily 120%" + "\n\n_🗒 Get paid on Every Day_" + "\n\n*⏱ Payment* 120% every 24 hours" + "\n\n*💴 Invested Amount:* " +amount+  " *TRX*" + "\n\n*🧮 Expected Return:* " + amountt + " *TRX*");
Api.sendMessage ({chat_id: ID, text: "*💰New Deposit*\n " +user.first_name+ "  just invested " +amount+ " TRX " + "\n\n*🖇Transaction Hash: *" + "\n`" +txn_id+ "`\n",parse_mode : "Markdown" , disable_web_page_preview: true
});
var depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
var deposit   = Libs.ResourcesLib.userRes("deposit");
let ress = Libs.ResourcesLib.userRes("ress");
deposit.add(amount)
ress.add(amount)
depo.add(amount)
User.setProperty("minertrx",amount ,"text");
Bot.run({
command : "/accTRXF",
run_after : 1*60*60*24,
options: { amount: amount }
});
var lilo = Bot.getProperty("total");
var total = lilo+amount;
Bot.setProperty("total" , total , "integer");
var referrer = Libs.ReferralLib.currentUser.attractedByUser();
var bonus = amount * 0.05;
if(history == undefined){

var newh = "*📥 Your Deposit:* " +amount+ " *TRX*" + "\n["+ hash + "]" +"(https://tx.botdev.me/TRX/" + txn_id + "\n)" + "\n*🕥 Investment Started :* " +time+"\n\n";
User.setProperty("history",newh,"string")
}else{
var nwh = "*📥 Your Deposit:* " +amount+ " *TRX*" + "\n["+ hash + "]" +"(https://tx.botdev.me/TRX/" + txn_id + "\n)" + "\n*🕥 Investment Started :* " +time+"\n\n";
var toal = nwh+history;
User.setProperty("history",toal,"string")
}
if(referrer){
  var referrerRes = Libs.ResourcesLib.anotherUserRes("balance", referrer.telegramid);
referrerRes.add(bonus);
  var refcom = Libs.ResourcesLib.anotherUserRes("refcom", referrer.telegramid);
refcom.add(bonus);
Bot.sendMessageToChatWithId(referrer.telegramid,"*➕ Referral Deposit:* "+bonus.toFixed(5)+" *TRX*");
}else{
Bot.sendMessage("Check Payment Channel: " +"["+key+"]");
}
} 
if (amount>=10000 && amount <=29999){
Bot.sendMessage ("*✅ New Investment Started in Bot* " + "\n\n📆 Total Investment Duration: 1 Days" + ", for a daily 200%" + "\n\n_🗒 Get paid on Every Day_" + "\n\n*⏱ Payment* 200% every 24 hours" + "\n\n*💴 Invested Amount:* " +amount+  " *TRX*" + "\n\n*🧮 Expected Return:* " + f + " *TRX*");
Api.sendMessage ({chat_id: ID, text: "*📥 New Deposit*" + "\n\n*💌 Name :* `" +user.first_name+ "`\n\n*💰 Deposit Amount :* " +amount+ " *TRX*" + "\n\n" + "*🎉 Tx id :* " + "\n["+ txn_id + "]" +"(https://tronscan.org/#/transaction/" +txn_id+ "\n)" + "\n\n*🤖 Bot :* " +"["+id+"]",parse_mode : "Markdown" , disable_web_page_preview: false
});
var depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
var deposit   = Libs.ResourcesLib.userRes("deposit");
deposit.add(amount)
depo.add(amount)
User.setProperty("minertrx2",amount ,"text");
Bot.run({
command : "/accTRXF2",
run_after : 1*60*60*24,
options: { amount: amount }
});
var lilo = Bot.getProperty("total");
var total = lilo+amount;
Bot.setProperty("total" , total , "integer");
var referrer = Libs.ReferralLib.currentUser.attractedByUser();
var bonus = amount * 0.05;
if(history == undefined){

var newh = "*📥 Your Deposit:* " +amount+ " *TRX*" + "\n["+ hash + "]" +"(https://tx.botdev.me/TRX/" + txn_id + "\n)" + "\n*🕥 Investment Started :* " +time+"\n\n";
User.setProperty("history",newh,"string")
}else{
var nwh = "*📥 Your Deposit:* " +amount+ " *TRX*" + "\n["+ hash + "]" +"(https://tx.botdev.me/TRX/" + txn_id + "\n)" + "\n*🕥 Investment Started :* " +time+"\n\n";
var toal = nwh+history;
User.setProperty("history",toal,"string")
}
if(referrer){
  var referrerRes = Libs.ResourcesLib.anotherUserRes("balance", referrer.telegramid);
referrerRes.add(bonus);
  var refcom = Libs.ResourcesLib.anotherUserRes("refcom", referrer.telegramid);
refcom.add(bonus);
Bot.sendMessageToChatWithId(referrer.telegramid,"*➕ Referral Deposit:* "+bonus.toFixed(5)+" *TRX*");
}else{
Bot.sendMessage("Check Payment Channel: " +"["+key+"]");
}
} 