const beeModel = document.getElementById("bee-model");
const section = Array.from(document.querySelectorAll("section"));

// Ensure there are enough positions/orbits for the sections
// If you have N sections, you often need N positions/orbits
// to define the state *at the start* of each section.
const shiftPositions = [0, -20, 0, 25];
const cameraOrbits = [[90, 90], [-45, 90], [-180, 0], [45, 90]];

// Make sure the lengths match the number of sections or the intended logic
if (section.length > 0 && (shiftPositions.length < section.length || cameraOrbits.length < section.length)) {
    console.warn("Warning: The number of shiftPositions or cameraOrbits might be less than the number of sections. Animation might not cover all sections correctly.");
}

const sectionOffsets = section.map(s => s.offsetTop);

console.log("Section Offsets:", sectionOffsets); // Good for debugging

const lastSectionIndex = section.length - 1;

// Interpolation function (Linear Interpolation - Lerp)
const interpolate = (start, end, progress) => {
    // Clamp progress between 0 and 1 for standard lerp behavior
    const clampedProgress = Math.max(0, Math.min(1, progress));
    return start + (end - start) * clampedProgress;
};

// Calculate scroll progress across sections (returns value like 0.0, 1.5, 3.0)
const getScrollProgress = scrollY => {
    // Handle edge cases
    if (section.length === 0 || lastSectionIndex < 0) return 0; // No sections
    if (section.length === 1) return 0; // Only one section, no progress between sections

    // Before the first section
    if (scrollY < sectionOffsets[0]) {
      return 0;
    }

    // Check between sections
    for (let i = 0; i < lastSectionIndex; i++) {
        const currentOffset = sectionOffsets[i];
        const nextOffset = sectionOffsets[i + 1];
        const sectionHeight = nextOffset - currentOffset;

        if (scrollY >= currentOffset && scrollY < nextOffset) {
            // Avoid division by zero if sectionHeight is 0
            if (sectionHeight === 0) {
                // If sections overlap, decide behavior: return index or next index?
                // Returning 'i' means progress stays 0 until the *next* different offset
                return i;
            }
            // Calculate progress within this section transition (0 to 1)
            const progressInSection = (scrollY - currentOffset) / sectionHeight;
            // Return the current section index + the progress within it
            return i + progressInSection;
        }
    }

    // If scrollY is at or beyond the start of the last section
    // The progress effectively stops at the index of the last section.
    return lastSectionIndex;
};

// Scroll event listener
window.addEventListener("scroll", () => {
    // 1. Get Overall Scroll Progress
    const scrollProgress = getScrollProgress(window.scrollY);

    // 2. Determine Current Section Index and Progress Within It
    // Use Math.min to ensure sectionIndex doesn't exceed the max possible index
    const sectionIndex = Math.min(Math.floor(scrollProgress), lastSectionIndex);
    // sectionProgress is the fractional part, representing how far *between*
    // sectionIndex and sectionIndex+1 we are (0.0 to ~1.0)
    const sectionProgress = scrollProgress - sectionIndex;

    // Check if beeModel actually exists before trying to modify it
    if (!beeModel) {
        console.error("Element with ID 'bee-model' not found.");
        return; // Exit if the model isn't found
    }

    // 3. Calculate Current Horizontal Shift
    // Ensure index is within bounds for accessing the array
    const currentSectionIndex = Math.min(sectionIndex, shiftPositions.length - 1);
    const nextSectionIndex = Math.min(sectionIndex + 1, shiftPositions.length - 1);

    const startShift = shiftPositions[currentSectionIndex];
    // Use the value from the *next* index. If it's out of bounds (we are in the last section),
    // the clamped nextSectionIndex will be the same as currentSectionIndex,
    // effectively making endShift === startShift, stopping interpolation.
    const endShift = shiftPositions[nextSectionIndex];
    const currentShift = interpolate(startShift, endShift, sectionProgress);

    // 4. Calculate Current Camera Orbit
    // Ensure index is within bounds for accessing the array
    const currentOrbitIndex = Math.min(sectionIndex, cameraOrbits.length - 1);
    const nextOrbitIndex = Math.min(sectionIndex + 1, cameraOrbits.length - 1);

    const startOrbit = cameraOrbits[currentOrbitIndex]; // Array [angle1, angle2]
    const endOrbit = cameraOrbits[nextOrbitIndex]; // Array [angle1, angle2]

    let currentOrbit = startOrbit; // Default to startOrbit if interpolation isn't possible

    // Ensure both start and end orbits are valid arrays of the same length before interpolating
    if (Array.isArray(startOrbit) && Array.isArray(endOrbit) && startOrbit.length === endOrbit.length) {
         currentOrbit = startOrbit.map((startVal, i) => {
             // Interpolate between the corresponding start and end values
             return interpolate(startVal, endOrbit[i], sectionProgress);
         });
    } else {
         console.warn("Mismatched or invalid cameraOrbits for index:", sectionIndex);
         // Keep the default currentOrbit = startOrbit
    }


    // 5. Apply Styles and Attributes
    beeModel.style.transform = `translateX(${currentShift}%)`; // Corrected: Uses backticks

    // Ensure currentOrbit is valid before setting the attribute
    if (Array.isArray(currentOrbit) && currentOrbit.length === 2) {
        // Corrected: Use setAttribute, backticks, correct variable name `currentOrbit`, correct spacing
        beeModel.setAttribute("camera-orbit", `${currentOrbit[0]}deg ${currentOrbit[1]}deg`);
    } else {
        console.error("Failed to calculate a valid camera orbit (expected array with 2 numbers):", currentOrbit);
    }
});