const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Responde com "Mikudayo".'),
	async execute(interaction) {
		await interaction.reply('Mikudayo.');
	},
};