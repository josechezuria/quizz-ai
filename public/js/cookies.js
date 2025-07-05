$("#acceptCookies").on("click", async () => {
  try {
    await fetch("/accept-cookies", {
      method: "POST",
    });
    window.location.href = "/quiz";
  } catch (err) {
    console.error("Failed to accept cookies", err);
  }
});

$("#denyCookies").on("click", () => {
  window.location.href = "/"; // send back to home or error page
});