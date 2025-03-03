const { SlashCommandBuilder } = require('@discordjs/builders');
const { getVoiceConnection, joinVoiceChannel, createAudioPlayer, createAudioResource, entersState, AudioPlayerStatus } = require('@discordjs/voice');
const ytdl = require('ytdl-core');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Reproduz uma música do YouTube.')
        .addStringOption(option => option.setName('query').setDescription('URL ou termo de pesquisa do YouTube').setRequired(true)),

    async execute(interaction) {
        const query = interaction.options.getString('query');

        // Verifica se o usuário está em um canal de voz
        if (!interaction.member.voice.channel) {
            return interaction.reply({ content: 'Você precisa estar em um canal de voz para reproduzir música!', ephemeral: true });
        }

        // Conecta-se ao canal de voz do usuário
        const connection = getVoiceConnection(interaction.guildId);
        if (!connection) {
            const voiceChannel = interaction.member.voice.channel;
            const voiceConnection = joinVoiceChannel({
                channelId: voiceChannel.id,
                guildId: voiceChannel.guild.id,
                adapterCreator: voiceChannel.guild.voiceAdapterCreator,
            });
        }

        // Obtém o player de áudio
        const player = createAudioPlayer();
        const resource = createAudioResource(ytdl(query, { filter: 'audioonly' }));

        // Adiciona a música à fila de reprodução e reproduz
        player.play(resource);
        connection.subscribe(player);
        await entersState(player, AudioPlayerStatus.Playing, 5e3);
        interaction.reply(`Música adicionada à fila: ${query}`);
    },
};
