import { Constants } from 'discord.js'
import { Command } from '../../Interfaces'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const PlusSchema = require('../../Models/plus')

export const slash: Command = {
  name: 'plus',
  description: 'add plus',
  options: [
    {
      name: 'user',
      description: 'usuario',
      required: true,
      type: Constants.ApplicationCommandOptionTypes.USER
    },
    {
      name: 'meses',
      description: 'meses pagos',
      required: true,
      type: Constants.ApplicationCommandOptionTypes.NUMBER
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
      const meses = interaction.options.getNumber('meses')!
      const plususer = await PlusSchema.findById(user.id)
      if (!plususer) {
        const plus = new PlusSchema({
          _id: user.id,
          name: user.username,
          qt: meses,
          lastUpdate: new Date(),
          createAt: new Date()
        })
        await plus.save()
      } else {
        await PlusSchema.findByIdAndUpdate(
          user.id,
          {
            $set: {
              name: user.username,
              qt: meses,
              lastUpdate: new Date()
            }
          },
          { new: true }
        )
      }
      return interaction.followUp(
        `Plus de ${meses} adicionado com sucesso ao usuario ${user.username}`
      )
    } else {
      return interaction.reply({
        content: `You don't have permission to use this command`,
        ephemeral: true
      })
    }
  }
}
