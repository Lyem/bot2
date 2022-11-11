declare namespace manga {
  export interface Title {
    en: string
  }

  export interface AltTitle {
    ja: string
  }

  export interface Description {
    en: string
    'pt-br': string
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
    publicationDemographic?: any
    status: string
    year: number
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
    name: string
    imageUrl?: any
    biography: any[]
    twitter?: any
    pixiv?: any
    melonBook?: any
    fanBox?: any
    booth?: any
    nicoVideo?: any
    skeb?: any
    fantia?: any
    tumblr?: any
    youtube?: any
    weibo?: any
    naver?: any
    website?: any
    createdAt: Date
    updatedAt: Date
    version: number
    description: string
    volume?: any
    fileName: string
    locale: string
  }

  export interface Relationship {
    id: string
    type: string
    attributes: Attributes3
  }

  export interface Data {
    id: string
    type: string
    attributes: Attributes
    relationships: Relationship[]
  }

  export interface RootObject {
    result: string
    response: string
    data: Data
  }
}

export default manga
