module.exports = [
    {
        name: "ayarlar",
        type: "interaction",
        prototype: "slash",
        code:`
$interactionFollowUp[{newEmbed:{title:<:database:1243240284628975728> | Sunucu ayarları}{thumbnail:$if[$guildIcon==;;$guildIcon]}{description:
$if[$dbHas[kelimeoyunukanal_$guildID]==true;<:online:1242937495390257265>;<:offline:1242937491405672448>] **Kelime oyunu$if[$dbHas[kelimeoyunukanal_$guildID]==true;:]** $if[$dbHas[kelimeoyunukanal_$guildID]==true;<#$dbGet[kelimeoyunukanal_$guildID]>]
}{color:$data[config;color]}{footer:$data[config;footer] - $data[config;version]}}{actionRow:{button:Kelime Oyununu Kapat:2:kelimekapat:$if[$dbHas[kelimeoyunukanal_$guildID]==true;false;true]:$if[$dbHas[kelimeoyunukanal_$guildID]==true;1242937495390257265;1242937491405672448]}};true]
$interactionDefer[true]
$onlyPerms[administrator;{newEmbed:{title:<:warning:1242937830183796796> | Error - 404}{description:
<:dnd:1242937464302075984> **Bu komutu sadece \`Yönetici\` yetkisine sahip kişiler kullanabilir.**
}{color:$data[config;color]}{footer:$data[config;footer] - $data[config;version]:$userAvatar[$clientID]}}{actionRow:{button:Destek Sunucum:link:$data[config;discord]:false:1249773065340977202}} {interaction} {ephemeral}]
        `
    },{
        name: "kelimekapat",
        type: "interaction",
        prototype: "button",
        code:`
$dbDelete[kelimeoyunukanal_$guildID]
$dbDelete[kelimeoyunukisi_$guildID]
$dbDelete[kelimeoyunuharf_$guildID]
$dbDelete[kelimeoyunudil_$guildID]
$dbDelete[kelimeoyunukelimeler_$guildID]
$interactionUpdate[{newEmbed:{title:<:database:1243240284628975728> | Sunucu ayarları}{thumbnail:$if[$guildIcon==;;$guildIcon]}{description:
<:offline:1242937491405672448> **Kelime oyunu**
}{color:$data[config;color]}{footer:$data[config;footer] - $data[config;version]}}{actionRow:{button:Kelime Oyununu Kapat:2:kelimekapat:true:1242937491405672448}}]
        `
    }
]