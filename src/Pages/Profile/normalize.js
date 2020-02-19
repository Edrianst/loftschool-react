export const normalizeNumber = (value) => {
    let cardPattern = value.replace(/[^\d]/g, '').substring(0,16);
    cardPattern = cardPattern !== '' ? cardPattern.match(/.{1,4}/g).join(' ') : '';
    value = cardPattern;
    return value
};

export const normalizeCvc = value => value.replace(/[^\d]/g, '').substring(0,3);

export const normalizeName = value => value.replace(/[^a-z\s]+/ig, "").toUpperCase().substring(0,22);