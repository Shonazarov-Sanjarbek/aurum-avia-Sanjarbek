export async function sendTelegramMessage(values) {
  const BOT_TOKEN = "8519091837:AAGtVCe0Pe_ftmPFJhnUl3oHDFPvP4m0wpg";
  const CHAT_ID = "6160963553"; // o'zingning chat ID'ing

  const text = `
📩 Yangi so‘rov!

👤 Ism: ${values.name}
📞 Telefon: ${values.phone}
💬 Xabar: ${values.message}
  `;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: "Markdown",
      }),
    });
  } catch (err) {
    console.error("Telegramga yuborishda xatolik:", err);
  }
}
