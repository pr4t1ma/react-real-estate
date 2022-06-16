export const IconMenu = ({ items }) => (
  <ul className="icon-menu grid grid-cols-4 gap-10">
    {items.map((item) => (
      <li className="">
        <a href={item.href} className="flex">
          <div className="icon-menu__icon text-4xl mr-3">
            <i className={`fa-solid fa-${item.icon}`} />
          </div>
          <div className="icon-menu__text">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </a>
      </li>
    ))}
  </ul>
);
