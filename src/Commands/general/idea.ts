import { Constants, Message, MessageEmbed } from 'discord.js'
import { Command } from '../../Interfaces'

export const slash: Command = {
  name: 'idea',
  description: 'Send your idea',
  options: [
    {
      name: 'idea',
      description: 'write your idea',
      type: Constants.ApplicationCommandOptionTypes.STRING,
      required: true
    }
  ],
  testOnly: false,
  run: async ({ interaction }) => {
    const idea = interaction.options.getString('idea')!
    await interaction.deferReply()
    const embed = new MessageEmbed()
    embed.setDescription(idea)
    const message = (await interaction.followUp({ embeds: [embed] })) as Message
    message.react('<a:d_gaba09:1036439881846640691>')
    message.react('<a:uncheck:1038654352564437093>')
  }
}
