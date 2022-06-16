export const HomeLoan = () => (
  <div
    style={{
      backgroundImage:
        'url(https://www.kotak.com/content/dam/Kotak/article-images/hero-banners/what-are-the-benefits-of-using-pl-emi-cal-deks.jpg)',
    }}
  >
    <div className="container flex mx-auto p-4">
      <div className="form basis-1/2 py-6">
        <form className="form w-full ">
          <div className="mx-auto">
            <div className="mb-5">
              <h1 className="heading block w-full text-2xl mb-3">
                Financing option
              </h1>
              <div className="form-input my-2">
                <label className="capital block  mb-2 text-black ">
                  Capital
                </label>
                <input
                  className="w-full amount border-radius-3 p-3  hover:border-gray block"
                  type="number"
                />
              </div>
              <div className="form-input my-2">
                <label className="capital block  mb-2 text-black ">
                  Interest Rate
                </label>
                <input
                  className="w-full amount border-radius-3 p-3 block"
                  type="number"
                />
              </div>
              <div className="form-input my-2">
                <label className="capital block  mb-2 text-black ">
                  Duration Time
                </label>
                <input
                  className="w-full amount border-radus-3 p-3 block"
                  type="number"
                />
              </div>
            </div>
            <button className="block w-full py-2 px-3 bg-sky-700 text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="image basis-1/2" />
    </div>
  </div>
);
