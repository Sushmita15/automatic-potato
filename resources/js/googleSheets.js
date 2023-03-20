function setUpGoogleSheets() {
    const scriptURL = '<https://script.google.com/macros/s/AKfycbyPmw-q255hvybA83S1eWdjVzuU3VICqyp1pC0UlTvK6p70Z8tgKIJvvFFOCyMqHD46ww/exec>'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')
 
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      btn.disabled = true
      btn.innerHTML = "Sending..."

      let fd = getData(false)
      for (const [key, value] of fd) {
        console.log(`${key}: ${value}\n`);
      }

      fetch('https://script.google.com/macros/s/AKfycbyPmw-q255hvybA83S1eWdjVzuU3VICqyp1pC0UlTvK6p70Z8tgKIJvvFFOCyMqHD46ww/exec', { method: 'POST', mode: 'no-cors', body: fd })
        .then(response => { 
              alert('Success!', response) })
        .catch(error => {
              alert('Error!', error.message)})

      btn.disabled = false
      btn.innerHTML = "Send to Google Sheets"
    })
}
