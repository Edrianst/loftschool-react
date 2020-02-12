export const numberValidator = ({target}) => {
    let cardPattern = target.value.replace(/[^\d]/g, '').substring(0,16);
    cardPattern = cardPattern !== '' ? cardPattern.match(/.{1,4}/g).join(' ') : '';
    target.value = cardPattern;
};

export const cvcValidator = ({target}) => {
    let cvcPattern = target.value.replace(/[^\d]/g, '').substring(0,3);
    target.value = cvcPattern;
};

export const nameValidator = ({target}) => {
    let namePattern = target.value.replace(target.value, target.value.toUpperCase());
    target.value = namePattern;
};