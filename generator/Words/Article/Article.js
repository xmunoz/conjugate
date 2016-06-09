import { find } from 'lodash';
import conjugationTable from 'tables/conjugationTable/data.js';
import assertStringsDefined from 'generator/util/assertStringsDefined.js';
import WordChunk from 'generator/WordChunk/WordChunk.js';

export default class Article {

    constructor ({ root, type }) {
        const props = { root, type, chunks: [], translations: {} };
        assertStringsDefined({ root, type });
        Object.assign(this, props);
    }

    getSuffix (grammarCase, objectGender) {
        const { type } = this;
        const articleSuffix = find(conjugationTable.articles.list, {
            objectGender, grammarCase, articleType: type
        });

        if (articleSuffix.text === null) {
            const errObj = { type, objectGender };
            throw Error(`Article: Given object gender and article type are incompatable ${ JSON.stringify(errObj) }`);
        }

        return articleSuffix;
    }

    compose (grammarCase, objectGender) {
        const { text } = this.getSuffix(grammarCase, objectGender);

        const composition = {
            translations: this.translations,
            chunks: [
                new WordChunk(this.root),
                new WordChunk(text)
            ]
        };


        return composition;
    }

}