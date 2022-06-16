import { NewsCard } from '../News/NewsCard';
import { SubMenuList } from '../SubMenuList/SubMenuList';
import { Tabs } from '../VerticalTabs/Tabs';
import { Card } from './Card/Card';
import { DescriptionLink } from './DescriptionLink/DescriptionLink';
import { FeaturedMenu } from './FeaturedMenu/FeaturedMenu';
import { IconMenu } from './IconMenu';
import { InvoiceMenu } from './InvoiceMenu/InvoiceMenu';
import { LinkList } from './LinkList/LinkList';

const Menu = () => {
  const links = [
    'Search homes',
    'Find friendly neighbours',
    'Finance my car',
    'Pet finder',
  ];
  const links2 = [
    'Boogie',
    'Find friendly neighbours',
    'Finance my car',
    'Pet finder',
  ];
  const links3 = [
    'Woogie',
    'Find friendly neighbours',
    'Finance my car',
    'Pet finder',
  ];

  const iconMenuItems = [
    {
      title: 'Hello world',
      icon: 'baby',
      text: 'Lorem ipsum dolor sit amet cnostrum cupidit vellorem ipsum',
      href: '/',
    },
    {
      title: 'Hello world',
      icon: 'basketball',
      text: 'Lorem ipsum dolor sit amet  aditate laboriosam vellorem ipsum',
      href: '/',
    },
    {
      title: 'Hello world',
      icon: 'baby',
      text: 'Lorem ipsum dolor sit amet cnostrum cupidit vellorem ipsum',
      href: '/',
    },
    {
      title: 'Hello world',
      icon: 'basketball',
      text: 'Lorem ipsum dolor sit amet  aditate laboriosam vellorem ipsum',
      href: '/',
    },
    {
      title: 'Hello world',
      icon: 'baseball',
      text: 'Lorem ipsum dolor sit  consecteturstrum cupiditate laboriosam vellorem ipsum',
      href: '/',
    },
  ];

  const invoiceItems = [
    { label: 'invoilce', href: '/' },
    { label: 'RUn Play role', href: '/' },
    { label: 'Manage cash Flow', href: '/' },
    { label: 'Track Expenses', href: '/' },
    { label: 'Manage Bills', href: '/' },
  ];
  const linkList = [
    { label: 'ImmpbilenPreise', href: '/', icon: 'chevron-right' },
    { label: 'Kostonlos Wertermittlung', href: '/', icon: 'chevron-right' },
    { label: ' Preistatistik', href: '/', icon: 'chevron-right' },
  ];
  const featuredMenu = [
    { label: 'Retails', href: '/' },
    { label: 'Cnstractions', href: '/' },
    { label: 'Non profit', href: '/' },
    { label: 'Restaurent', href: '/' },
    { label: 'Professional Services', href: '/' },
  ];

  return (
    <div
      className="main-menu flex justify-between relative flex-1"
      id="main-menu"
    >
      <a href className="close hidden">
        <i className="fa-solid fa-xmark" />
      </a>
      <ul className="menu flex flex-1 justify-between">
        <li>
          <a href="Homes">
            Homes
            <i className="fa-solid fa-angle-down" />
          </a>
          <div className="sub-menu ">
            <div className="flex">
              <SubMenuList links={links} title="Buying and Selling Homes" />
              <SubMenuList
                links={links2}
                title="Buying and Selling Apartments"
              />
              <SubMenuList links={links3} title="Buying and Selling Land" />
              <div className="col link-list basis-1/4 gap-2 ">
                <LinkList items={linkList} />
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="/">
            Apartment <i className="fa-solid fa-angle-down" />
          </a>
          <div className="sub-menu hidden">
            <IconMenu items={iconMenuItems} />
          </div>
        </li>
        <li>
          <a href="/">
            Sharing Room <i className="fa-solid fa-angle-down" />
          </a>
          <div className="sub-menu hidden">
            <div className="grid grid-cols-4 gap-2">
              <div className="col">
                <Card title="hello" text="lorem ipsum" />
              </div>
              <div className="col">
                <h3>Invoice</h3>
                <InvoiceMenu items={invoiceItems} />

                <div className="menu__link">
                  <a href="/">see more</a>
                </div>
              </div>
              <div className="col">
                ard
                <DescriptionLink
                  title="Whats new"
                  text="our latest inovation thats help you faster netter and easier services"
                />
                <DescriptionLink
                  title="Whats new"
                  text="our latest inovation thats help you faster netter and easier services"
                />
                <DescriptionLink
                  title="Whats new"
                  text="our latest inovation thats help you faster netter and easier services"
                />
              </div>
              <div className="col featured-menu">
                <div className="title">
                  <h4>For your business types</h4>
                </div>
                <FeaturedMenu items={featuredMenu} />
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="/">
            Privet Appartment <i className="fa-solid fa-angle-down" />
          </a>
          <div className="sub-menu hidden">
            <div className="vertical-tabs grid grid-cols-12 gap-4">
              <div className="col tabs link-list col-span-3">
                <Tabs
                  items={[
                    { label: 'Games', href: './', active: false },
                    { label: 'Applications', href: './', active: true },
                    { label: 'Roundsup', href: './' },
                    { label: 'Appreview', href: './' },
                    { label: 'Gamereview', href: './' },
                  ]}
                />
              </div>
              <div className="col tab-panel col-span-9">
                <ul className="news-list grid grid-cols-2 gap-3">
                  <li className="news-item">
                    <NewsCard
                      title="Jonney Depp win the case"
                      date="17.june 2022"
                      image="https://upload.wikimedia.org/wikipedia/commons/3/3b/Johnny_Depp-2757_%28cropped%29.jpg"
                    />
                  </li>
                  <li className="news-item">
                    <NewsCard
                      title="Jonney Depp"
                      date="17.june 2022"
                      image="https://upload.wikimedia.org/wikipedia/commons/3/3b/Johnny_Depp-2757_%28cropped%29.jpg"
                    />
                  </li>
                  <li className="news-item">
                    <NewsCard
                      title="Jonney Depp"
                      date="17.june 2022"
                      image="https://upload.wikimedia.org/wikipedia/commons/3/3b/Johnny_Depp-2757_%28cropped%29.jpg"
                    />
                  </li>
                  <li className="news-item">
                    <NewsCard
                      title="Jonney Depp"
                      date="17.june 2022"
                      image="https://upload.wikimedia.org/wikipedia/commons/3/3b/Johnny_Depp-2757_%28cropped%29.jpg"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="/">
            Moving <i className="fa-solid fa-angle-down" />
          </a>
        </li>
        <li>
          <a href="/">
            Privet Appartment <i className="fa-solid fa-angle-down" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export { Menu };
