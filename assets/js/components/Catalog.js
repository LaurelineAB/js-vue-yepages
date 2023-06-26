import {Filters} from "./Filters.js";
let bookList = sessionStorage.getItem("bookList");
bookList = JSON.parse(bookList);


let Catalog =
    {
        data() {
            return {
                bookList
            };
        },
        components: {
            Filters
        },
        template:
        `<h2>Découvrez <span>nos ouvrages</span></h2>
        <section id="catalog">
            <section id="library">
                <article v-for="book in bookList">
                    <figure><img :src="book.image" alt="Couverture {{book.title}}"></figure>
                    <h2>{{book.title}}</h2>
                    <p class="category">{{book.category}}</p>
                    <p class="author">Par {{book.author}}</p>
                    <button class="discover">Découvrir le livre</button>
                </article>
            </section>
            <aside>
                <h2>Filtres</h2>
                <Filters/>

            </aside>
        </section>`
    };
    


export {Catalog};