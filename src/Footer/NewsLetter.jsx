import { SocialMediaList } from './SocialMedia/SocialMediaList';

export const NewsLetter = ({ title }) => (
  <div>
    <h2 className="text-2xl text-white pb-4">{title}</h2>
    <form className="flex">
      <input className="px-3 py-2" type="text" placeholder="youremailadress" />
      <button type="submit" className="bg-sky-700 text-s p-2">
        signup
      </button>
    </form>
    <SocialMediaList />
  </div>
);
