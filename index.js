// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { prefix, token, Insult } = require('./config.json');
const { MessageEmbed } = require('discord.js');


// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
	client.user.setPresence({ activities:
	 [{ name: 'simp' }], 
	 type: 'STREAMING',
	 url: 'https://www.twitch.tv/pokimane',
	status: 'idle' });
});

// Login to Discord with your client's token
client.login(token);

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'howmanygay') {
		await interaction.reply(` ${interaction.guild.memberCount} user is gay`);
	} else if (commandName === 'serverinfo') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'userinfo') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	} else if (commandName === 'ip') {
		await interaction.reply(`${interaction.user} your ip is 189.220.45.192`);
    } else if (commandName === 'whogay') {
		await interaction.reply(` ${interaction.user} is gay`);
	} else if (commandName === 'banrandom') {
		await interaction.reply(` ${interaction.user} bye :D`);
	} else if (commandName === 'cbt') {
		await interaction.reply(` ${interaction.user} https://cdn.discordapp.com/attachments/876137404153614347/904385472741126176/get_wifi_anywhere_you_go-1.mp4`);
	} else if (commandName === 'dothetrick') {
		await interaction.reply('Sheeeeeeesh')
	} else if (commandName === 'ping') {
		await interaction.reply(`Pong! ${round(bot.latency * 1000)}ms`)
	} else if (commandName === 'avatar') {
		await interaction.reply(`${interaction.user.displayAvatarURL({ dynamic: true , size: 2048 , format: "png" })}`)
	} else if (commandName === 'sus') {
		await interaction.reply(`rember to follow this cool man on github:\n https://github.com/GrowingUnderTheTree`)
	} else if (commandName === 'information') {
		const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Information lmao')
	.setURL('https://discord.js.org/')
	.setAuthor('Segs', 'https://i1.sndcdn.com/artworks-8ybm6xpeLGqNThGT-TsgqMw-t500x500.jpg', 'https://GrowingUnderTheTree.github.io')
	.setDescription(`Informations of ${interaction.user}`)
	.setThumbnail(`${interaction.user.displayAvatarURL({ dynamic: true , size: 2048 , format: "png" })}`)
	.addFields(
		{ name: 'tag and id', value: `${interaction.user.tag}, ${interaction.user.id}` },
		{ name: 'Created at', value: `${interaction.user.createdAt}`},
		{ name: 'My github profile: ', value: 'https://github.com/GrowingUnderTheTree', inline: true },
		{ name: 'Server name', value:`${interaction.guild.name}`}
	)
	.setImage(`https://i1.sndcdn.com/artworks-8ybm6xpeLGqNThGT-TsgqMw-t500x500.jpg`)
	.setTimestamp()
	.setFooter('I make this bot lmao','https://i1.sndcdn.com/artworks-8ybm6xpeLGqNThGT-TsgqMw-t500x500.jpg');

 await interaction.reply({ embeds: [exampleEmbed] });
	}
})