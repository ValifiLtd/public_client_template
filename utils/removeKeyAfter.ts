export function removeKeysAfter(object: any, key: any) {
    const keys = Object.keys(object);
    const index = keys.indexOf(key);
    if (index !== -1) {
        const newObject = {} as any;
        for (let i = 0; i <= index; i++) {
            newObject[keys[i]] = object[keys[i]];
        }
        return newObject;
    }
    return object;
}