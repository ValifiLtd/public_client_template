export function separatePascalCase(input: string): string {
    return input.replace(/([A-Z])/g, " $1").trim();
}