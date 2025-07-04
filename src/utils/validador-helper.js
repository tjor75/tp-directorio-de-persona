const getIntegerOrDefault = (value, defaultValue) => {
    const int = parseInt(value);
    return !isNaN(int) ? int : defaultValue;
};
const getDateOrDefault = (value, defaultValue) => {
    let date = new Date(value);
    const isValid = !isNaN(date.getTime());

    if (isValid && /^\d{4}-\d{2}-\d{2}/.test(value))
        date.setDate(date.getDate() + 1);
    else if (!isValid)
        date = defaultValue;

    return date;
};
const getStringOrDefault = (value, defaultValue) => {
    return typeof value === 'string' ? value : defaultValue;
};
const getBooleanOrDefault = (value, defaultValue) => {
    const isTrue    = value.toLowerCase() === 'true'  || Number(value) === 1;
    const isFalse   = value.toLowerCase() === 'false' || Number(value) === 0;
    return isTrue || isFalse ? isTrue : defaultValue;
};

const isNombreApellido = (value) => {
    return value !== undefined && value.length >= 3;
};
const isEmail = (value) => {
    const REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return REGEX.test(value);
};

export { getIntegerOrDefault, getDateOrDefault, getStringOrDefault, getBooleanOrDefault, isEmail, isNombreApellido };