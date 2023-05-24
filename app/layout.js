import Script from 'next/script'
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
        <title>Telegram OAuth</title>
        </head>
        <body>
            <Script id="show-banner">
                {`function onTelegramAuth(user) {
                    alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
                }`}
            </Script>
            {children}
            <Script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="OAuth_By_Telegram_Bot" data-size="large" data-radius="5" data-onauth="onTelegramAuth(user)" data-request-access="write"></Script>    
        </body>
      </html>
    );
  }