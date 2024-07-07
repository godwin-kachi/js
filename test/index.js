const today = new Date();
const display = document.querySelector('.display_date');

const month = ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



display.innerHTML = today.getFullYear() + '/' + (today.getMonth() +1) + '/' + today.getDate()





// display.innerHTML = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDay();