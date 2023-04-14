function multiplyAndAdd(num1, num2) {
    const multiplied = num1 * num2;
    const added = num1 + num2;
    return { multiplied: multiplied, added: added };
  }
  
  const result = multiplyAndAdd(3, 4);
  console.log(result.multiplied); // Output: { multiplied: 12, added: 7 }