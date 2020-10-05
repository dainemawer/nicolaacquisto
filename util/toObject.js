export function toObject(names, values) {
    const result = {};
    for (let i = 0; i < names.length; i++)
        result[names[i]] = values[i];
    return result;
}
