


async function getDataAPI (endpoint) {
    let url = endpoint.generateURL();
    const response = await fetch(url)
    const data = await response.json()
    const news = data.articles
    console.log(url)
    return news;
}

export default getDataAPI;