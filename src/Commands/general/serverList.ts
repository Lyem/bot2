import { Command } from '../../Interfaces'

export const slash: Command = {
  name: 'server_list',
  description: 'returns name servers',
  testOnly: true,
  run: async ({ interaction }) => {
    await interaction.deferReply()
    const guilds = await interaction.client.guilds.cache.map((guild) => guild.name);
    return interaction.followUp(
      `${'```'}${guilds.join('\n')}${'```'}`
    )
  }
}
