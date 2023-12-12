const {createApp} = Vue;

    const TitleComponent = {
        props: ['title'],
        template: `
            <header>
                <h1>{{ title }}</h1>
            </header>
        `
    };

    const MessageComponent = {
        props: ['message'],
        template: `
            <main>
                <p>{{ message }}</p>
            </main>
        `
    };

    const QuoteComponent = {
        props: ['quote'],
        template: `
        <p>
            <br>
            <cite>{{quote}}</cite> 
            <br>
        </p>
        `
    };

    const VideoComponent = {
        props: ['src'],
        template: `
            <iframe
            width="600"
            height="400"
            :src="iframeSrc"
            frameborder="0"
            allowfullscreen>
            </iframe>
            `
    };

    const app = createApp({
        data() {
            return {
                title: 'Welcome to my website!!!',
                msg: 'Thanks for visiting, my website. Although it is a bit barron now, it will most definitely fill up with achievements and works that I am only waiting upon completing.',
                quote: "If I have seen further it is by standing on the shoulders of Giants -Sir Isaac Newton, 1675.",
                iframeSrc: "https://www.youtube.com/watch?v=x6-SfRSp28M"
            };
        }
    });

    app.component('title-component', TitleComponent);
    app.component('message-content', MessageComponent);
    app.component('quote-component', QuoteComponent);
    app.component('video-component', VideoComponent);

    app.mount('#app');