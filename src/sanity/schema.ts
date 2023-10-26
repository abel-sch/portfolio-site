import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import page from './schemas/page'
import homePage from './schemas/homePage'
import project from './schemas/project'
import header from './schemas/fields/header'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, homePage, blockContent, project, header],
}
