import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';

export default Loadable({
  loader() {
    var a = import('./Editor');
    console.log(a);
    return a;
  },
  loading: Loading
});
