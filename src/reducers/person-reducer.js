export function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      };
    }
    case "added": {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }
    case "deleted": {
      const { deleteName } = action;
      return {
        ...person,
        mentors: person.mentors.filter((item) => {
          if (item.name !== deleteName) {
            return item;
          }
        }),
      };
    }
    default: {
      throw Error(`알수없는 액션타입 입니다 : ${action.type}`);
    }
  }
}
