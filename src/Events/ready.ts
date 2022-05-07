import { Event } from '../Interfaces'

export const event: Event = {
  name: 'ready',
  run: (client) => {
    client.user?.setPresence({
      status: 'dnd',
      activities: [{ name: 'Dioogo destruir a scan', type: 'WATCHING' }]
    })
    console.log(`[CLIENT]: ${client.user?.username} on air!`)
  }
}
