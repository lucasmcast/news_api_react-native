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

    set author(authorAPI){
        this._author = authorAPI;
    }
    get author(){
        return this._author;
    }

    set title(titleAPI){
        this._title = titleAPI;
    }
    
    get title(){
        return this._title;
    }

    set content(contentAPI){
        this._content = contentAPI;
    }

    get content(){
        return this._content;
    }

    set description(descriptionAPI){
        this._description = descriptionAPI;
    }

    get description(){
        return this._description;
    }

    set publishedAt(publishedAtAPI){
        this._publishedAt = publishedAtAPI;
    }

    get publishedAt(){
        return this._publishedAt;
    }

    set source(sourceAPI){
        this._source = sourceAPI;
    }

    get source(){
        return this._source;
    }
    
    set url(urlAPI){
        this._url = urlAPI
    }

    get url(){
        return this._url;
    }

    set urlImage(urlImageAPI){
        this._urlImage = urlImageAPI
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