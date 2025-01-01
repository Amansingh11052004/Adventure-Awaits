// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.querySelector("form");
    const checkInDate = document.getElementById("checkin");
    const checkOutDate = document.getElementById("checkout");

    // Set minimum date for check-in and check-out as today's date
    const today = new Date().toISOString().split("T")[0];
    checkInDate.setAttribute("min", today);
    checkOutDate.setAttribute("min", today);

    // Event Listener to update check-out date based on check-in date
    checkInDate.addEventListener("change", () => {
        const checkInValue = checkInDate.value;
        checkOutDate.setAttribute("min", checkInValue);
    });

    // Form submission event listener
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission for validation

        const destination = document.getElementById("destination").value;
        const guests = document.getElementById("guests").value;

        // Basic Validation: Ensure all fields are filled out
        if (!destination || !checkInDate.value || !checkOutDate.value || !guests) {
            alert("Please fill in all fields.");
            return;
        }

        // Date Validation: Ensure check-out date is after check-in date
        const checkIn = new Date(checkInDate.value);
        const checkOut = new Date(checkOutDate.value);

        if (checkOut <= checkIn) {
            alert("Check-out date must be after check-in date.");
            return;
        }

        // If all validations pass, show success message (or proceed with backend logic)
        alert(`Searching for ${destination} for ${guests} guest(s) from ${checkInDate.value} to ${checkOutDate.value}`);

        // Optionally, you could proceed with an API call here or transition to a results page
    });
});
document.getElementById('register-btn').addEventListener('click', function() {
    openModal('register-modal');
});

document.getElementById('signin-btn').addEventListener('click', function() {
    openModal('signin-modal');
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal if clicked outside content
window.onclick = function(event) {
    const registerModal = document.getElementById('register-modal');
    const signinModal = document.getElementById('signin-modal');

    if (event.target === registerModal) {
        registerModal.style.display = 'none';
    } else if (event.target === signinModal) {
        signinModal.style.display = 'none';
    }
};
// JavaScript for the image slider
let currentIndex = 0;

function slideTo(index) {
    const slider = document.querySelector(".destinations");
    const totalCards = document.querySelectorAll(".destination-card").length;
    currentIndex = index < 0 ? totalCards - 1 : index % totalCards;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(() => {
    slideTo(currentIndex + 1);
}, 3000); // Change image every 3 seconds

// JavaScript for the popup effect
function showPopup(title, price, imgSrc) {
    document.getElementById("popup-title").textContent = title;
    document.getElementById("popup-price").textContent = `Starting from ${price}`;
    document.getElementById("popup-img").src = imgSrc;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
// JavaScript for the popup effect
function showPopup(title, price, imgSrc) {
    document.getElementById("popup-title").textContent = title;
    document.getElementById("popup-price").textContent = `Starting from ${price}`;
    document.getElementById("popup-img").src = imgSrc;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
const hotels = {
    hotel1: {
        title: "Eco Resort, Kerala",
        price: "Starting from ₹5,000/night",
        description: "A serene eco-friendly resort nestled in the lush greenery of Kerala.",
        image: "hotel1.jpg"
    },
    hotel2: {
        title: "Heritage Palace, Rajasthan",
        price: "Starting from ₹12,000/night",
        description: "Experience royal heritage at this luxurious palace in Rajasthan.",
        image: "hotel2.jpg"
    }
};

function showPopup(hotelId) {
    const popupOverlay = document.getElementById("popupOverlay");
    const hotel = hotels[hotelId];
    document.getElementById("popupTitle").textContent = hotel.title;
    document.getElementById("popupPrice").textContent = hotel.price;
    document.getElementById("popupDescription").textContent = hotel.description;
    document.getElementById("popupImage").src = hotel.image;

    popupOverlay.style.display = "flex";
}

function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
}
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
