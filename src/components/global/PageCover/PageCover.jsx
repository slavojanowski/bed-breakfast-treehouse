import "../../global/PageCover/css/page-cover.css";
import PropTypes from "prop-types";

const PageCover = ({ children, coverStyle, coverClass }) => {
  return (
    <header style={coverStyle} className={coverClass}>
      {children}
    </header>
  );
};

PageCover.propTypes = {
  coverClass: PropTypes.string.isRequired,
  coverStyle: PropTypes.object,
  children: PropTypes.node,
};

export default PageCover;
