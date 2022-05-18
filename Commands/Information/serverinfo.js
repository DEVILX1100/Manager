const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "serverinfo",
    aliases: ["si", "guildinfo"],
    description: "Get Server Information.",
    category: "Informations",
    example: ["serverinfo"],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     */

    run: async (client, message, args, prefix, color) => {

        let boostlevel = message.guild.premiumTier
        if (boostlevel === "0") {
            boostlevel = "None";
        }
        if (boostlevel === "1") {
            boostlevel = "Level 1 <a:xeta_boost:976505637334822973>";
        }
        if (boostlevel === "2") {
            boostlevel = "Level 2 <a:xeta_boost:976505637334822973>";
        }
        if (boostlevel === "3") {
            boostlevel = "Level 3 <a:xeta_boost:976505637334822973>";
        }

        if (message.guild.region === "india") message.guild.region = "India";
        if (message.guild.region === "brazil") message.guild.region = "Brazil";
        if (message.guild.region === "japan") message.guild.region = "Japan";
        if (message.guild.region === "russia") message.guild.region = "Russia";
        if (message.guild.region === "europe") message.guild.region = "Europe";
        if (message.guild.region === "sydney") message.guild.region = "Sydney";
        if (message.guild.region === "singapore") message.guild.region = "Singapore";
        if (message.guild.region === "hongkong") message.guild.region = "Hong Kong";
        if (message.guild.region === "southafrica") message.guild.region = "South Africa";
        if (message.guild.region === "us-east") message.guild.region = "US East";
        if (message.guild.region === "us-west") message.guild.region = "US West";
        if (message.guild.region === "us-central") message.guild.region = "US Central";
        if (message.guild.region === "us-south") message.guild.region = "US South";

        let embed = new MessageEmbed()
            .setTitle(`About ${message.guild.name}`)
            .addField(`<a:xeta_arrow:976492129750777936> | Owner`, `${message.guild.owner}`)
            .addField(`<a:xeta_arrow:976492129750777936> | Server ID`, `${message.guild.id}`)
            .addField(`<a:xeta_arrow:976492129750777936> | Region`, `${message.guild.region}`)
            .addField(`<a:xeta_arrow:976492129750777936> | Total Members`, `${message.guild.memberCount}`)
            .addField(`<a:xeta_arrow:976492129750777936> | Total Channels`, `${message.guild.channels.cache.size}`)
            .addField(`<a:xeta_arrow:976492129750777936> | Total Roles`, `${message.guild.roles.cache.size}`)
            .addField(`<a:xeta_arrow:976492129750777936> | Total Emojis`, `${message.guild.emojis.cache.size}`)
            .addField(
                `<a:xeta_arrow:976492129750777936> | Server Created At`,
                `<t:${Math.round(message.guild.createdAt / 1000)}:R>`
            )
            .addField(
                `<a:xeta_arrow:976492129750777936> | Server Boosts`,
                `${message.guild.premiumSubscriptionCount}`
            )
            .addField(`<a:xeta_arrow:976492129750777936> | Boost Level`, `${boostlevel}`)
            .addField(`<a:xeta_arrow:976492129750777936> | Security`, `${message.guild.verificationLevel}`)
            .setThumbnail(message.guild.iconURL({ dynamic: true, size: 1024 }))
            .setColor(color)
            .setFooter({
                text: message.author.tag,
                iconURL: message.author.displayAvatarURL({ dynamic: true })
            });
        return message.reply({ embeds: [embed] });
    }
};
