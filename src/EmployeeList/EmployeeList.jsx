export const EmployeeList = ({ title, items, text }) => (
  <div className=" container mx-auto my-20 ">
    <div className="emplyee__details">
      <h2 className="my-3 text-center text-black">{title}</h2>
      <p className="text-center w-9/12 text-gray-400 my-5 mx-auto ">{text}</p>
      <ul className="grid gap-5 grid-cols-3">
        {items.map((employee) => (
          <li className="text-gray-600 text-center shadow-lg p-5">
            <img
              className=" w-52 object-cover h-52 rounded-full mx-auto mb-5 "
              src={employee.image}
              alt=""
            />
            <h3 className="my-2">{employee.name}</h3>
            <p>Age: {employee.age}</p>
            <p>Position: {employee.position}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
