describe('BankAccount', function() {

  it("creates a new bank account with name", function() {
    var testAccount = new BankAccount("Steve B", 100000000);
    expect(testAccount.owner).to.equal("Steve B");
    expect(testAccount.balance).to.equal(100000000);
  })

});
