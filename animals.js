function showTooltip(tooltipId) {
    // Hide all tooltips first
    document.querySelectorAll(".tooltip").forEach(tooltip => {
        tooltip.style.display = "none";
    });

    // Show only the hovered tooltip
    let tooltip = document.getElementById(tooltipId);
    if (tooltip) {
        tooltip.style.display = "block";
    }
}

function hideTooltip(tooltipId) {
    setTimeout(() => {
        let tooltip = document.getElementById(tooltipId);
        if (tooltip && !tooltip.matches(":hover") && 
            !tooltip.closest(".tooltip-container").matches(":hover")) {
            tooltip.style.display = "none";
        }
    }, 200); // Short delay to prevent flickering
}