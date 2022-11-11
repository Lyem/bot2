import { Event } from '../Interfaces'

export const event: Event = {
  name: 'ready',
  run: (client) => {
    client.user?.setPresence({
      status: 'dnd',
      activities: [{ name: 'Galho quebrando galhos', type: 'WATCHING' }]
    })
    console.log(`[CLIENT]: ${client.user?.username} on air!`)
  }
}
