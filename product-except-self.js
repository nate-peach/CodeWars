/**
 * taking in an array cotaining only integers, neg/pos/zero. Always truthy?
 * returning an array with ints, each element the product of all elements except input[i]. cannot use '/' and must be 0(n) complexity
 * ex: productExceptSelf([2, 2, 3, 4]) => []
 * we need to exclude a single element, thinking we can do this by temporarily changing value to 1.
 * variable reassignment
 * need to select the element to exclude 
 * need to select the element to multiply (could use for loop)
 * we multiply elements input.length squared. 
 */

const productExceptSelf = nums => {
    let products = Array(nums.length).fill(1);

    let left = 1;
    let right = 1;

    for (let l = 0, r = nums.length - 1; r >= 0; l++, r--) {
        products[l] *= left;
        products[r] *= right;

        left *= nums[l];
        right *= nums[r];
    };

    return products;
};

// looked up the solution to this one, had the right pseudo-code actually, but just ran out of time. Given more time, may have found my own solution!