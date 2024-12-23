import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('poster').title('Posters'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.documentTypeListItem('emailMessage').title('Email Messages'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['project','poster', 'category', 'author', 'emailMessage'].includes(item.getId()!),
      ),
    ])
