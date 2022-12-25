import { Command } from '../../Interfaces'

export const slash: Command = {
  name: 'count_servers',
  description: 'returns how many servers this bot is on',
  testOnly: false,
  run: async ({ interaction }) => {
    await interaction.deferReply()
    const guilds = await interaction.client.guilds.cache.size
    return interaction.followUp(
      `este bot está em: **${guilds} ${
        guilds > 1 ? 'servidores' : 'servidor'
      }**`
    )
  }
}
