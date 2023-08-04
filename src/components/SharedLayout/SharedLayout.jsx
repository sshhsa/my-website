import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

function SharedLayout() {
  const location = useLocation();

  const transitions = useTransition(location.pathname, {
    from: {
      transform: 'translateX(100%)',
    },
    enter: {
      transform: 'translateX(0%)',
    },
    leave: {
      transform: 'translateX(-100%)',
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
