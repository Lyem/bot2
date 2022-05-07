declare namespace search {
  export interface Title {
    en: string
  }

  export interface AltTitle {
    ja: string
    en: string
  }

  export interface Description {
    en: string
  }

  export interface Links {
    al: string
    ap: string
    bw: string
    kt: string
    mu: string
    amz: string
    ebj: string
    mal: string
    raw: string
  }

  export interface Name {
    en: string
  }

  export interface Attributes2 {
    name: Name
    description: any[]
    group: string
    version: number
  }

  export interface Tag {
    id: string
    type: string
    attributes: Attributes2
    relationships: any[]
  }

  export interface Attributes {
    title: Title
    altTitles: AltTitle[]
    description: Description
    isLocked: boolean
    links: Links
    originalLanguage: string
    lastVolume: string
    lastChapter: string
    publicationDemographic: string
    status: string
    year?: number
    contentRating: string
    tags: Tag[]
    state: string
    chapterNumbersResetOnNewVolume: boolean
    createdAt: Date
    updatedAt: Date
    version: number
    availableTranslatedLanguages: string[]
  }

  export interface Attributes3 {
    description: string
    volume?: any
    fileName: string
    locale: string
    createdAt: Date
    updatedAt: Date
    version: number
  }

  export interface Relationship {
    id: string
    type: string
    attributes: Attributes3
  }

  export interface Datum {
    id: string
    type: string
    attributes: Attributes
    relationships: Relationship[]
  }

  export interface RootObject {
    result: string
    response: string
    data: Datum[]
    limit: number
    offset: number
    total: number
  }
}

export default search
