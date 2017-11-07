const posts = [{
    id: 1,
    title: 'Hello',
    description: 'World',
    text: 'It\'s me',
    imageUrl: null,
    createdAt: '2017-06-19 00:00:00',
    slug: 'hello-1'
  }, {
    id: 2,
    title: 'Hello',
    description: 'World',
    text: 'It\'s me',
    imageUrl: null,
    createdAt: '2017-06-19 00:00:00',
    slug: 'hello-2'
  }
];
export const resolvers = {
    Query: {
        allPosts: () => {
            return posts;
        },
    },
};
  