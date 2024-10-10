function parseArray(arr) {
    const dataValues = arr.map((x) => parseFloat(x));
    const labels = arr.map((x, i) => {
        let reg = `${dataValues[i]}`;
        let extra = x.replace(reg, '');
        return extra.trim();
    });
    return {
        "data": dataValues,
        "labels": labels
    };
}
