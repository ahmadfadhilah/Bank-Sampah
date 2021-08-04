import {api} from '../Api/webApi'

export const updateProfile = (name, email, noHp, lokasi) => {
    const body = {
        name,
        email,
        noHp,
        lokasi
    };
    return api('POST', '/update', body)
}

export const changeAvatar = (avatar) => {
    const body = new FormData();

    data.append('avatar', {
        name: avatar.fileName,
        type: avatar.type,
        uri: avatar.uri,
    })
    
    return api('POST', '/updateAvatar', body, avatar)
}
