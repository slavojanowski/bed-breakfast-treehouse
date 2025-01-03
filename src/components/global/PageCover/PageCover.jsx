import "../../global/PageCover/pageCover.css";
import PropTypes from "prop-types";

const PageCover = ({ children, coverClass }) => {
  return <header className={coverClass}>{children}</header>;
};

PageCover.propTypes = {
  coverClass: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
};

export default PageCover;
