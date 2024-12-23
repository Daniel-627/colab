import {TextIcon} from '@sanity/icons'

import { defineField, defineType } from 'sanity';

export const emailType = defineType({
  name: 'emailMessage',
  type: 'document',
  title: 'Email Messages',
  icon: TextIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
    }),
    defineField({
      name: 'subject',
      type: 'string',
      title: 'Subject',
    }),
    defineField({
      name: 'message',
      type: 'text',
      title: 'Message',
    }),
  ],
});
