function submitRecommendation() {
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  const recommendationBox = document.querySelector('.recommendation-box');

  if (!message) {
    alert("Please enter a recommendation message.");
    return;
  }

  const newPara = document.createElement('p');
  newPara.innerHTML = `“ ${message} ”${name ? ' – <strong>' + name + '</strong>' : ''}`;
  recommendationBox.appendChild(newPara);

  document.getElementById('name').value = '';
  document.getElementById('message').value = '';

  alert("Thank you for your recommendation!");
}
