function filterDestinations() {
    const filter = document.getElementById('filter').value;
    const destinations = document.getElementsByClassName('destination');

    for (let destination of destinations) {
        if (filter === 'all' || destination.classList.contains(filter)) {
            destination.style.display = 'block';
        } else {
            destination.style.display = 'none';
        }
    }
}
