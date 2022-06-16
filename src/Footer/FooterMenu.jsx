export const FooterMenu = ({ items, title }) => (
  <div>
    <h2 className="text-white text-2xl pb-4">{title}</h2>
    <ul>
      {items.map((item) => (
        <li>
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
  </div>
);
