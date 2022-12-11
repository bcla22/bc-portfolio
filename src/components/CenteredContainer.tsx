import React from 'react';

type Props = {
  children: JSX.Element | JSX.Element[];
};

function CenteredContainer({ children }: Props) {
  return (
    <div className="my-auto lg:max-w-6xl lg:mx-auto lg:w-full">
      {children}
    </div>
  )
}

export default CenteredContainer;
