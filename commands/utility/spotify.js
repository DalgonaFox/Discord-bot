const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spotify')
		.setDescription('Replies with a playlist.'),
	async execute(interaction) {
		await interaction.reply('https://open.spotify.com/playlist/6C8bxgL1odiaC9yvW0DIbs?si=840aa559d6ee4767');
	},
};