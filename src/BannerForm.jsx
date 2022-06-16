export const BannerForm = (props) => (
  <form action="adress">
    <div>
      <input type="text" value="adress" />
    </div>
    <div className="">
      <label htmlFor="location">Choose a Location:</label>

      <select name="location" id="location" required>
        <option value="">Kathmandu</option>
        <option value="volvo">Bhaktapur</option>
        <option value="saab">Lalitpur</option>
      </select>
    </div>
  </form>
);
