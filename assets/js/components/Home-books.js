let bookList = sessionStorage.getItem("bookList");
bookList = JSON.parse(bookList);
console.log(bookList);
let homeBooks = [];
for (let i=0; i<5; i++)
{
    homeBooks.push(bookList[i]);
}
console.log(homeBooks);

let HomeBooks =
    {
        data() {
            return {
                homeBooks
            };
        },

        template:
        `<h2>Découvrez <span>notre collection d'ouvrages</span></h2>
        <section id="library">
            <article v-for="book in homeBooks">
                <figure><img :src="book.image" alt="Couverture {{book.title}}"></figure>
                <h2>{{book.title}}</h2>
                <p class="category">{{book.category}}</p>
                <p class="author">Par {{book.author}}</p>
                <button class="discover">Découvrir le livre</button>
            </article>
        </section>
        <a href="livres/index.html" class="browse">Parcourir la collection</a>`
    };
    


export {HomeBooks};