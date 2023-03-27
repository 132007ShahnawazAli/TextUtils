import React from 'react';

function Alert(props) {
  return (
    <>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show mt-3`}
          role="alert"
        >
          <strong>{props.alert.type}: </strong> {props.alert.msg}
        </div>
      )}
    </>
  );
}

export default Alert;
