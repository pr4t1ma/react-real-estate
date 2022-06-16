export const ApartmentForRent = ({ title, text, image }) => {
  const apartments = [
    {
      image:
        'https://thekingluxuryhomes.com/wp-content/uploads/2014/06/retail-store-1.jpg',
      label: 'Apartment in Kathmandu',
      href: '/Kathmandu',
      area: '23sq',
      bathroom: '2',
      favourite: true,
      location: 'kathmandu,Nmepal',
      price: '$20000',
    },
  ];
  return (
    <div className="text-gray-500">
      <div className="container mx-auto my-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="apartment__img">
            <img src={image} alt="" />
          </div>
          <div className="apartment__details p-5">
            <p className="py-2 font-serif">
              <h2 className="text-black pb-5 text-2xl font-Monaco">{title}</h2>
              {text}
            </p>
            <button type="button" className="bg-sky-700 p-4 my-5 text-white">
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
