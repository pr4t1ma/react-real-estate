export const FeaturedMenu = ({ items }) => (
  <div>
    <ul>
      {items.map((featuredMenu) => (
        <li>
          <a href={featuredMenu.href}>{featuredMenu.label}</a>
        </li>
      ))}
    </ul>
    <div className="menu__link">
      <a href="/">see all</a>
    </div>
  </div>
);
