class Filter {
    Mens(data) {
        const sortedArray = data.filter((item) => item["category"] == "men's clothing");
        return sortedArray;
    }
    Jewels(data) {
        const sortedArray = data.filter((item) => item["category"] == "jewelery");
        return sortedArray;
    }
    Elec(data) {
        const sortedArray = data.filter((item) => item["category"] == "electronics");
        return sortedArray;
    }
    Womens(data) {
        const sortedArray = data.filter((item) => item["category"] == "women's clothing");
        return sortedArray;
    }
}
module.exports = Filter;