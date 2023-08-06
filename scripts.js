document.addEventListener('DOMContentLoaded', function() {
    const minusBtns = document.querySelectorAll('.minus');
    const plusBtns = document.querySelectorAll('.plus');
    const quantityInputs = document.querySelectorAll('input[type="number"]');
    const prices = document.querySelectorAll('.product-price');
    const totalAmountElement = document.getElementById('totalAmount');
    const cartButton = document.getElementById('cartButton');
  
    function updateTotal() {
      let total = 0;
      let totalQty = 0; // Nouvelle variable pour le total de quantité
      quantityInputs.forEach((input, index) => {
        const qty = parseInt(input.value);
        totalQty += qty;
        total += qty * parseFloat(prices[index].textContent.replace('$', ''));
      });
      totalAmountElement.textContent = `$${total.toFixed(2)} (QTY: ${totalQty})`; // Affichage du total et de la quantité
    }
  
    minusBtns.forEach((minusBtn, index) => {
      minusBtn.addEventListener('click', () => {
        if (quantityInputs[index].value > 1) {
          quantityInputs[index].value = parseInt(quantityInputs[index].value) - 1;
          updateTotal();
        }
      });
    });
  
    plusBtns.forEach((plusBtn, index) => {
      plusBtn.addEventListener('click', () => {
        if (quantityInputs[index].value < 10) {
          quantityInputs[index].value = parseInt(quantityInputs[index].value) + 1;
          updateTotal();
        }
      });
    });
  
    cartButton.addEventListener('click', () => {
      alert(`Vous avez ajouté des produits d'une valeur totale de ${totalAmountElement.textContent} au panier !`);
    });
  
    updateTotal();
  });
  