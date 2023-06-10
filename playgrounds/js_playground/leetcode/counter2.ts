type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number
}

function createCounter(init: number): ReturnObj {
    let num = init
    return {
        increment: () => ++num,
        decrement: () => --num,
        reset: () => num = init
    }
};

let counter = createCounter(5); //?
counter.increment(); //?
counter.reset(); //?
counter.decrement(); //?
