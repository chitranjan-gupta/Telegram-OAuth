import Script from 'next/script'
export default function Page() {
    return <>
    <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="OAuth_By_Telegram_Bot" data-size="large" data-radius="5" data-onauth="onTelegramAuth(user)" data-request-access="write"></script>
    <Script id="show-banner">
        {`function onTelegramAuth(user) {
            alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
        }`}
    </Script>
    <h1>Hello,World</h1>
    <button className="btn tgme_widget_login_button">
        <i className="tgme_widget_login_button_icon"></i>Log in with Telegram
    </button>
    </>;
}