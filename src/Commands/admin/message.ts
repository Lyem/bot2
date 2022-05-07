import { Constants, TextChannel, Permissions } from 'discord.js'
import { Command } from '../../Interfaces'

export const slash: Command = {
  name: 'message',
  description: 'invite message',
  options: [
    {
      name: 'channel',
      description: 'channel to invite this message',
      required: true,
      type: Constants.ApplicationCommandOptionTypes.CHANNEL
    },
    {
      name: 'message',
      description: 'message to bot say',
      required: true,
      type: Constants.ApplicationCommandOptionTypes.STRING
    }
  ],
  testOnly: false,
  run: async ({ interaction }) => {
    if (interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
      const message = interaction.options.getString('message')!
      const channel = interaction.options.getChannel('channel') as TextChannel
      channel.send({ content: message })
      return interaction.reply({
        content: `Message sent successfully`,
        ephemeral: true
      })
    } else {
      return interaction.reply({
        content: `You don't have permission to use this command`,
        ephemeral: true
      })
    }
  }
}
