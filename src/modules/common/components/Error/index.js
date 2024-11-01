const Error = ({ showError, error }) => {
  return (
    showError && (
      <div>
        <p>{error}</p>
      </div>
    )
  );
};

export default Error;