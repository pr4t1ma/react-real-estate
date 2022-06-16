export const TopNewOffer = ({
  name, images, location, price,
}) => (
  <div>
    <div className="col">
      <h3>{name}</h3>
    </div>
    <div className="images" />
    <div className="location">{location}</div>
    <div className="price">{price}</div>
  </div>
);
