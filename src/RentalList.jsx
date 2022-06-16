export const RentalList = () => {
  const rents = [
    {
      image:
        'https://images.sampleforms.com/wp-content/uploads/2017/05/Sample-Real-Estate-Evaluation-Forms.jpg',
      Apartment: '24 sq',
      Rooms: '3',
      Place: 'Alexanderplatz',
      Price: 2300,
      bathroom: 3,
      kitchen: 1,
    },

    {
      image:
        'https://study.com/cimages/multimages/16/9b9277b2-8bdf-4e6a-a5e7-3e9041a1ef02_realestate.png',

      Apartment: '34 sq',
      Rooms: 5,
      Place: 'Hauptybahnhof',
      Price: 3000,
      bathroom: 2,
      kitchen: 1,
    },
    {
      image:
        'https://seattlemag.com/sites/default/files/field/image/1%20affordablelead.jpg',

      Apartment: '15 sq',
      Rooms: 2,
      Place: 'Albertine',
      Price: 1000,
      discount: '4%',
      bathroom: '1 badetop',
      kitchen: 1,
    },
  ];

  return (
    <div className="flex gap-3 text-gray-600 ">
      {rents.map((rent) => (
        <div className="p-5 basis-1/3">
          <div className="">
            <img className="object-cover h-32 w-full" src={rent.image} alt="" />
          </div>

          <div className="py-3">
            <div className="py-3 ">
              <h2 className="text-gray-600  font-sans text-xl py-2">
                <i className="fa-solid fa-location-dot pr-3" />
                {rent.Place}
              </h2>
            </div>

            <div className="Py-3 font-bold">
              <label>Apartments:</label>
              <i className="fa-solid fa-house-chimney px-2" />
              {rent.Apartment}
            </div>

            <div className="py-4 flex gap-3 j">
              <label>
                <i className="fa-solid fa-table-cells-large pr-3" />
                Rooms:
              </label>
              {rent.Rooms}
              ,
              <label>
                <i className="fa-solid fa-bath pr-3" />
                Bathrooms:
              </label>
              {rent.bathroom}
              ,
              <label>
                <i className="fa-solid fa-kitchen-set pr-3" />
                Kitchen
              </label>
              {rent.kitchen}
            </div>
            <h1 className="py-2">
              <div className="text-2xl">
                <label> &euro;</label>
                {rent.Price}
              </div>
            </h1>

            <button className="button bg-sky-700 text-white py-3 px-5 align-center my-4">
              more
            </button>
          </div>

          <div>{rent.discount}</div>
        </div>
      ))}
    </div>
  );
};
