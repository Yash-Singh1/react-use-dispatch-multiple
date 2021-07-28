import { useDispatch } from 'redux';
import { useIsMounted } from 'react-tidy';

function useDispatchMultiple() {
  const dispatch = useDispatch();
  const isMounted = useIsMounted();

  return function runActions(...actions) {
    if (isMounted()) {
      dispatch(actions[0]).then?.(() => {
        if (actions.length > 1) {
          runActions(...actions.slice(1));
        }
      });
    }
  };
}

export default useDispatchMultiple;
