module.exports = [
    {
        name: "profil",
        type: "interaction",
        prototype: "slash",
        $if: "old",
        code:`
$interactionFollowUp[{newEmbed:{title:<:members:1242937484359499979> | $username[$get[id]] kişisinin bilgileri} {thumbnail:$userAvatar[$get[id]]}{description:
<:id:1242937469217935390> **| Kimlik bilgileri:**
\`\`\`
İsim: - [ $username[$get[id]] ]
Id: - [ $get[id] ]
\`\`\`
<:preview:1242938135738974311> **| Görünüm:**
**Durumu:** $replaceText[$replaceText[$replaceText[$replaceText[$userStatus[$guildID;$get[id]];offline;<:offline:1242937491405672448>];online;<:online:1242937495390257265>];dnd;<:dnd:1242937464302075984>];idle;<:idle:1242937471130669076>]$get[tarayıcı]
**Durum:** $get[status]

<:database:1243240284628975728> **| Veriler:**
\`\`\`
Kelime oyunu girdiği kelime sayısı: $getUserVar[puan;$authorID]
\`\`\`
}{color:$data[config;color]}{footer:$data[config;footer] - $data[config;version]:$userAvatar[$clientID]}
$if[$userBanner[$replaceText[$replaceText[$checkCondition[$slashOption[kişi]==];true;$authorID];false;$slashOption[kişi]]]!=null]
{image:$userBanner[$replaceText[$replaceText[$checkCondition[$slashOption[kişi]==];true;$authorID];false;$slashOption[kişi]]]}
$endif}]
$interactionDefer
$if[$userPlatform[$replaceText[$replaceText[$checkCondition[$slashOption[kişi]==];true;$authorID];false;$slashOption[kişi]];$guildID; | ]==none]
$let[tarayıcı;]
$else
$let[tarayıcı;-** $replaceText[$replaceText[$replaceText[$userPlatform[$get[id];$guildID; | ];web;Tarayıcı];mobile;Telefon];desktop;Bilgisayar Uygulaması]**]
$endif
$if[$userCustomStatus[$guildID;$replaceText[$replaceText[$checkCondition[$slashOption[kişi]==];true;$authorID];false;$slashOption[kişi]];state]==none]
$let[status;**None**]
$else
$let[status;**$userCustomStatus[$guildID;$replaceText[$replaceText[$checkCondition[$slashOption[kişi]==];true;$authorID];false;$slashOption[kişi]];state]**]
$endif
$let[id;$replaceText[$replaceText[$checkCondition[$slashOption[kişi]==];true;$authorID];false;$slashOption[kişi]]]
        `
    }
]