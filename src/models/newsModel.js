/**Class model for News
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 */
class News{

    constructor(author, title, content, description, publishedAt, source, url, urlImage){
        this._author = author;
        this._title = title;
        this._content = content;
        this._description = description;
        this._publishedAt = publishedAt;
        this._source = source;
        this._url = url;
        this._urlImage = urlImage;
        this.isFavorite = false;
    }

    set author(author){
        this._author = author;
    }
    get author(){
        return this._author;
    }

    set title(title){
        this._title = title;
    }
    
    get title(){
        return this._title;
    }

    set content(content){
        this._content = content;
    }

    get content(){
        return this._content;
    }

    set description(description){
        this._description = description;
    }

    get description(){
        return this._description;
    }

    set publishedAt(publishedAt){
        this._publishedAt = publishedAt;
    }

    get publishedAt(){
        return this._publishedAt;
    }

    set source(source){
        this._source = source;
    }

    get source(){
        return this._source;
    }
    
    set url(url){
        this._url = url
    }

    get url(){
        return this._url;
    }

    set urlImage(urlImage){
        this._urlImage = urlImage
    }

    get urlImage(){
        return this._urlImage;
    }
    set isFavorite(isFavorite){
        this.isFavorite = isFavorite;
    }

    get isFavorite(){
        return this.isFavorite;
    }
}

export default News;