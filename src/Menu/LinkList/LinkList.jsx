import { Map } from '../Map';

export const LinkList = ({ items }) => (
  <>
    <ul>
      {items.map((linkList) => (
        <li>
          <i className={`fa-solid fa-${linkList.icon} pr-2`} />
          <a href={linkList.href}> {linkList.label} </a>
        </li>
      ))}
    </ul>
    <div className="google-map mt-2">
      <Map />
      <p>jetz regionallpriceverglichen</p>
      <a href="/" className="button">
        Price entdecken
      </a>
    </div>
  </>
);
