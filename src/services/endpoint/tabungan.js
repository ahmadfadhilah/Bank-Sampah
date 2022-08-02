import {setSaldo} from '../../redux/NasabahAction';
import store from '../../redux/store';
import {api} from '../Api/webApi';

export const getSaldo = (userId) => {
    const data = {loading: true, data: 0, error: false}
    store.dispatch(setSaldo(data));

    api('method', '/belum ada/' + userId)
        .then((res) => {
            if (res !== null) {
                data.data = res.saldo;
            } else {
                data.error = res.error;
            }
        })
        .catch((e) => (data.error = e.status))
        .finally(() => {
            data.loading = false;
            store.dispatch(setSaldo(data));
        });
}