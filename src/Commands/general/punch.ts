import { Constants, MessageEmbed } from 'discord.js'
import { Command } from '../../Interfaces'

export const slash: Command = {
  name: 'soco',
  description: 'Soca um usuario',
  options: [
    {
      name: 'usuario',
      description: 'Soca um usuário',
      type: Constants.ApplicationCommandOptionTypes.USER,
      required: true
    }
  ],
  testOnly: false,
  run: async ({ interaction }) => {
    await interaction.deferReply()
    const user = interaction.options.getUser('usuario')!
    const random = Math.floor(Math.random() * (7 - 0)) + 0
    const embed = new MessageEmbed()
    embed.setTitle(`${interaction.member.user.username} socou ${user.username}`)
    embed.setColor(0x800000)
    if (random == 0) {
      embed.setImage(
        'https://media.giphy.com/media/NuiEoMDbstN0J2KAiH/giphy.gif'
      )
    } else if (random == 1) {
      embed.setImage(
        'https://media.giphy.com/media/3ohc1292yKn6Z1saGs/giphy.gif'
      )
    } else if (random == 2) {
      embed.setImage('https://giphy.com/clips/crunchyroll-JUmT23MTPhBnQzRn7g')
    } else if (random == 3) {
      embed.setImage(
        'https://media.giphy.com/media/1Bgr0VaRnx3pCZbaJa/giphy.gif'
      )
    } else if (random == 4) {
      embed.setImage('https://media.giphy.com/media/qPzZQtsv21zjy/giphy.gif')
    } else if (random == 5) {
      embed.setImage(
        'https://media.giphy.com/media/WvzGVdiVRNq8qtWPKu/giphy.gif'
      )
    } else if (random == 6) {
      embed.setImage(
        'https://media.giphy.com/media/NY3tXwOBUwQYq7lbXx/giphy.gif'
      )
    } else if (random == 7) {
      embed.setImage('https://media.giphy.com/media/hzx9toaSQPHRm/giphy.gif')
    }

    return interaction.followUp({ embeds: [embed] })
  }
}
