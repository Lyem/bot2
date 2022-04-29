import { Command } from '../../Interfaces'

export const slash: Command = {
  name: 'ping',
  description: 'Calculate bot ping',
  testOnly: false,
  run: ({ interaction }) => {
    return interaction.followUp(`Pong ${interaction.client.ws.ping} ms.`)
  }
}
