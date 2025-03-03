const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('huh')
		.setDescription('Responde com um gif.'),
	async execute(interaction) {
		await interaction.reply('https://tenor.com/bndTE.gif');
	},
};