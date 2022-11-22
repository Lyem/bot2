import { Constants, MessageEmbed } from 'discord.js'
import { Command } from '../../Interfaces'
import UsuarioSorteSchema from '../../Models/usersorte'

export const slash: Command = {
  name: 'sorte',
  description: 'Teste a sua sorte',
  options: [
    {
      name: 'user',
      description: 'Teste a sorte do usuário',
      type: Constants.ApplicationCommandOptionTypes.USER,
      required: true
    }
  ],
  testOnly: false,
  run: async ({ interaction }) => {
    await interaction.deferReply()
    const usuario = interaction.options.getUser('user')!
    let random = Math.floor(Math.random() * (100 - 0)) + 0
    const embed = new MessageEmbed()
    const usuarioSorte = await UsuarioSorteSchema.findById(usuario.id)
    console.log(usuarioSorte)
    if (!usuarioSorte) {
      const usuarioDaSorte = new UsuarioSorteSchema({
        _id: usuario.id,
        numerosorte: random,
        tempo: new Date()
      })
      await usuarioDaSorte.save()
    } else {
      const anterior = new Date(usuarioSorte.tempo)
      const agora = new Date()
      console.log(anterior)
      console.log(agora)
      console.log(anterior.getDay() < agora.getDay())
      if (anterior.getDay() > agora.getDay()) {
        await UsuarioSorteSchema.findByIdAndUpdate(usuario.id, {
          $set: {
            _id: usuario.id,
            numerosorte: random,
            tempo: new Date()
          }
        })
      } else {
        random = usuarioSorte.numerosorte
      }
    }

    embed.setTitle(`${usuario.username} a sua sorte é...`)
    embed.setColor(0x800000)
    if (random == 0 || random < 10) {
      embed.setImage(
        'https://cdn.discordapp.com/attachments/975827441488637982/1041830072769843291/325_Sem_Titulo_20221114184038.png'
      )
      embed.setDescription('Azar Extremo! Cara, kkk, você quem sabe...')
    } else if (random >= 10 && random < 20) {
      embed.setImage(
        'https://cdn.discordapp.com/attachments/975827441488637982/1041828901707579423/325_Sem_Titulo_20221114183550.png'
      )
      embed.setDescription('Azar Grande! Puts...')
    } else if (random >= 20 && random < 40) {
      embed.setImage(
        'https://cdn.discordapp.com/attachments/975827441488637982/1041828901082636348/325_Sem_Titulo_20221114183301.png'
      )
      embed.setDescription('Azar básico! É... vai que né...')
    } else if (random >= 40 && random < 50) {
      embed.setImage(
        'https://media.discordapp.net/attachments/896145018782359602/1041727905237049364/Picsart_22-11-14_11-48-57-473.jpg?width=831&height=467'
      )
      embed.setDescription('Comum! É, melhor que azar né...')
    } else if (random >= 50 && random < 70) {
      embed.setImage(
        'https://cdn.discordapp.com/attachments/975827441488637982/1041829087066476697/325_Sem_Titulo_20221114183640.png'
      )
      embed.setDescription('Sorte!')
    } else if (random >= 70 && random < 90) {
      embed.setImage('https://pbs.twimg.com/media/FMHsccoXsAQDyyJ.jpg')
      embed.setDescription('Sorte grande! Mandou bem!!')
    } else if (random >= 90 && random <= 100) {
      embed.setImage(
        'https://cdn.discordapp.com/attachments/975827441488637982/1041828900730306580/325_Sem_Titulo_20221114183247.png'
      )
      embed.setDescription('Sorte extremamente rara! Mandou bem!!')
    }

    return interaction.followUp({ embeds: [embed] })
  }
}
