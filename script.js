async function getVerse() {
  try {
    const res = await fetch('https://bible-api.com/john%203:16');
    const data = await res.json();

    document.getElementById('verse-text').innerText = `"${data.text.trim()}"`;
    document.getElementById('verse-reference').innerText = `– ${data.reference}`;
  } catch (error) {
    document.getElementById('verse-text').innerText = 'Error fetching verse.';
    console.error(error);
  }
}

function shareVerse() {
  const verse = document.getElementById('verse-text').innerText;
  const ref = document.getElementById('verse-reference').innerText;
  const fullVerse = `${verse} ${ref}`;

  if (navigator.share) {
    navigator
      .share({
        title: 'Daily Bible Verse',
        text: fullVerse,
        url: window.location.href
      })
      .catch((err) => console.error('Error sharing:', err));
  } else {
    alert('Sharing is not supported in your browser.');
  }
}

document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

getVerse(); // Load verse on page load