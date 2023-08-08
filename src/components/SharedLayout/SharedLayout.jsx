import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

function SharedLayout() {
  const location = useLocation();

  const transitions = useTransition(location.pathname, {
    from: {
      transform: 'scale(1.2)',
      opacity: 0,
    },
    enter: {
      transform: 'scale(1)',
      opacity: 1,
    },
    leave: {
      transform: 'scale(1.2)',
      opacity: 0,
    },
  });

  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        {transitions((props, _, key) => (
          <animated.div key={key} style={props}>
            <Outlet />
          </animated.div>
        ))}
      </Suspense>
    </>
  );
}

export default SharedLayout;
