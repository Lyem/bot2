import { Event } from '../Interfaces'

export const event: Event = {
  name: 'ready',
  run: (client) => {
    client.user?.setPresence({
      status: 'online',
      activities: [{ name: 'Gaba socando fofo', type: 'LISTENING' }]
    })
    console.log(`[CLIENT]: ${client.user?.username} on air!`)
  }
}
