const backdrop = document.querySelector('.backdrop');
const sideDrawer = document.querySelector('.mobile-nav');
const menuToggle = document.querySelector('#side-menu-toggle');

function backdropClickHandler() {
  backdrop.style.display = 'none';
  sideDrawer.classList.remove('open');
}

function menuToggleClickHandler() {
  backdrop.style.display = 'block';
  sideDrawer.classList.add('open');
}

backdrop.addEventListener('click', backdropClickHandler);
menuToggle.addEventListener('click', menuToggleClickHandler);

document.addEventListener('DOMContentLoaded', () => {
  const deleteButtons = document.querySelectorAll('.delete-button');

  deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.getAttribute('data-product-id');

      if (confirm('Are you sure you want to delete this product?')) {
  
        fetch(`/products/delete/${productId}`, {
          method: 'DELETE'
        })
        .then(response => {
          if (response.ok) {
         
            const productCard = button.closest('.product-item');
            productCard.remove();
          } else {
            console.error('Failed to delete product');
          }
        })
        .catch(error => {
          console.error('Error deleting product:', error);
        });
      }
    });
  });
});
