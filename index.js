// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');


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
	}
});

const wait = require('util').promisify(setTimeout);

const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'ping') {
		if (interaction.commandName === 'ping') {
            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('primary')
                        .setLabel('Primary')
                        .setStyle('PRIMARY')
                        .setDisabled(true)
                );
    
            await interaction.reply({ content: 'Pong!', components: [row] });
                       

}
}
}
)
;