var Cast = function Cast(a, b, operation) {
    //console.log("#a type=" + (typeof a) + ", b type=" + (typeof b));

    switch (operation) {
    case "==":
        return a == b;
    case "===":
        return a === b;
    default:
        break;
    }
    return false;
};