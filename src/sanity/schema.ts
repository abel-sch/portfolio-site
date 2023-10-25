import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import page from './schemas/page'
import homePage from './schemas/homePage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, homePage, blockContent],
}
