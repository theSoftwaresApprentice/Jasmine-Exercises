
it('should calculate the monthly rate correctly', function () {
  expect (calculateMonthlyPayment({rate:0, years:1, amount:12}).toEqual(NaN));
  expect (calculateMonthlyPayment({rate:100, years:100, amount:1000000}).toEqual(83333.33));
  expect (calculateMonthlyPayment({rate:10, years:10, amount:100000}).toEqual(1321.51));
});
