import './App.css';
import { Menu } from './Menu/Menu';
import logo from './logo.svg';
import { Banner } from './Banner';
import { HomeLoan } from './HomeLoan';
import { RentalList } from './RentalList';
import { Footer } from './Footer/Footer';
import { ApartmentForRent } from './ApartmentForRent/ApartmentForRent';
import { EmployeeList } from './EmployeeList/EmployeeList';

function App() {
  const employeeData = [
    {
      image:
        'https://st.depositphotos.com/1011643/2348/i/950/depositphotos_23483051-stock-photo-modern-businesswoman-holding-tablet-computer.jpg',
      name: 'sarina',
      age: '30',
      position: 'SoftwareManager',
    },
    {
      image:
        'data:image/jpeg;base64,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',
      name: 'Lena',
      age: '40',
      position: 'Manager',
    },
    {
      image:
        'https://st.depositphotos.com/2866125/4762/i/950/depositphotos_47620081-stock-photo-businesswoman-holding-a-tablet.jpg',
      name: 'Bina',
      age: '45',
      position: 'HausManager',
    },
  ];
  return (
    <div className="App">
      <header className="App-header flex">
        <a href="#main-menu" className="hamburger hidden">
          <i className="fa-solid fa-bars" />
        </a>

        <img src={logo} className="App-logo" alt="logo" />
        <Menu />
        <div className="user-menu">
          <a href="/" className="button">
            Offer
          </a>
          <button type="button" className="button">
            Login <i className="fa-solid fa-circle-user" />
          </button>
        </div>
      </header>
      <Banner />
      <RentalList />
      <HomeLoan />
      <ApartmentForRent
        title="Ngrkt houuu"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nostrum
      cupiditate laboriosam vel deserunt laudantium, numquam culpa animi at
      ipsam atque facere iure rerum consectetur saepe autem modi eveniet d "
        image="https://thekingluxuryhomes.com/wp-content/uploads/2014/06/retail-store-1.jpg"
      />
      <ApartmentForRent
        title="Koath housw"
        image="https://25qfsb4337nf22s4d22tjjfr-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/2020097-80-1024x684.jpg"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nostrum
      cupiditate laboriosam vel"
      />
      <EmployeeList
        title="Our staffs"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Maiores nostrum cupiditate laboriosam vel deserunt laudantium,
        \ numquam culpa animi at ipsam atque facere iure rerum
         consectetur saepe autem modi eveniet "
        items={employeeData}
      />
      <Footer />
    </div>
  );
}

export default App;
