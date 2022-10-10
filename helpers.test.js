describe("Helpers Test", function() {
    beforeEach(function () {
    });
  
    it('should get correct averages', function () {
        
      allPayments = {payment1:{billAmt:10, tipAmt:2, tipPercent:20}}

      expect(sumPaymentTotal('tipAmt')).toEqual(2);
      expect(sumPaymentTotal('billAmt')).toEqual(10);
      expect(sumPaymentTotal('tipPercent')).toEqual(20);
    });


    it('should get correct tip percent with calculateTipPercent()', function () {

        expect(calculateTipPercent(100, 1)).toEqual(1);
        expect(calculateTipPercent(2, 1)).toEqual(50);
        expect(calculateTipPercent(100, 0)).toEqual(0);
    })

afterEach(function () {
  paymentTbody.remove();
  allPayments = {};

  });
})