export interface iDetailsCard {
    name: {
        common:string | undefined;
        nativeName: {
            [key:string]:{
                official:string
            }
        }
    };
    cca3: string;
    population: number;
    region: string;
    subregion:string;
    continents: [string];
    capital: [string];
    flags: {
        alt: string;
        svg: string;
        png: string;
    };
    tld:[string];
    currencies:{
        [key:string]:{ 
            name:string
        }
    };
    languages:{
        [key:string]:string
    };
    borders:[string];
}