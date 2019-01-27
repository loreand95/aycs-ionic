export const USE_PROXY = false;
//HEROKU
export const URL_BASE = USE_PROXY ? 'api' : 'https://aycserver.herokuapp.com/aycs/api';

//LOCAL
//export const URL_BASE = USE_PROXY ? 'api' : 'http://192.168.43.107:8080/aycs/api';

export const URL = {
    SIGN: URL_BASE + "/sign",
    LOGIN: URL_BASE + "/login",
    LOGOUT: URL_BASE + "/logout",
    UPDATE_PROFILO: URL_BASE + "/utente/updateprofilo",

    PRODOTTO_BY_ID: URL_BASE + "/prodotti/prodotto",
    PRODOTTI_BY_CATEGORIA: URL_BASE + "/prodotti/categoria",
    SELEZIONE: URL_BASE + "/prodotti/categoria/selezione",

    CATEGORIE: URL_BASE + "/categorie",

    PREFERITI: URL_BASE + "/preferiti",
    DELETE_PREFERITO: URL_BASE + "/preferiti/delete",
    ADD_PREFERITO: URL_BASE + "/preferiti/add"
}

export const X_AUTH = "X-Auth";

export const AUTH_TOKEN = "auth-token";

export const UTENTE_STORAGE = "utente";

export const LINGUA = 'lingua';
