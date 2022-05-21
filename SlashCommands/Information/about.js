const { MessageEmbed, CommandInteraction, Client } = require("discord.js")

module.exports = {
    name: "about",
    description: "Get Information about xeta",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction, color) => {
        await interaction.deferReply({
            ephemeral: false
        });
      
      const aboutMe = new MessageEmbed()
      .setAuthor({
        name: `Xeta Manager`,
        iconURL: client.user.displayAvatarURL({dynamic: true})
      })
      .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
      .setColor(color)
      .setDescription(`**Xeta** is an advance easy to use music bot with premium features`)
      .addField(`<a:xeta_arrow:976492129750777936> | Developer(s)`, `[B x B Y 🖤#5310](https://discordapp.com/users/936577273526644736)`)
      .addField(`<a:xeta_arrow:976492129750777936> | Owner(s)`, `SOON`)
      .addField(`<a:xeta_arrow:976492129750777936> | Features`, `\`24/7 VC\`, \`AutoJoin\`, \`Bot Channel\`, \`etc\`.`)
      .setFooter({
        text: interaction.user.tag,
        iconURL: interaction.user.avatarURL({dynamic: true})
      })
      
      return interaction.followUp({embeds: [aboutMe]})
    },
};
