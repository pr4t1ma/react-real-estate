export const SubMenuList = ({ links, title }) => (
  <div className="col link-list basis-1/4">
    <h3 className="">
      {' '}
      {title}
      {' '}
    </h3>
    <ul>
      {links.map((link) => (
        <li>
          <a href="/" className="py-1 hover:bg-pink-700 block">
            <i className="fa-solid fa-chevron-right mx-2" />
            {' '}
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
