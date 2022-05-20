const { MessageEmbed, Message, Client } = require("discord.js");

module.exports = {
    name: "about",
    aliases: [],
    description: "A simple information command.",
    category: "Informations",
    example: ["about"],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     */

    run: async (client, message, args, prefix, color) => {
      
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
      .addField(`<a:xeta_arrow:976492129750777936> | Features`, `\`24/7 VC, AutoJoin, Custom Playlist, Bot Channel, etc.\``)
      .setFooter({
        text: message.author.tag,
        iconURL: message.author.avatarURL({dynamic: true})
      })
      
      return message.channel.send({embeds: [aboutMe]})
    },
};
