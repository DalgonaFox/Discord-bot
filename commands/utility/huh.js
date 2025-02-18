const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('huh')
		.setDescription('Replies with a gif'),
	async execute(interaction) {
		await interaction.reply('https://tenor.com/bndTE.gif');
	},
};