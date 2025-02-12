export function camelToSnake(camelCaseString: string) {
    return camelCaseString.replace(/[A-Z]/g, match => "_" + match.toLowerCase());
}

export function snakeToCamel(snakeCaseString: string) {
    return snakeCaseString.replace(/_([a-z])/g, function (match) {
        return match[1].toUpperCase();
    });
}