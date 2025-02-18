const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Mikudayo.'),
	async execute(interaction) {
		await interaction.reply('Mikudayo.');
	},
};