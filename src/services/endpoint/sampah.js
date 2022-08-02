import {api} from '../Api/webApi'

export const getSampahCategory = () => {
    return api('GET', '/getTrash')
}