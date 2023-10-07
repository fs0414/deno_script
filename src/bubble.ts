const bubble_sort = (nums: number[]): void => {
    const len_nums = nums.length
    for (let i = 0; i < len_nums; i++) {
        console.log("i", i)
        for (let j = 0; j < len_nums; j++) {
            console.log("j", j)
             if (nums[j] > nums[j + 1]) {
                 [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
             }
        }
    }
    console.log(nums)
}

const nums: number[] = [2, 5, 1, 8, 7, 3]

bubble_sort(nums)
