import { CopyRight } from './CopyRight';
import { FooterMenu } from './FooterMenu';
import { NewsLetter } from './NewsLetter';

export const Footer = () => {
  const items = [
    { label: 'Home', href: '/home' },
    { label: 'Blog', href: '/blog' },
    { label: 'portfolio', href: '/portfolio' },
  ];
  const items2 = [
    { label: 'Land/House  Price in Bhaktapur', href: '/home' },
    { label: 'Land/Hause Price in Latitpur', href: '/blog' },
    { label: 'Land/Hause Price in Kathmandu', href: '/portfolio' },
  ];
  const items3 = [
    { label: 'Kathmandu', href: '/Kathmandu' },
    { label: 'Bhaktapur', href: '/Bhaktapur' },
    { label: 'Lalitpur', href: '/lalitpur       ' },
  ];
  const items4 = [
    { label: 'Adress: Kathmandu Jhamksikhel', href: 'Kathmandu Jhamksikhel' },
    {
      label: 'phone no +2345456',
      href: '/',
    },
    { label: 'Mobile number +9841966722' },
  ];

  return (
    <div className="bg-pink-500 text-white">
      <div className="container  mx-auto py-4 ">
        <h2 className="my-5 text-white">Hello this is a Footer</h2>
        <div className="row flex justify-between">
          <div className="col">
            <FooterMenu items={items} title="About us" />
          </div>
          <div className="col">
            <FooterMenu items={items2} title="Price" />
          </div>
          <div className="col">
            <FooterMenu items={items3} title="Location" />
          </div>
          <div className="col">
            <FooterMenu items={items4} title="Contact" />
          </div>
          <div className="col">
            <NewsLetter title="Newslatter" />
          </div>
        </div>
      </div>
      <CopyRight />
    </div>
  );
};
