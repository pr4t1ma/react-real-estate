export const CustomersList = () => {
  const customers = [
    {
      name: 'Pelu',
      address: 'AlexanderPlatz',
      age: 30,
      hobbies: ['Swimming', 'dancing', 'cooking'],
    },

    {
      name: 'Alex',
      address: 'Banasthali',
      age: 20,
      work: { name: 'Kaufland', address: 'Remeinrollonstrasse' },
    },
    { name: 'Lela', address: 'Basantapur', age: 15 },
    {
      name: 'Sela',
      address: 'Bharatpur',
      age: 20,
      work: { name: 'Edeka', address: 'Antonplatz' },
    },
  ];

  const isLegal = (age) => {
    if (age > 16) return true;
    return false;
  };

  return (
    <div className="flex gap-2 text-blue-800">
      <h1>
        Lela is
        {customers[2].age}
        {' '}
        years old.
      </h1>
      <h2>
        Alex lives in
        {customers[1].address}
      </h2>
      <h3>
        Sela works at
        {' '}
        {customers[3].work.name}
        {' '}
        in
        {' '}
        {customers[3].work.address}
      </h3>
      {customers.map((customer) => (
        <div className="border p-2">
          <h2>{customer.name}</h2>
          <div>
            <label>Age: </label>
            {customer.age}
          </div>
          <div>
            <label>Address: </label>
            {customer.address}
          </div>
          <div>
            <h4>Works at:</h4>
            {customer.work?.name}
            ,
            {customer.work?.address}
          </div>
          <div>
            <h4>Hobbies:</h4>
            <ul>
              {customer.hobbies?.map((hobby) => (
                <li>{hobby}</li>
              ))}
            </ul>
          </div>
          <div className="text-xs">
            {!isLegal(customer.age)
              && 'You are not legal age for restricted products.'}
          </div>
        </div>
      ))}
    </div>
  );
};
