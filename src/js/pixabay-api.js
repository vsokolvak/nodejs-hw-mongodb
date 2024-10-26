

const URL = 'https://pixabay.com/api/?';
const KEY = '37903725-9b007c08cd936d7b1a7a439ee';

export const getImg = (serchText, serchCategory) => {

    const params = new URLSearchParams({
    key: KEY,
    q: serchText,
    image_type: 'photo',
    category: serchCategory,
    orientation: 'horizontal',
    safesearch: 'false',
    });

    return fetch(URL + params).then(res => {

        if (!res.ok) {
            throw new Error(res.message)
        }
        return res.json()
    })
}
