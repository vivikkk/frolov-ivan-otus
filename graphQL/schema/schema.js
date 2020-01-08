const graphql = require('graphql');
const {
  items,
  categories
} = require('../db');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLFloat
} = graphql;

const ItemType = new GraphQLObjectType({
  name: 'Item',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    price: {
      type: GraphQLInt
    },
    rating: {
      type: GraphQLFloat
    },
    maker: {
      type: CategoryType,
      resolve(parent, args) {
        return categories.find(category => category.id === parent.categoryId);
      }
    },
  })
});

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    country: {
      type: GraphQLString
    },
    items: {
      type: new GraphQLList(ItemType),
      resolve(parent, args) {
        return items.filter(item => item.categoryId === parent.id);
      },
    },
  })
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    item: {
      type: ItemType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        return items.find(item => item.id === args.id);
      }
    },
    category: {
      type: CategoryType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        return categories.find(category => category.id === args.id);
      }
    },
    items: {
      type: new GraphQLList(ItemType),
      resolve(parent, args) {
        return items;
      }
    },
    categories: {
      type: new GraphQLList(CategoryType),
      resolve(parent, args) {
        return categories;
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addItem: {
      type: ItemType,
      args: {
        name: {
          type: GraphQLString
        },
        price: {
          type: GraphQLInt
        },
        categoryId: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        const item = {
          id: items.length + 1,
          name: args.name,
          price: args.price,
          categoryId: args.categoryId
        }

        items.push(item);
        return item;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
