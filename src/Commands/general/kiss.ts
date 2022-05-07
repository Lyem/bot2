import { Constants, MessageEmbed } from 'discord.js'
import { Command } from '../../Interfaces'

export const slash: Command = {
  name: 'kiss',
  description: 'Kiss a user',
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
    const user = interaction.options.getUser('user')!
    const random = Math.floor(Math.random() * (7 - 0)) + 0
    const embed = new MessageEmbed()
    embed.setTitle(
      `${interaction.member.user.username} beijou ${user.username}`
    )
    embed.setColor(0x800000)
    if (random == 0) {
      embed.setImage(
        'https://media.giphy.com/media/3uhDOBLjDX5yDNXr3x/giphy.gif'
      )
    } else if (random == 1) {
      embed.setImage(
        'https://loritta.website/assets/img/actions/kiss/female_x_male/gif_378.gif'
      )
    } else if (random == 2) {
      embed.setImage(
        'https://media.giphy.com/media/lnLTjmGU7qt0Ams20V/giphy.gif'
      )
    } else if (random == 3) {
      embed.setImage('https://i.imgur.com/4Ad9iwh.gif')
    } else if (random == 4) {
      embed.setImage(
        'https://pa1.narvii.com/6942/4e2885141812813b051d187a82b628c1dc4b0326r1-500-281_hq.gif'
      )
    } else if (random == 5) {
      embed.setImage(
        'https://media.giphy.com/media/l4FsKa1n9fyStiwZW/giphy.gif'
      )
    } else if (random == 6) {
      embed.setImage(
        'https://gifimage.net/wp-content/uploads/2018/10/anime-peck-gif-5.gif'
      )
    } else if (random == 7) {
      embed.setImage(
        'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_348.gif'
      )
    }

    return interaction.followUp({ embeds: [embed] })
  }
}
