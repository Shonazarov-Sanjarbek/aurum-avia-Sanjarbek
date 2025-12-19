export async function sendTelegramMessage({
  name,
  phone,
  message,
  source = "Nomaʼlum forma",
}) {
  const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
  const CHAT_ID = import.meta.env.VITE_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    throw new Error("Telegram token yoki chat_id topilmadi");
  }

  const text = `
📩 *Yangi so‘rov!*

👤 Ism: ${name}
📞 Telefon: ${phone}
💬 Xabar:
${message}
  `;

  const res = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "Markdown",
      }),
    }
  );

  const data = await res.json();

  if (!data.ok) {
    throw new Error(data.description || "Telegramga yuborilmadi");
  }

  return data;
}
