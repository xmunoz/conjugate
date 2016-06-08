import { assert } from 'chai';
import sinon from 'sinon';
import Article from './Article';

const ROOT = 'fakeRoot';
const TYPE = 'fakeType';
const SUFFIX_TEXT = 'fakeSuffixText';

describe('Generator', () =>
describe('Article', () => {
    describe('#constructor', () => {
        it('declares `root` and `type` properties', () => {
            const article = new Article(ROOT, TYPE);
            assert.deepEqual(article, { root: ROOT, type: TYPE });
        });
    });

    describe('#compose', () => {
        it('returns a `composition` object', () => {
            const article = new Article(ROOT, TYPE);
            const getSuffixStub = sinon.stub(article, 'getSuffix', () => ({
                text: SUFFIX_TEXT
            }));

            assert.deepEqual(article.compose('fakeArg1', 'fakeArg2'), [
                {
                    text: ROOT,
                    stub: ROOT.replace(/./gi, '_')
                },
                {
                    text: SUFFIX_TEXT,
                    stub: SUFFIX_TEXT.replace(/./gi, '_')
                }
            ]);

            getSuffixStub.restore();
        });
    });
}));
