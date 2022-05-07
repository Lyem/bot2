import {
  Interaction,
  CommandInteractionOptionResolver,
  AutocompleteInteraction,
  SelectMenuInteraction,
  GuildMember
} from 'discord.js'
import { Event } from '../Interfaces'
import { ExtendedInteraction } from '../Interfaces/Command'
import dotenv from 'dotenv'
dotenv.config()

export const event: Event = {
  name: 'interactionCreate',
  run: async (client, interaction: Interaction) => {
    if (interaction.isCommand()) {
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
    if (interaction.isAutocomplete()) {
      const command = client.commands.get(interaction.commandName)
      command?.autocompleteInteraction?.({
        client,
        interaction: interaction as AutocompleteInteraction
      })
    }
    if (interaction.isSelectMenu()) {
      if (
        interaction.customId == 'auto_roles' &&
        interaction.member instanceof GuildMember
      ) {
        const command = client.commands.get('add_role')
        command?.selectMenuInteraction?.({
          client,
          interaction: interaction as SelectMenuInteraction
        })
      }
    }
  }
}
