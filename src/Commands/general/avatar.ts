import { Constants, MessageEmbed } from 'discord.js'
import { Command } from '../../Interfaces'

export const slash: Command = {
  name: 'avatar',
  description: 'Show avatar user',
  options: [
    {
      name: 'user',
      description: 'select user',
      type: Constants.ApplicationCommandOptionTypes.USER,
      required: true
    }
  ],
  testOnly: false,
  run: async ({ interaction }) => {
    await interaction.deferReply()
    const user = interaction.options.getUser('user')
    const url = user?.avatarURL({ size: 4096, dynamic: true })
    const embed = new MessageEmbed()
    embed.setColor('#206694')
    embed.setImage(url!)
    embed.setTitle('Baixar')
    embed.setURL(url!)
    return await interaction.followUp({ embeds: [embed] })
  }
}
