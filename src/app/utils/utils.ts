export function nonNull(...params: any[]) {
    params.forEach((v) => {
        if (v == null || v == undefined || v == "") {
            return false;
        }
    });
    return true;
}