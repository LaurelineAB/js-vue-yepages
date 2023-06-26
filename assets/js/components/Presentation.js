let Presentation =
{
    props: ["item"],
    template:
    `<section id="presentation">
        <article>
            <h1>YEPages</h1>
            <h2>{{item.title}}</h2>
            <template v-if="item.buttons === true">
                <section class="buttons">
                    <a href="livres/index.html" class="books">Les livres</a>
                    <a href="#" class="account">Mon compte</a>
                </section>
            </template>
        </article>
    </section>`
};

export {Presentation};