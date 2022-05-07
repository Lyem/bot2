import { Constants } from 'discord.js'
import { Command } from '../../Interfaces'

export const slash: Command = {
  name: 'say',
  description: 'bot say',
  options: [
    {
      name: 'message',
      description: 'message to bot say',
      required: true,
      type: Constants.ApplicationCommandOptionTypes.STRING
    }
  ],
  testOnly: false,
  run: async ({ interaction }) => {
    const message = await interaction.options.getString('message')!
    return interaction.reply(`${message}`)
  }
}
