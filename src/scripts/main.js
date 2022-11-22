'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('toggle').addEventListener('click', () => {
    const textPriceStarter = document.getElementById('price-starter');
    const textPriceProfessional = document.getElementById('price-professional');
    const textPriceCompany = document.getElementById('price-company');
    const montly = ['$19', '$54', '$89'];
    const yearly = ['$12', '$36', '$56'];

    if (
      textPriceStarter.innerHTML === montly[0]
    ) {
      textPriceStarter.innerHTML = yearly[0];
      textPriceProfessional.innerHTML = yearly[1];
      textPriceCompany.innerHTML = yearly[2];
    } else {
      textPriceStarter.innerHTML = montly[0];
      textPriceProfessional.innerHTML = montly[1];
      textPriceCompany.innerHTML = montly[2];
    }
  });
});
