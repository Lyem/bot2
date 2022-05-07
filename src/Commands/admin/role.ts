import {
  Constants,
  GuildMember,
  MessageActionRow,
  MessageSelectMenu,
  MessageSelectOptionData,
  Role,
  TextChannel,
  Permissions
} from 'discord.js'
import { Command } from '../../Interfaces'

export const slash: Command = {
  name: 'add_role',
  description: 'add role',
  options: [
    {
      name: 'channel',
      description: 'select channel',
      required: true,
      type: Constants.ApplicationCommandOptionTypes.CHANNEL
    },
    {
      name: 'messageid',
      description: 'message id',
      required: true,
      type: Constants.ApplicationCommandOptionTypes.STRING
    },
    {
      name: 'role',
      description: 'select role',
      required: true,
      type: Constants.ApplicationCommandOptionTypes.ROLE
    }
  ],
  testOnly: false,
  selectMenuInteraction: async ({ interaction }) => {
    const component = interaction.component as MessageSelectMenu
    const removed = component.options.filter((option) => {
      return !interaction.values.includes(option.value)
    })

    const member = interaction.member as GuildMember

    for (const id of removed) {
      member.roles.remove(id.value)
    }

    for (const id of interaction.values) {
      member.roles.add(id)
    }

    interaction.reply({ content: 'Roles update!', ephemeral: true })
  },
  run: async ({ client, interaction }) => {
    if (interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
      const channel = (await interaction.options.getChannel(
        'channel'
      )) as TextChannel
      const messageid = await interaction.options.getString('messageid')!
      const role = (await interaction.options.getRole('role')) as Role

      const targetMessage = await channel.messages.fetch(messageid, {
        cache: true,
        force: true
      })

      if (!targetMessage) {
        return interaction.reply({
          content: `Unknoew message`,
          ephemeral: true
        })
      }

      if (targetMessage.author.id !== client.user?.id) {
        return interaction.reply({
          content: `Please provide a message ID that was send from <@${client.user?.id}>`,
          ephemeral: true
        })
      }
      let row = targetMessage.components[0] as MessageActionRow
      if (!row) {
        row = new MessageActionRow()
      }
      const option: MessageSelectOptionData[] = [
        {
          label: role.name,
          value: role.id
        }
      ]

      const menu = row.components[0] as MessageSelectMenu
      if (menu) {
        for (const o of menu.options) {
          if (o.value === option[0].value) {
            return interaction.reply({
              content: `<@&${o.value}> is already part of this menu.`,
              ephemeral: true
            })
          }
        }
        menu.addOptions(option)
        menu.setMaxValues(menu.options.length)
      } else {
        row.addComponents(
          new MessageSelectMenu()
            .setCustomId('auto_roles')
            .setMinValues(0)
            .setMaxValues(1)
            .setPlaceholder('Select your roles....')
            .addOptions(option)
        )
      }

      targetMessage.edit({ components: [row] })
      return interaction.reply({
        content: `Added <@&${role.id}> to the auto roles menu.`,
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
