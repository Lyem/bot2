import {
  CommandInteraction,
  ChatInputApplicationCommandData,
  GuildMember,
  ApplicationCommandData,
  CommandInteractionOptionResolver,
  ApplicationCommandOptionData,
  AutocompleteInteraction,
  SelectMenuInteraction
} from 'discord.js'
import Client from '../Client'

export interface ExtendedInteraction extends CommandInteraction {
  member: GuildMember
}

interface RunOptions {
  client: Client
  interaction: ExtendedInteraction
  args: CommandInteractionOptionResolver
}

interface AutoCompleteInteractionOptions {
  client: Client
  interaction: AutocompleteInteraction
}

interface SelectMenuInteractionOptions {
  client: Client
  interaction: SelectMenuInteraction
}

type Run = (options: RunOptions) => any

type AutoCompleteInteraction = (options: AutoCompleteInteractionOptions) => any

type SelectmenuInteraction = (options: SelectMenuInteractionOptions) => any

export type Command = ApplicationCommandData & {
  name: string
  description: string
  testOnly: boolean
  options?: ApplicationCommandOptionData[]
  run: Run
  selectMenuInteraction?: SelectmenuInteraction
  autocompleteInteraction?: AutoCompleteInteraction
} & ChatInputApplicationCommandData
