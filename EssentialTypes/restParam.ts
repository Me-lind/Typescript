export function concatenate(...strings: string[]) {
    // Rest parameter 'strings' implicitly has an 'any[]' type.
    return strings.join("");
}
