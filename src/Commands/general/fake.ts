import { Constants, TextChannel } from 'discord.js'
import { Command } from '../../Interfaces'
import axios from 'axios'

export const slash: Command = {
  name: 'fake',
  description: 'send a message as any user on your server',
  options: [
    {
      name: 'user',
      description: 'select user',
      type: Constants.ApplicationCommandOptionTypes.USER,
      required: true
    },
    {
      name: 'message',
      description: 'message to user say',
      required: true,
      type: Constants.ApplicationCommandOptionTypes.STRING
    }
  ],
  testOnly: false,
  run: async ({ interaction }) => {
    const user = await interaction.options.getUser('user')!
    const nickname = await interaction.guild?.members.cache.find(
      (member) => member.id == user.id
    )?.displayName
    const message = interaction.options.getString('message')!
    const channel = (await interaction.channel) as TextChannel
    let webhook = await (
      await channel.fetchWebhooks()
    ).find((webhook) => webhook.name == 'boteco')
    if (!webhook) {
      webhook = await channel.createWebhook('boteco')
    }
    await axios.post(`${webhook.url}`, {
      avatar_url: user.avatarURL({ size: 4096, dynamic: true }),
      username: !nickname ? user.username : nickname,
      content: message
    })
    interaction.reply({
      content: `Message sent successfully`,
      ephemeral: true
    })
  }
}
