import PropTypes from "prop-types";

const PageBanner = ({ children, title, subtitle }) => {
  return (
    <div className="page-banner">
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
      {children}
    </div>
  );
};

PageBanner.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

export default PageBanner;
