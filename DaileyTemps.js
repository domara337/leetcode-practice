var dailyTemperatures = function(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = []; // stack to keep indices

    for (let i = 0; i < temperatures.length; i++) {
        // If the current temperature is greater than the top of the stack
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        // Push the current index onto the stack
        stack.push(i);
    }

    return result;
};
