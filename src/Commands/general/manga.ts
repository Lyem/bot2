import { Constants, MessageEmbed } from 'discord.js'
import { Command } from '../../Interfaces'
import axios from 'axios'
import search from '../../Interfaces/search'
import manga from '../../Interfaces/manga'

export const slash: Command = {
  name: 'manga',
  description: 'Manga search',
  options: [
    {
      name: 'name',
      description: 'manga name',
      required: true,
      autocomplete: true,
      type: Constants.ApplicationCommandOptionTypes.STRING
    }
  ],
  testOnly: false,
  autocompleteInteraction: async ({ interaction }) => {
    const name = await interaction.options.getString('name')!
    if (name != '') {
      const response = await axios.get<search.RootObject>(
        `https://api.mangadex.org/manga?title=${name}&limit=5&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&includes[]=cover_art&order[relevance]=desc`
      )
      const mangas = response.data.data.map((manga) => {
        return {
          name: manga.attributes.title.en,
          value: `${manga.id}`
        }
      })
      interaction.respond(mangas)
    }
  },
  run: async ({ interaction }) => {
    await interaction.deferReply()
    const id = await interaction.options.getString('name')!
    const response = await axios.get<manga.RootObject>(
      `https://api.mangadex.org/manga/${id}?includes[]=artist&includes[]=author&includes[]=cover_art`
    )
    const embed = new MessageEmbed()
      .setDescription(
        `${
          response.data.data.attributes.description['pt-br']
            ? response.data.data.attributes.description['pt-br'].length > 346
              ? response.data.data.attributes.description['pt-br'].substring(
                  0,
                  346
                ) + ' ...'
              : response.data.data.attributes.description['pt-br']
            : response.data.data.attributes.description.en.length > 346
            ? response.data.data.attributes.description.en.substring(0, 346) +
              ' ...'
            : response.data.data.attributes.description.en
        }`
      )
      .setTitle(`${response.data.data.attributes.title.en}`)
      .setURL(`https://mangadex.org/title/${response.data.data.id}`)
      .setImage(
        `https://og.mangadex.org/og-image/manga/${response.data.data.id}`
      )
    return interaction.followUp({ embeds: [embed] })
  }
}
