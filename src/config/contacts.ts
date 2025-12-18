export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
    {
        name: "Telegram",
        url: "https://t.me/yakushevmeb",
        icon: "✈️",
        ariaLabel: "Связаться через Telegram",
    },
    {
        name: "WhatsApp",
        url: "https://wa.me/message/PQG4NCSU37YOP1",
        icon: "💬",
        ariaLabel: "Написать в WhatsApp",
    },
    {
        name: "VK",
        url: "https://vk.com/yakushevmebel",
        icon: "🔵",
        ariaLabel: "Перейти в VK",
    },
    {
        name: "Мах",
        url: "https://max.ru/yakushev_furniture",
        icon: "📱",
        ariaLabel: "Связаться через Мах",
    },
    {
        name: "Почта",
        url: "mailto:yakushevmebel@mail.ru",
        icon: "✉️",
        ariaLabel: "Написать на почту",
    },
];

export const contactInfo = {
  phone: '+7 (900) 000-00-00',
  email: 'yakushevmebel@mail.ru'
};
