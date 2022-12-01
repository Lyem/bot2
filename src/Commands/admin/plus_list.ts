import { Command } from '../../Interfaces'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const PlusSchema = require('../../Models/plus')

export const slash: Command = {
  name: 'pluslist',
  description: 'list plus',
  testOnly: false,
  run: async ({ interaction }) => {
    if (
      interaction.member.id == '198240622023409665' ||
      interaction.member.id == '763201836596985857'
    ) {
      const plus = await PlusSchema.find()
      const channel = interaction.channel
      plus.map(
        async (plus: any) =>
          await channel?.send(
            `usuario: ${plus.name}\nid: ${plus._id}\nmeses: ${plus.qt}`
          )
      )
      return interaction.reply({
        content: 'Usuarios listados com sucesso!',
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
