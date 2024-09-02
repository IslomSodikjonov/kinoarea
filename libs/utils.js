export function reload(arr, place, component) {
    let box = document.querySelector(`${place}`);
    for (const item of arr) {
        let index = arr.indexOf(item)
        let elem = component(item, index)
        box.append(elem);
    };
}