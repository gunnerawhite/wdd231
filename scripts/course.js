document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.certificate-title');
  const courses = document.querySelectorAll('.course');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Remove 'active' class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));

      // Add 'active' class to the clicked button
      button.classList.add('active');

      // Show/hide courses based on the filter
      courses.forEach(course => {
        const category = course.getAttribute('data-category');

        if (filter === 'all' || filter === category) {
          course.style.display = 'block';
        } else {
          course.style.display = 'none';
        }
      });
    });
  });
});