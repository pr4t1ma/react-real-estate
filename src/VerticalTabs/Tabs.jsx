export const Tabs = ({ items }) => (
  <ul>
    {items.map((tabItem) => (
      <li className={tabItem.active ? 'bg-pink-700' : ''}>
        <a className="block p-4 text-xl hover:bg-pink-700" href={tabItem.href}>
          {tabItem.label}
        </a>
      </li>
    ))}
  </ul>
);
