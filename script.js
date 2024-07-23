function highlight() {
  // Get all <strong> elements in the document
  const boldWords = document.querySelectorAll('strong');
  
  // Change the color of all bold words to green
  boldWords.forEach(word => {
    word.style.color = 'green';
  });
}

function return_normal() {
  // Get all <strong> elements in the document
  const boldWords = document.querySelectorAll('strong');
  
  // Change the color of all bold words back to black
  boldWords.forEach(word => {
    word.style.color = 'black';
  });
}
