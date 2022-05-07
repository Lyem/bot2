import {
  Constants,
  TextChannel,
  Permissions,
  MessageEmbed,
  HexColorString
} from 'discord.js'
import { Command } from '../../Interfaces'

export const slash: Command = {
  name: 'editembed',
  description: 'edit embed',
  options: [
    {
      name: 'channel',
      description: 'channel to edit',
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
      name: 'color',
      description: 'color select',
      required: false,
      type: Constants.ApplicationCommandOptionTypes.STRING
    },
    {
      name: 'author_name',
      description: 'author name',
      required: false,
      type: Constants.ApplicationCommandOptionTypes.STRING
    },
    {
      name: 'author_icon',
      description: 'author icon',
      required: false,
      type: Constants.ApplicationCommandOptionTypes.STRING
    },
    {
      name: 'author_url',
      description: 'author url',
      required: false,
      type: Constants.ApplicationCommandOptionTypes.STRING
    },
    {
      name: 'title',
      description: 'embed title',
      required: false,
      type: Constants.ApplicationCommandOptionTypes.STRING
    },
    {
      name: 'description',
      description: 'embed description',
      required: false,
      type: Constants.ApplicationCommandOptionTypes.STRING
    },
    {
      name: 'image',
      description: 'embed image',
      required: false,
      type: Constants.ApplicationCommandOptionTypes.STRING
    },
    {
      name: 'footer_text',
      description: 'embed footer text',
      required: false,
      type: Constants.ApplicationCommandOptionTypes.STRING
    },
    {
      name: 'footer_image',
      description: 'embed footer image',
      required: false,
      type: Constants.ApplicationCommandOptionTypes.STRING
    },
    {
      name: 'thumbnail',
      description: 'embed thumbnail',
      required: false,
      type: Constants.ApplicationCommandOptionTypes.STRING
    }
  ],
  testOnly: false,
  run: async ({ client, interaction }) => {
    if (interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
      let color = interaction.options.getString('color') as HexColorString
      const author_name = interaction.options.getString('author_name')!
      const author_icon = interaction.options.getString('author_icon')!
      const author_url = interaction.options.getString('author_url')!
      const description = interaction.options.getString('description')!
      const title = interaction.options.getString('title')!
      const image = interaction.options.getString('image')!
      const footer_text = interaction.options.getString('footer_text')!
      const footer_image = interaction.options.getString('footer_image')!
      const thumbnail = interaction.options.getString('thumbnail')!
      const messageid = interaction.options.getString('messageid')!
      if (!color) color = `#000`
      const channel = interaction.options.getChannel('channel') as TextChannel

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

      const embed = new MessageEmbed()
      if (author_name) {
        embed.setAuthor({ name: author_name })
        if (author_icon) {
          embed.setAuthor({ name: author_name, iconURL: author_icon })
          if (author_url) {
            embed.setAuthor({
              name: author_name,
              iconURL: author_icon,
              url: author_url
            })
          }
        }
      }
      if (title) {
        embed.setTitle(title)
      }
      if (description) {
        embed.setDescription(description)
      }
      if (image) {
        embed.setImage(image)
      }
      if (footer_text) {
        embed.setFooter({ text: footer_text })
        if (footer_image) {
          embed.setFooter({ text: footer_text, iconURL: footer_image })
        }
      }
      if (thumbnail) {
        embed.setThumbnail(thumbnail)
      }
      embed.setColor(color)
      if (
        !author_name &&
        !author_icon &&
        !author_url &&
        !title &&
        !description &&
        !image &&
        !footer_text &&
        !footer_image &&
        !thumbnail
      ) {
        return interaction.reply({
          content: `The embed must have some content`,
          ephemeral: true
        })
      } else {
        await targetMessage.edit({ embeds: [embed] })
        return interaction.reply({
          content: `Message sent successfully`,
          ephemeral: true
        })
      }
    } else {
      return interaction.reply({
        content: `You don't have permission to use this command`,
        ephemeral: true
      })
    }
  }
}
