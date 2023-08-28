class Calculator {
  addition(num1: number, num2: number): number {
    return num1 + num2;
  }
  addAll(nums: number[]): number {
    let total = 0;
    for (const num of nums) {
      total += num;
    }
    return total;
  }
}