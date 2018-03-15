const links = [
  {
    id: 1,
    url: "ulr",
    text: "bla bla bla"
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
    }
  },
  Mutation: {
    createLink: (_, params) => {
      const newLink = {
        id: links.length + 1,
        url: params.url,
        text: params.text
      }
      links.push(newLink);
      // insert
      return newLink;
    }
  }
}

module.exports = resolvers;