import PropTypes from "prop-types";
import supabase from "../../config/supabaseClient";
import { useState, useEffect } from "react";
import { Navigate } from "react-router";

const SessionController = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      // !!null -> false
      // !!{} -> true
      setAuthenticated(!!session);
      setLoading(false);
    };

    getSession();
  }, []);

  if (loading) {
    return <div>Pobieranie informacji...</div>;
  } else {
    if (authenticated) {
      return <div>{children}</div>;
    }

    return <Navigate to="/logowanie" />;
  }
};
SessionController.propTypes = {
  children: PropTypes.node,
};

export default SessionController;
