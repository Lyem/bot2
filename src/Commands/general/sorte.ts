import { Constants, MessageEmbed } from 'discord.js'
import { Command } from '../../Interfaces'

export const slash: Command = {
  name: 'sorte',
  description: 'Teste a sua sorte',
  options: [
    {
      name: 'user',
      description: 'select user a kiss',
      type: Constants.ApplicationCommandOptionTypes.USER,
      required: true
    }
  ],
  testOnly: false,
  run: async ({ interaction }) => {
    await interaction.deferReply()
    const random = Math.floor(Math.random() * (4 - 0)) + 0
    const embed = new MessageEmbed()
    embed.setTitle(`${interaction.member.user.username} a sua sorte é...`)
    embed.setColor(0x800000)
    if (random == 0) {
      embed.setImage(
        'https://i.pinimg.com/236x/d1/38/56/d13856ac06d3bffe93b09b46bff22bbf.jpg'
      )
      embed.setDescription('Azar grande! Cara, kkk, você quem sabe...')
    } else if (random == 1) {
      embed.setImage(
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWfcK-jx2FkkmmYVGD7oya2TTLSyRdTMSwYA&usqp=CAU'
      )
      embed.setDescription('Azar! Puts...')
    } else if (random == 2) {
      embed.setImage(
        'https://media.discordapp.net/attachments/896145018782359602/1041727905237049364/Picsart_22-11-14_11-48-57-473.jpg?width=831&height=467'
      )
      embed.setDescription('Comum! É, melhor que azar né...')
    } else if (random == 3) {
      embed.setImage('https://pbs.twimg.com/media/FMHsccoXsAQDyyJ.jpg')
      embed.setDescription('Sorte!')
    } else if (random == 4) {
      embed.setImage(
        'https://pic-bstarstatic.akamaized.net/ugc/2ccb176314a684d11d51eeb59040b121f597371b.jpg'
      )
      embed.setDescription('Sorte grande! Mandou bem!!')
    }

    return interaction.followUp({ embeds: [embed] })
  }
}
