import { Link } from "react-router";

const PhoneNumber = () => {
  return (
    <>
      <Link to="tel:+48123456789" className="phone-component">
        +48 123 456 789
      </Link>
    </>
  );
};

export default PhoneNumber;
