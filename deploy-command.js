const { SlashCommandBuilder, SlashCommandSubcommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('howmanygay').setDescription('Guess what ur gay'),
	new SlashCommandBuilder().setName('serverinfo').setDescription('Replies with server info'),
	new SlashCommandBuilder().setName('userinfo').setDescription('Replies with user info'),
    new SlashCommandBuilder().setName('ip').setDescription('Collect you ip and sell it to FBI'),
    new SlashCommandBuilder().setName('whogay').setDescription('Hmm I wonder who is gay'),
    new SlashCommandBuilder().setName('ping').setDescription('PONG!'),
	new SlashCommandBuilder().setName('banrandom').setDescription('OH MY GOD SOMEONE GOTTA GET BANNED'),
	new SlashCommandBuilder().setName('cbt').setDescription('Weekly CBT training UwU'),
	new SlashCommandBuilder().setName('dothetrick').setDescription('DO THE TRICK YES'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);