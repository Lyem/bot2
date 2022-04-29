import { Interaction, CommandInteractionOptionResolver } from 'discord.js'
import { Event } from '../Interfaces'
import { ExtendedInteraction } from '../Interfaces/Command'
import dotenv from 'dotenv'
dotenv.config()

export const event: Event = {
  name: 'interactionCreate',
  run: async (client, interaction: Interaction) => {
    if (interaction.isCommand()) {
      await interaction.deferReply()
      const command = client.commands.get(interaction.commandName)
      if (!command) {
        return interaction.reply('This command does not exist')
      }

      command.run({
        args: interaction.options as CommandInteractionOptionResolver,
        client,
        interaction: interaction as ExtendedInteraction
      })
    }
  }
}
