export function showModal({ title = "", content = "", buttons = ["OK"] } = {}) {
  return new Promise((resolve) => {
    // Overlay
    const overlay = document.createElement("div");
    overlay.className =
      "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";

    // Modal box
    const modal = document.createElement("div");
    modal.className = "bg-white rounded-lg shadow-lg p-6 max-w-lg w-full mx-4";

    // Title
    const h2 = document.createElement("h2");
    h2.textContent = title;
    h2.className = "text-lg font-semibold mb-2";
    modal.appendChild(h2);

    // Content
    const p = document.createElement("p");
    p.textContent = content;
    p.className = "text-gray-700 mb-4";
    modal.appendChild(p);

    // Buttons container
    const btnContainer = document.createElement("div");
    btnContainer.className = "flex justify-end gap-2";

    buttons.forEach((btnText, index) => {
      const btn = document.createElement("button");
      btn.textContent = btnText;
      btn.className =
        "px-4 py-2 rounded font-medium " +
        (index === buttons.length - 1
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300");
      btn.onclick = () => {
        overlay.remove();
        resolve(btnText);
      };
      btnContainer.appendChild(btn);
    });

    modal.appendChild(btnContainer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  });
}
