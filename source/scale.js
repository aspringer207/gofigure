export default function scale(scale){
    return function (m){
        return scale * m;
    };
}