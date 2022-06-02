import store from '@/store';
import axios from 'axios';

store.auth((mutations) => {
  switch (mutations.type) {
    case 'auth/SET_TOKEN':
      if (mutations.payload) {
        axios.defaults.headers.common.Authorization = `Bearee ${mutations.payload}`;
        localStorage.setItem('auth-token, mutation.payload');
      } else {
        axios.defaults.headers.common.Authorization = null;
        localStorage.removeItem('auth-token, mutation.payload');
      }

      break;
  }
});
