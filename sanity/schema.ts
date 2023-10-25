import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import page from './schemas/page'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, blockContent],
}
