const links = [
  {
    id: 1,
    url: "ulr",
    text: "bla bla bla",
  },
  {
    id: 2,
    url: "ulr",
    text: "bla bla bla"
  },
  {
    id: 3,
    url: "ulr",
    text: "bla bla bla"
  }
];

const resolvers =  {
  Query:{
    allWords:() => {
      // code conexion db
      return ['nicolas', 'molina'];
    },
    allLinks: () => {
      // code
      return links;
    },
    getLink: (_, params) => {
      const id = params.id;
      // search database
      return links[id];
    }
  },
  Mutation: {
    createLink: (_, params) => {
      const newLink = {
        ...params.link,
        id: links.length + 1,
        user:{
          id: 1,
          name: "nicolas"
        }
      }
      links.push(newLink);
      // insert
      return newLink;
    }
  }
}

module.exports = resolvers;