import { Event } from '../Interfaces'

export const event: Event = {
  name: 'ready',
  run: (client) => {
    client.user?.setPresence({
      status: 'online',
      activities: [{ name: 'feira da foda', type: 'COMPETING' }]
    })
    console.log(`[CLIENT]: ${client.user?.username} on air!`)
  }
}
