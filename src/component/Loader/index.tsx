// components/Loader.tsx
import React from "react";

type LoaderProps = {
  isLoading: boolean;
};

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <>
          <div className="pos-center" id="loader">
            <div className="loader" />
          </div>
        </>
      ) : null}
    </>
  );
};

export default Loader;
