module.exports = [
    {
        name: "sıralama",
        type: "interaction",
        prototype: "slash",
        code:`
$interactionFollowUp[{newEmbed:{title:<:file:1242937467619774495> | Sıralamalara hoşgeldin}{thumbnail:$userAvatar[$clientID]}{description:
<:online:1242937495390257265> **| Sıralamalar aktif.**}{color:$data[config;color]}{footer:$data[config;footer] - $data[config;version]}}{actionRow:{selectMenu:sıralamakullanıcı_$authorID:Kullanıcı sıralamaları için.::1:false:
{stringInput:Kelime Oyunu:kelime:Kelime oyunu puanları sıralaması için beni seç.:
false:1242937495390257265}}}
{actionRow:{selectMenu:sıralamasunucu_$authorID:Sunucu sıralamaları için.::1:false:
{stringInput:Kelime Oyunu:kelime:Kelime oyunu puanları sıralaması için beni seç.:
false:1242937495390257265}}}]
$interactionDefer
        `
    },{
        type: "interaction",
        prototype: "selectMenu",
        code:`
$interactionUpdate[{newEmbed:{title:<:file:1242937467619774495> | Kelime oyunu kullanıcı sıralaması}{thumbnail:$userAvatar[$clientID]}{description:
<:preview:1242938135738974311> **| İlk 10:**
$userLeaderBoard[$guildID;puan;desc;**{top} | {username} -** \`{value}\`;10;1]
}{color:$data[config;color]}{footer:$data[config;footer] - $data[config;version]}}{actionRow:{selectMenu:sıralamakullanıcı_$authorID:Kullanıcı sıralamaları için.::1:false:
{stringInput:Kelime Oyunu:kelime:Kelime oyunu puanları sıralaması için beni seç.:
false:1242937495390257265}}}
{actionRow:{selectMenu:sıralamasunucu_$authorID:Sunucu sıralamaları için.::1:false:
{stringInput:Kelime Oyunu:kelime:Kelime oyunu puanları sıralaması için beni seç.:
false:1242937495390257265}}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$authorID;{newEmbed:{title:<:warning:1242937830183796796> | Error - 404}{description:
<:dnd:1242937464302075984> **Bu menü sana ait değil.**
}{color:$data[config;color]}{footer:$data[config;footer] - $data[config;version]:$userAvatar[$clientID]}}{actionRow:{button:Destek Sunucum:link:$data[config;discord]:false:1249773065340977202}} {interaction} {ephemeral}]
$onlyIf[$interactionData[values[0]]==kelime;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==sıralamakullanıcı]
        `
    },{
        type: "interaction",
        prototype: "selectMenu",
        code:`
$interactionUpdate[{newEmbed:{title:<:file:1242937467619774495> | Kelime oyunu sunucu sıralaması}{thumbnail:$userAvatar[$clientID]}{description:
<:preview:1242938135738974311> **| İlk 10:**
$guildLeaderBoard[puan;desc;**{top} | {name} -** \`{value}\`;10;1]
}{color:$data[config;color]}{footer:$data[config;footer] - $data[config;version]}}{actionRow:{selectMenu:sıralamakullanıcı_$authorID:Kullanıcı sıralamaları için.::1:false:
{stringInput:Kelime Oyunu:kelime:Kelime oyunu puanları sıralaması için beni seç.:
false:1242937495390257265}}}
{actionRow:{selectMenu:sıralamasunucu_$authorID:Sunucu sıralamaları için.::1:false:
{stringInput:Kelime Oyunu:kelime:Kelime oyunu puanları sıralaması için beni seç.:
false:1242937495390257265}}}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$authorID;{newEmbed:{title:<:warning:1242937830183796796> | Error - 404}{description:
<:dnd:1242937464302075984> **Bu menü sana ait değil.**
}{color:$data[config;color]}{footer:$data[config;footer] - $data[config;version]:$userAvatar[$clientID]}}{actionRow:{button:Destek Sunucum:link:$data[config;discord]:false:1249773065340977202}} {interaction} {ephemeral}]
$onlyIf[$interactionData[values[0]]==kelime;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==sıralamasunucu]
        `
    }
]