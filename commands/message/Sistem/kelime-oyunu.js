module.exports = [
    {
        name: "$alwaysExecute",
        code:`
$setUserVar[puan;$sum[$getUserVar[puan];$randomText[1;2;3;4;5]]]
$setGuildVar[puan;$sum[$getGuildVar[puan];$randomText[1;2;3;4;5;6]]]
$djsEval[const { JsonProvider } = require("ervel.db")
const db = new JsonProvider({ path: "./+/JSONDB/data.json" }) 
db.push("kelimeoyunukelimeler_$guildID","$toLowercase[$message[1]]")]
$dbSet[kelimeoyunuharf_$guildID;$get[sonharf]]
$dbSet[kelimeoyunukisi_$guildID;$authorID]
$let[sonharf;$djsEval[const word = "$message[1]"
word.split("")[word.split("").length - 1]
;true]]
$addMessageReactions[$channelID;$messageID;1242937512578777098]

$onlyIf[$get[kontrol]!=true;{newEmbed:{title:<:warning:1242937830183796796> | Error - 404}{description:
<:dnd:1242937464302075984> **Bu kelime önceden yazılmış.**
}{color:$data[config;color]}{footer:$data[config;footer] - $data[config;version]:$userAvatar[$clientID]}}{actionRow:{button:Destek Sunucum:link:$data[config;discord]:false:1249773065340977202}} {deleteCommand} {deleteIn:4s}]
$let[kontrol;$djsEval[const { JsonProvider } = require("ervel.db")
const db = new JsonProvider({ path: "./+/JSONDB/data.json" }) 
const kelimeler = db.get("kelimeoyunukelimeler_$guildID")
if(kelimeler) {
kelimeler.includes("$toLowercase[$message[1]]")
}
;true]]
$onlyIf[$charCount[$jsonRequest[https://sozluk.gov.tr/gts?ara=$nonEscape[$toLowercase[$message[1]]]]]>=100;{newEmbed:{title:<:warning:1242937830183796796> | Error - 404}{description:
<:dnd:1242937464302075984> **\`$message[1]\` diye bir kelime bulamadım.**
}{color:$data[config;color]}{footer:$data[config;footer] - $data[config;version]:$userAvatar[$clientID]}}{actionRow:{button:Destek Sunucum:link:$data[config;discord]:false:1249773065340977202}} {deleteCommand} {deleteIn:4s}]
$onlyIf[$dbGet[kelimeoyunuharf_$guildID]==$toLowercase[$get[harf]];{newEmbed:{title:<:warning:1242937830183796796> | Error - 404}{description:
<:dnd:1242937464302075984> **Yanlış harf şuanki harf \`$dbGet[kelimeoyunuharf_$guildID]\`.**
}{color:$data[config;color]}{footer:$data[config;footer] - $data[config;version]:$userAvatar[$clientID]}}{actionRow:{button:Destek Sunucum:link:$data[config;discord]:false:1249773065340977202}} {deleteCommand} {deleteIn:4s}]
$onlyIf[ğ!=$toLowercase[$get[harf]];{newEmbed:{title:<:warning:1242937830183796796> | Error - 404}{description:
<:dnd:1242937464302075984> **Kelimen \`ğ\` ile bitemez.**
}{color:$data[config;color]}{footer:$data[config;footer] - $data[config;version]:$userAvatar[$clientID]}}{actionRow:{button:Destek Sunucum:link:$data[config;discord]:false:1249773065340977202}} {deleteCommand} {deleteIn:4s}]
$onlyIf[$dbGet[kelimeoyunukisi_$guildID]!=$authorID;{newEmbed:{title:<:warning:1242937830183796796> | Error - 404}{description:
<:dnd:1242937464302075984> **İki kere kelime giremezsin.**
}{color:$data[config;color]}{footer:$data[config;footer] - $data[config;version]:$userAvatar[$clientID]}}{actionRow:{button:Destek Sunucum:link:$data[config;discord]:false:1249773065340977202}} {deleteCommand} {deleteIn:4s}]
$let[harf;$djsEval[const kelime = "$message[1]"
kelime.split("")[0]
;true]]
$onlyIf[$dbGet[kelimeoyunukanal_$guildID]==$channelID;]
$onlyIf[$dbHas[kelimeoyunukanal_$guildID]!=false;]
        `
    }
]