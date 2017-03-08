var Cast = function Cast(a, b, operation) {
    //console.log("#a type=" + (typeof a) + ", b type=" + (typeof b));

    switch (operation) {
        case "==":
            return a == b;
            break;
        case "===":
            return a === b;
            break;
        default:
            break;
    }
    return false;
}