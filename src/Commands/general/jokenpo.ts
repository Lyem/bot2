import { Constants, MessageEmbed } from 'discord.js'
import { Command } from '../../Interfaces'

export const slash: Command = {
  name: 'jokenpo',
  description: 'Que vença o mais ~~sortudo~~ melhor... cof cof',
  options: [
    {
      name: 'user',
      description: 'Dispute contra ele numa partida justa e honesta de jokenpo!',
      type: Constants.ApplicationCommandOptionTypes.USER,
      required: true
    }
  ],
  testOnly: false,
  run: async ({ interaction }) => {
    await interaction.deferReply()
    const usuario = interaction.options.getUser('user')!
    const random = Math.floor(Math.random() * (8 - 0)) + 0
    const embed = new MessageEmbed()
    embed.setTitle(
      `${interaction.member.user.username} contra ${usuario.username}, que vença o melhor!`
    )
    embed.setColor(0x800000)
    if (random == 0) {
      embed.setDescription(`Ambos foram pedra! O resultado é um empate!`)
    } else if (random == 1) {
      embed.setDescription(
        `${interaction.member.user.username} escolheu pedra e ${usuario.username} escolheu papel! ${usuario.username} venceu!`
      )
    } else if (random == 2) {
      embed.setDescription(
        `${interaction.member.user.username} escolheu pedra e ${usuario.username} escolheu tesoura! ${interaction.member.user.username} venceu!`
      )
    } else if (random == 3) {
      embed.setDescription(
        `${interaction.member.user.username} escolheu papel e ${usuario.username} escolheu pedra! ${interaction.member.user.username} venceu!`
      )
    } else if (random == 4) {
      embed.setDescription(`Ambos foram papel! O resultado é um empate!`)
    } else if (random == 5) {
      embed.setDescription(
        `${interaction.member.user.username} escolheu papel e ${usuario.username} escolheu tesoura! ${usuario.username} venceu!`
      )
    } else if (random == 6) {
      embed.setDescription(
        `${interaction.member.user.username} escolheu tesoura e ${usuario.username} escolheu pedra! ${usuario.username} venceu!`
      )
    } else if (random == 7) {
      embed.setDescription(
        `${interaction.member.user.username} escolheu tesoura e ${usuario.username} escolheu papel! ${interaction.member.user.username} venceu!`
      )
    } else if (random == 8) {
      embed.setDescription(`Ambos foram tesoura! O resultado é um empate!`)
    }

    return interaction.followUp({ embeds: [embed] })
  }
}
