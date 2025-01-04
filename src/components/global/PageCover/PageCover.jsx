import "../../global/PageCover/css/pageCover.css";
import PropTypes from "prop-types";

const PageCover = ({ children, coverStyle, coverClass }) => {
  return (
    <header style={coverStyle} className={coverClass}>
      {children}
    </header>
  );
};

PageCover.propTypes = {
  coverClass: PropTypes.arrayOf(PropTypes.string),
  coverStyle: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
};

export default PageCover;
