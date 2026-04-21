import { getSpacePhoto } from "./api.js";
import { renderPicture, renderError } from "./ui.js";

const btn = document.getElementById('search-btn');
const inputDate = document.getElementById('date-input');

// Define a data máxima como hoje
const today = new Date().toISOString().split('T')[0];
inputDate.max = today;

btn.addEventListener('click', async () => {
    const date = inputDate.value;
    
    if (!date) {
        alert("Please select a date!");
        return;
    }

    const minDate = "1995-06-16";
    if (date < minDate) {
        renderError("NASA's archive only goes back to June 16, 1995. Please try a more recent date.");
        return;
    }

    if (date > today) {
        renderError("The future hasn't happened yet! Please select a past or current date.");
        return;
    }

    // Trava o botão enquanto carrega
    btn.disabled = true;
    btn.setAttribute('aria-busy', 'true');
    btn.textContent = "Searching through the cosmos...";

    try {
        const response = await getSpacePhoto(date);
        renderPicture(response);
    } catch (error) {
        renderError(error.message);
    } finally {
        // Libera o botão e retorna ao estado inicial
        btn.disabled = false;
        btn.setAttribute('aria-busy', 'false');
        btn.textContent = "Search Photo";
    }
});