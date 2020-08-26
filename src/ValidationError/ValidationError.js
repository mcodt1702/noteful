import React from "react";
import PropTypes from "prop-types";

function ValidationError(props) {
  if (props.message) {
    return <div className="errorMessage">{props.message}</div>;
  }

  return <> </>;
}

AddAFolder.propTypes = {
  messsage: PropTypes.object,
};

export default ValidationError;
