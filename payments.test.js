describe("Payments test", function() {
    beforeEach(function () {
      billAmtInput.value = 20;
      tipAmtInput.value = 4;
    });
  

// submitPaymentInfo()  -  measure bill increase, tip increase and other functions
    it('should produce accurate values in all measures using submitPaymentInfo()', function () {
      
      submitPaymentInfo();

      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('20');
      expect(allPayments['payment1'].tipAmt).toEqual('4');
      expect(allPayments['payment1'].tipPercent).toEqual(20);
    });


// createCurPayment - return undefined w negative or empty inputs from bill and tip
    it('should return undefined w negative or empty inputs from bill and tip', function () {
      billAmt = 0;
      tipAmt = 5;
      
      expect(createCurPayment ()).nothing(); 
    });

    it('should return undefined w negative or empty inputs from bill and tip', function () {
      billAmt = 5;
      tipAmt = 0;
      expect(createCurPayment ()).nothing(); 
    });

    it('should return undefined w negative or empty inputs from bill and tip', function () {
      billAmt = -5;
      tipAmt = 0;
      expect(createCurPayment ()).nothing(); 
    });

    it('should return undefined w negative or empty inputs from bill and tip', function () {
      billAmt = 5;
      tipAmt = -5;
      expect(createCurPayment ()).nothing(); 
    });

// appendPaymentTable() add row -

    it('should update #paymentTable on appendPaymentTable()', function () {
      let curPayment = createCurPayment();
      allPayments['payment1'] = curPayment; 

      appendPaymentTable(curPayment);

      let paymentCells = document.querySelectorAll('#paymentTable tbody tr td');

      expect(paymentCells.length).toEqual(3);
      expect(paymentCells[0].innerText).toEqual('$20');
      expect(paymentCells[1].innerText).toEqual('$4');
      expect(paymentCells[2].innerText).toEqual('20%');
    });

// updateSummary() add row for total sum

    it('should update #summaryTable on updateSummary()', function () {
      // info required for no 0 sum - 
      // paymentTotal, allPayment object
      paymentTotal = 60;
      allPayments = {payment1: {billAmt: '10', tipAmt: '2', tipPercent: 20}, payment2:{billAmt: '50', tipAmt: '10', tipPercent: 20}};

      updateSummary();

      let summaryCells = document.querySelectorAll('#summaryTable tbody tr td');

      expect(summaryCells.length).toEqual(3);
      expect(summaryCells[0].innerText).toEqual('$60');
      expect(summaryCells[1].innerText).toEqual('$12');
      expect(summaryCells[2].innerText).toEqual('20%');
    });


afterEach(function() {
  paymentTbody.innerText = '';
  billAmtInput.value = '';
  tipAmtInput.value = '';
  allPayments = {};
  paymentID = 0;
  summaryTds[0].innerText = '';
  summaryTds[1].innerText = '';
  summaryTds[2].innerText = '';
  });
});