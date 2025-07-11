function calculate() {
  const loan = parseFloat(document.getElementById("loanAmount").value);
  const rate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
  const years = parseFloat(document.getElementById("loanTenure").value);
  const months = years * 12;

  if (loan && rate && years) {
    const monthly = (loan * rate) / (1 - Math.pow(1 + rate, -months));
    document.getElementById("monthlyPayment").textContent = monthly.toFixed(2);
    document.getElementById("result").hidden = false;
  }
}
