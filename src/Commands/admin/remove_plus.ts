import { Constants } from 'discord.js'
import { Command } from '../../Interfaces'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const PlusSchema = require('../../Models/plus')

export const slash: Command = {
  name: 'removeplus',
  description: 'remove plus',
  options: [
    {
      name: 'user',
      description: 'usuario',
      required: true,
      type: Constants.ApplicationCommandOptionTypes.USER
    }
  ],
  testOnly: false,
  run: async ({ interaction }) => {
    if (
      interaction.member.id == '198240622023409665' ||
      interaction.member.id == '763201836596985857'
    ) {
      await interaction.deferReply()
      const user = interaction.options.getUser('user')!
      const plususer = await PlusSchema.findById(user.id)
      if (plususer) {
        plususer.delete()
        return interaction.followUp(
          `usuario ${user.username} deletado com sucesso`
        )
      } else {
        return interaction.followUp(`usuario ${user.username} não encontrado`)
      }
    } else {
      return interaction.reply({
        content: `You don't have permission to use this command`,
        ephemeral: true
      })
    }
  }
}
