import {api} from '../Api/webApi'
import store from '../../redux/store'
import {
    setPenarikan,
    setPenjemputan,
    setPenyetoran,
} from '../../redux/NasabahAction'

export const penyetoranNasabah = (userId) => {
    const data = {loading: true, data: 0, error: false};
    store.dispatch(setPenyetoran(data));
    api('belum ada' + userId + '/penyetoran')
      .then((res) => {
        if (res === '') {
          data.data = res.data;
        } else {
          data.error = res.error;
        }
      })
      .catch((e) => (data.error = e.status))
      .finally(() => {
        data.loading = false;
        store.dispatch(setPenyetoran(data));
      });
  };

  export const penjemputanNasabah = (userId) => {
    const data = {loading: true, data: 0, error: false};
    store.dispatch(setPenjemputan(data));
    api('belum ada ' + userId + '/penjemputan')
      .then((res) => {
        if (res === '') {
          data.data = res.data;
        } else {
          data.error = res.error;
        }
      })
      .catch((e) => (data.error = e.status))
      .finally(() => {
        data.loading = false;
        store.dispatch(setPenjemputan(data));
      });
  };

  export const penarikanNasabah = (userId) => {
    const data = {loading: true, data: 0, error: false};
    store.dispatch(setPenarikan(data));
    api('belum ada' + userId + '/penarikan')
      .then((res) => {
        if (res === '') {
          data.data = res.data;
        } else {
          data.error = res.error;
        }
      })
      .catch((e) => (data.error = e.status))
      .finally(() => {
        data.loading = false;
        store.dispatch(setPenarikan(data));
      });
  };

  export const ajukanJemput = (
    userId,
    name,
    noHp,
    keterangan,
  ) => {
    const data = {
      id_nasabah: userId,
      name,
      noHp,
      keterangan,
    };
    return api('method', '/penjemputan', data);
  };

export const batalkanJemput = (penjemputanId, userId) => {
  const data = {
    id_nasabah: userId,
  };
  return api('PATCH', '/penjemputan/' + penjemputanId, data);
};
