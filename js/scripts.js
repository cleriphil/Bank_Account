
// Shorthand for $( document ).ready()
$(function() {
  var currentAccount = [];
  $("form#bank-account").submit(function(event) {
    event.preventDefault();
    $('.existing-account').show();

    var owner = $(this).find("input#owner").val();
    var balance = parseInt($(this).find("input#balance").val());
    currentAccount.push(new BankAccount(owner, balance));

    $('.create-account').hide();
    $(".owner").text(currentAccount[0].owner);
    $(".balance").text(currentAccount[0].balance);

  });

  $("form#deposit-withdraw").submit(function(event) {
    $('.existing-account').show();
    $('.create-account').hide();
    var depositAmount = parseInt($(this).find("input#deposit-amount").val());
    var withdrawAmount = parseInt($(this).find("input#withdraw-amount").val());
    currentAccount[0].deposit(depositAmount);
    currentAccount[0].withdraw(withdrawAmount);
    $(".owner").text(currentAccount[0].owner);
    $(".balance").text(currentAccount[0].balance);

    $("input#deposit-amount").val("0");
    $("input#withdraw-amount").val("0");
    event.preventDefault();
  })

});
function BankAccount(owner, balance) {
  this.owner = owner;
  this.balance = balance;
}

BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount) {
  this.balance -= amount;
}
