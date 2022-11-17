const { EmbedBuilder } = require('discord.js')

module.exports = {
    name: 'ip',
    alias: ['server'],

run (client, message, args, prefix) {
        const embed = new EmbedBuilder()
        .setColor(client.color)    
        .setTitle('Informacion - Minecraft ')
            .setDescription(` (Discord en el about de arriba) `)
            .setURL('https://discord.gg/59m7E7uk5u')
            .setThumbnail('https://cdn.discordapp.com/icons/1015723532933664789/7dd061501c08394df477661da8bf6896.png?size=1024')
            .addFields(
        { name: 'IP', value: 'mc.ultracrafts.ml' },
		{ name: 'Versiones:', value: '1.12<>1.19✅', inline: true },
            )
            .setFooter({ text: 'Puerto: 62221', value: '62221', inline: true });
        message.channel.send({embeds: [embed]})
    }
}