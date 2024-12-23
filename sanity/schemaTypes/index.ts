import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {posterType} from './posterType'
import {authorType} from './authorType'
import {projectType} from './projectType'
import {emailType} from './emailType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, posterType, authorType, projectType, emailType],
}
