// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < (arr.length - i - 1); j++) {
            if( arr[j] > arr[j+1]) {
                let left = arr[j]
                let right = arr[j+1]
                arr[j] = right
                arr[j+1] = left
            }
        }
    }
    return arr
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let indexOfMin = i

        for(j = (i + 1); j < arr.length; j++) {
            if(arr[j] < arr[indexOfMin]) {
                indexOfMin = j
            }
        }
        if (i !== indexOfMin) {
            let lesser = arr[indexOfMin]
            let greater = arr[i]
            arr[i] = lesser
            arr[indexOfMin] = greater
        }
    }
    return arr
}

function mergeSort(arr) {
    if(arr.length === 1) return arr

    const center = Math.floor(arr.length/2)
    const left = arr.slice(0,center)
    const right = arr.slice(center)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let results = []
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            results.push(left.shift())
        } else {
            results.push(right.shift())
        }
    }
    return [...results, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
