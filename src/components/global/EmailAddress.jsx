import { Link } from "react-router";

const EmailAddress = () => {
  return (
    <>
      <Link to="mailto:info@treehousehotel.com" className="email-component">
        info@treehousehotel.com
      </Link>
    </>
  );
};

export default EmailAddress;
