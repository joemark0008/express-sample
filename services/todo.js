export const getAllTodo = async () => {
  //calldb
  const data = [
    {
      id: 1,
      title: "Buy groceries",
      completed: false,
    },
    {
      id: 2,
      title: "Walk the dog",
      completed: true,
    },
    {
      id: 3,
      title: "Read a book",
      completed: false,
    },
  ];

  return data;
};


export const todoSample = async () => {
    //calldb
    const data = [
        {
        id: 1,
        title: "Sample Todo",
        completed: false,
        },
    ];
    
    return data;
}

