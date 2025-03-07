import type { Schema, Attribute } from '@strapi/strapi';

export interface BreadsMenuItems extends Schema.Component {
  collectionName: 'components_breads_menu_items';
  info: {
    displayName: 'MenuItems';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'breads.menu-items': BreadsMenuItems;
    }
  }
}
