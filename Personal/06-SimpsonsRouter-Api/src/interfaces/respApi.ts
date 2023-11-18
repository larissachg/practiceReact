export interface SimpsonsResp {
    docs:          Characters[];
    totalDocs:     number;
    limit:         number;
    totalPages:    number;
    page:          number;
    pagingCounter: number;
    hasPrevPage:   boolean;
    hasNextPage:   boolean;
    prevPage:      null;
    nextPage:      number;
}

export interface Characters {
    _id:        string;
    Nombre:     string;
    Historia:   string;
    Imagen:     string;
    Genero:     string;
    Estado:     string;
    Ocupacion:  string;
    updatedAt?: Date;
}
