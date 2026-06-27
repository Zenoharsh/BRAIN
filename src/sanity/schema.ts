import { type SchemaTypeDefinition } from 'sanity'
import { publicationType } from './schemaTypes/publication'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [publicationType],
}
