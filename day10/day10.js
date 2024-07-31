// Activity 1: Basic Event Handling

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
document.getElementById('task1Button').addEventListener('click', function() {
    document.getElementById('task1Paragraph').textContent = 'Text has been changed!';
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.
document.getElementById('task2Image').addEventListener('dblclick', function() {
    this.style.display = this.style.display === 'none' ? 'block' : 'none';
});

// Activity 2: Mouse Events

// Task 3: Add a mouseover event listener to an element that changes its background color.
document.getElementById('task3Box').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow';
});

// Task 4: Add a mouseout event listener to an element that resets its background color.
document.getElementById('task4Box').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
document.getElementById('task5Input').addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
});

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
document.getElementById('task6Input').addEventListener('keyup', function() {
    document.getElementById('task6Paragraph').textContent = this.value;
});

// Activity 4: Form Events

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
document.getElementById('task7Form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    console.log('Form data:', Object.fromEntries(formData.entries()));
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
document.getElementById('task8Select').addEventListener('change', function() {
    document.getElementById('task8Paragraph').textContent = `Selected: ${this.value}`;
});

// Activity 5: Event Delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
document.getElementById('task9List').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log(`Clicked item: ${event.target.textContent}`);
    }
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
document.getElementById('task10Parent').addEventListener('click', function(event) {
    if (event.target.classList.contains('dynamic-child')) {
        console.log(`Clicked dynamic child: ${event.target.textContent}`);
    }
});
