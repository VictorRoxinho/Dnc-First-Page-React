import { createContext, useState, useEffect } from "react";
import { getApiData } from "../services/ApiServices";

// Criação do contexto
export const AppContext = createContext();

// Provedor do contexto
export const AppProvider = ({ children }) => {
    const savedLanguage = localStorage.getItem('lang')
    const [language, setLanguage] = useState(savedLanguage ?? 'br');
    const [languages, setLanguages] = useState();
    const [loading, setLoading] = useState(true);

    // Efeito para carregar os textos dos idiomas
    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const getTexts = await getApiData('webtext');
                setLanguages(getTexts);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };

        fetchLanguages();
    }, []);

    useEffect(() => {
        localStorage.setItem('lang', language)
    }, [language])

    // Retorno do provedor com o valor do contexto
    return (
        <AppContext.Provider value={{ language, languages, setLanguage, loading }}>
            {children}
        </AppContext.Provider>
    );
};
