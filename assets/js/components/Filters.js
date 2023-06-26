let bookList = sessionStorage.getItem("bookList");
bookList = JSON.parse(bookList);
console.log(bookList);

let categories = [];

for (let book of bookList)
{
    if (!categories.includes(book.category))
    {
        categories.push(book.category);
    }
}

let Filters =
{
    data() {
        return {
            categories
        };
    },
    template:
    `<h3>Catégories</h3>
    <ul id="filters">
        <li v-for="cat in categories"><a>{{cat}}</a></li>
    </ul>`
};

export {Filters};