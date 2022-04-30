import { Command } from '../../Interfaces'
import { Constants, Permissions } from 'discord.js'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Guild = require('../../Models/guilds')

export const slash: Command = {
  name: 'lasts_updates',
  description: 'MangaDex Lasts Updates',
  options: [
    {
      name: 'webhook',
      description: 'webhook',
      required: true,
      type: Constants.ApplicationCommandOptionTypes.STRING
    },
    {
      name: 'time',
      description: 'choice the time update em seconds',
      required: true,
      type: Constants.ApplicationCommandOptionTypes.NUMBER
    },
    {
      name: 'lang',
      description: 'lang updates',
      required: true,
      type: Constants.ApplicationCommandOptionTypes.STRING
    }
  ],
  testOnly: false,
  run: async ({ interaction }) => {
    const webhook = await interaction.options.getString('webhook')!
    const lang = await interaction.options.getString('lang')!
    const time = await interaction.options.getNumber('time')!
    const existGuild = await Guild.findById(interaction.guildId)

    if (interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
      if (!existGuild) {
        const guild = new Guild({
          _id: interaction.guildId,
          name: interaction.guild?.name,
          timeUpdate: time,
          lastUpdate: new Date(),
          lastMangaUpdate: new Date(),
          webHook: webhook,
          lang: lang
        })
        await guild.save()
        return await interaction.followUp(`RSS created successful`)
      } else {
        await Guild.findByIdAndUpdate(
          interaction.guildId,
          {
            $set: {
              name: interaction.guild?.name,
              timeUpdate: time,
              lastUpdate: new Date(),
              lastMangaUpdate: new Date(),
              webHook: webhook,
              lang: lang
            }
          },
          { new: true }
        )
        return await interaction.followUp(`RSS successful update`)
      }
    } else {
      return await interaction.followUp(
        `You don't have permission to use this command`
      )
    }
  }
}
