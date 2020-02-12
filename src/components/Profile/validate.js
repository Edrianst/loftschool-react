export const numberValidator = (value) => {
    let cardPattern = value.replace(/[^\d]/g, '').substring(0,16);
    cardPattern = cardPattern !== '' ? cardPattern.match(/.{1,4}/g).join(' ') : '';
    value = cardPattern;
    return value
};

export const cvcValidator = value => value.replace(/[^\d]/g, '').substring(0,3);

export const cardNameValidator = value => value.replace(value, value.toUpperCase()).substring(0,22);