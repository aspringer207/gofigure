export default function createResolver(length) {
    return function (data, max) {
        let pct = data / max;
        return pct * length;
    };
}
