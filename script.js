$(document).ready(function() {
  // Initialize Select2
  $('.currency-select').select2();

  $('#convertBtn').click(function() {
      const amount = $('#amount').val();
      const fromCurrency = $('#fromCurrency').val();
      const toCurrency = $('#toCurrency').val();
      
      // API URL for currency conversion
      const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

      $.getJSON(url, function(data) {
          const rate = data.rates[toCurrency];
          const convertedAmount = (amount * rate).toFixed(2);
          $('#result').html(`${amount} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}`);
      }).fail(function() {
          $('#result').html('Error retrieving exchange rates. Please try again later.');
      });
  });
});
