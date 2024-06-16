module.exports = [
    {
        name: "word-game",
        type: "interaction",
        prototype: "slash",
        code:`
$dbDelete[kelimeoyunukisi_$guildID]
$dbSet[kelimeoyunuharf_$guildID;$get[harf]]
$dbSet[kelimeoyunudil_$guildID;$slashOption[dil]]
$dbSet[kelimeoyunukanal_$guildID;$slashOption[kanal]]
$channelSendMessage[$slashOption[kanal];<:info:1242938044777103480> **| Kelime oyununa hoş geldin hadi başı \`$get[harf]\` ile başlayan bir kelime yaz.**]
$let[harf;$randomText[a;b;c;ç;d;e;f;g;h;;i;ı;j;k;l;m;n;o;ö;p;r;s;ş;t;u;ü;v;y;z]]
$interactionFollowUp[<:edit:1242937465980063754> **| Kelime oyunu ayarlandı:**
*Kanal:* <#$slashOption[kanal]>
*Dil:* \`$slashOption[dil]\`]
$interactionDefer
$onlyIf[$channelType[$slashOption[kanal]]==text;{newEmbed:{title:<:warning:1242937830183796796> | Error - 404}{description:
<:dnd:1242937464302075984> **Oynanılanacak kanalın bir metin kanalı olması gerekir.**
}{color:$data[config;color]}{footer:$data[config;footer] - $data[config;version]:$userAvatar[$clientID]}}{actionRow:{button:Destek Sunucum:link:$data[config;discord]:false:1249773065340977202}} {interaction} {ephemeral}]
$onlyPerms[administrator;{newEmbed:{title:<:warning:1242937830183796796> | Error - 404}{description:
<:dnd:1242937464302075984> **Bu komutu sadece \`Yönetici\` yetkisine sahip kişiler kullanabilir.**
}{color:$data[config;color]}{footer:$data[config;footer] - $data[config;version]:$userAvatar[$clientID]}}{actionRow:{button:Destek Sunucum:link:$data[config;discord]:false:1249773065340977202}} {interaction} {ephemeral}]
        `
    }
]