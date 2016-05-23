/*
    Scraped from http://www.byki.com/lists/german/greg's-basic-german-adjectives.html

    Some manual cleansing:
        - parenthesis
        - long descriptions
*/

/*
    Manual scraping code (enter in the browser console)
    ====================

    NodeList.prototype.map = Array.prototype.map;

    foo = document
        .querySelectorAll('.tblListItems tbody tr')
        .map((el) => {
            const slots = el.querySelectorAll('td');
            if (!slots.length) return;
            const de = slots[1].innerText.replace(/\n|\r/g, "");
            const enArr = slots[2].innerText
              .replace(/\n|\r/g, "")
              .split(', ')
              .filter((text) => text);

            if (enArr.length === 0) {
              // Make sure we always get a translation.
              alert(de);
              return;
            }

            return [
              de, enArr
            ];
        })
        .filter((item) => item);

    console.log(JSON.stringify(foo));
*/

export default [
    ["bestimmt", ["exact", "definite"]],
    ["ziemlich", ["a little", "somewhat"]],
    ["scheußlich", ["abominable"]],
    ["absolut", ["absolute"]],
    ["abstinent", ["abstinent"]],
    ["eigentlich", ["actual", "real"]],
    ["zusätzlich", ["additional"]],
    ["hinreichend", ["adequate"]],
    ["liebevoll", ["affectionate"]],
    ["anschließend", ["afterwards"]],
    ["aggressiv", ["aggressive"]],
    ["lebendig", ["alive", "lively"]],
    ["angeblich", ["alleged", "supposed"]],
    ["ausgiebig", ["ample"]],
    ["gewinkelt", ["angled"]],
    ["eckig", ["angular"]],
    ["magersüchtig", ["anorexic"]],
    ["entsetzt", ["appalled"]],
    ["angemessen", ["appropriate"]],
    ["hochmütig", ["arrogant"]],
    ["arglos", ["artless", "unsophisticated"]],
    ["beschämt", ["ashamed"]],
    ["schlafend", ["asleep"]],
    ["sportlich", ["athletic"]],
    ["atomisch", ["atomic"]],
    ["verfügbar", ["available"]],
    ["erreichbar", ["available"]],
    ["vermeidbar", ["avoidable"]],
    ["erwacht", ["awake"]],
    ["aufmerksam", ["aware"]],
    ["fort", ["away"]],
    ["schlimm", ["bad", "nasty"]],
    ["verschlossen", ["barred"]],
    ["hübsch", ["beautiful"]],
    ["hinten", ["behind", "back,"]],
    ["nachträglich", ["belated"]],
    ["beliebt", ["beloved", "popular"]],
    ["verbogen", ["bent"]],
    ["groß", ["big", "large"]],
    ["verbissen", ["bitter"]],
    ["blind", ["blind"]],
    ["blähend", ["bloated", "flatulent"]],
    ["stumpf", ["blunt"]],
    ["kühn", ["bold"]],
    ["versoffen", ["boozy"]],
    ["gelangweilt", ["bored", "lacadasical"]],
    ["wiedergeboren", ["born again"]],
    ["nervend", ["bothersome"]],
    ["tapfer", ["brave"]],
    ["ehern", ["brazen"]],
    ["brillant", ["brilliant"]],
    ["spröder", ["brittle"]],
    ["gebrochen", ["broken"]],
    ["gestört", ["broken", "disturbed"]],
    ["beschäftigt", ["busy", "engaged", "occupied"]],
    ["besetzt", ["engaged", "occupied", "taken"]],
    ["belegt", ["reserved", "occupied", "taken"]],
    ["durchaus", ["by all means", "every possible"]],
    ["aufrichtig", ["candid", "honest"]],
    ["vorsichtig", ["careful"]],
    ["katholisch", ["catholic"]],
    ["erwischt", ["caught", "nabbed"]],
    ["gewiss", ["certain"]],
    ["chaotisch", ["chaotic"]],
    ["billig", ["cheap", "inexpensive"]],
    ["geizig", ["cheap", "tight fisted"]],
    ["kariert", ["checkered"]],
    ["frech", ["cheeky", "fresh"]],
    ["kinderfreundlich", ["child-friendly"]],
    ["christlich", ["christian"]],
    ["filmisch", ["cinematic"]],
    ["zivilisiert", ["civilized"]],
    ["klassisch", ["classical"]],
    ["heiter", ["clear"]],
    ["übersichtlich", ["clearly arranged"]],
    ["verhüllt", ["cloaked", "covered"]],
    ["bewölkt", ["cloudy"]],
    ["eingebildet", ["cocky", "conceited"]],
    ["kollegial", ["collegial", "friendly"]],
    ["bunt", ["colored"]],
    ["gemütlich", ["comfortable"]],
    ["bequem", ["comfortable", "convenient", "easy"]],
    ["gemeinsam", ["common", "joint"]],
    ["kommunikativ", ["communicative"]],
    ["kommunistisch", ["communist"]],
    ["kompetent", ["competent"]],
    ["vollständig", ["complete ", "finished"]],
    ["kompliziert", ["complicated"]],
    ["umfassend", ["comprehensive"]],
    ["obligatorisch", ["compulsory"]],
    ["verborgen", ["concealed"]],
    ["verdeckt", ["concealed", "hidden"]],
    ["verwirrt", ["confused"]],
    ["konsequent", ["consistent"]],
    ["zufrieden", ["contented"]],
    ["beherrscht", ["restrained", "controlled"]],
    ["herkömmlich", ["conventional"]],
    ["überzeugt", ["convinced"]],
    ["schon gar", ["cooked"]],
    ["eingepfercht", ["cooped up"]],
    ["ätzend", ["corrosive", "god awful"]],
    ["bedeckt", ["covered"]],
    ["abgedeckt", ["covered"]],
    ["kreativ", ["creative"]],
    ["krumm", ["crooked"]],
    ["eng", ["crowded", "cramped", "tight"]],
    ["aktuell", ["current"]],
    ["dunkel", ["dark"]],
    ["tot", ["dead"]],
    ["tödlich", ["deadly"]],
    ["taub", ["deaf"]],
    ["todkrank", ["dealthly ill"]],
    ["betrügerisch", ["deceitful", "fraudulent"]],
    ["entscheidend", ["decisive"]],
    ["geschmückt", ["decorated"]],
    ["tief", ["deep"]],
    ["entzückend", ["delighted"]],
    ["demokratisch", ["democratic"]],
    ["dichter", ["dense"]],
    ["zuverlässig", ["dependable", "reliable"]],
    ["abhängig", ["dependent", "addicted"]],
    ["erstrebenswert", ["desirable"]],
    ["detailliert", ["detailed"]],
    ["zielstrebig", ["determined"]],
    ["schräg", ["diagonal"]],
    ["verschieden", ["different", "dissimilar"]],
    ["diplomatisch", ["diplomatic"]],
    ["schmutzig", ["dirty"]],
    ["diszipliniert", ["disciplined"]],
    ["erkrankt", ["diseased"]],
    ["verlogen", ["dishonest"]],
    ["versetzt", ["displaced", "shifted"]],
    ["distanziert", ["distanced"]],
    ["geteilt", ["divided"]],
    ["zweistellig", ["double digit"]],
    ["dramatisch", ["dramatic"]],
    ["gefürchtet", ["dreaded"]],
    ["düster", ["dreary"]],
    ["bekleidet", ["dressed"]],
    ["ermattet", ["droopy", "wore out"]],
    ["betrunken", ["drunk"]],
    ["trocken", ["dry"]],
    ["fällig", ["due", "overdue"]],
    ["dumm", ["dumb"]],
    ["doof", ["dumb"]],
    ["ernsthaft", ["earnest"]],
    ["exzentrisch", ["eccentric"]],
    ["ekstatisch", ["ecstatic"]],
    ["erfolgreich", ["effective", "successful"]],
    ["elastisch", ["elastic"]],
    ["elegant", ["elegant"]],
    ["schick", ["elegant", "smart"]],
    ["verlegen", ["embarrassed"]],
    ["hochangesehen", ["eminently respectable"]],
    ["angestellt", ["employed"]],
    ["berufstätig", ["employed"]],
    ["entrückt", ["enraptured"]],
    ["notwendig", ["essential"]],
    ["standesgemäß", ["ethical"]],
    ["europäisch", ["european"]],
    ["evangelisch", ["evangelical"]],
    ["übertrieben", ["exaggerated"]],
    ["hervorragend", ["excellent"]],
    ["außergewöhnlich", ["exceptional"]],
    ["vergriffen", ["exhausted", "out of stock"]],
    ["teuer", ["expensive"]],
    ["erfahren", ["experienced"]],
    ["auserlesen", ["exquisite"]],
    ["anständig", ["fair", "decent"]],
    ["ausreichend", ["fair", "passable"]],
    ["treu", ["faithful"]],
    ["fantastisch", ["fantastic"]],
    ["fern", ["far away"]],
    ["fett", ["fatty"]],
    ["makellos", ["faultless", "blameless"]],
    ["weiblich", ["feminine"]],
    ["feierlich", ["festive", "celebratory"]],
    ["wenig", ["few", "sparse"]],
    ["weniger", ["fewer", "less"]],
    ["eben", ["fewer", "less"]],
    ["dreckig", ["filthy", "dirty"]],
    ["fein", ["fine", "cultured"]],
    ["starr", ["fixed", "riged"]],
    ["flach", ["flat"]],
    ["platt", ["flat"]],
    ["flexibel", ["flexible"]],
    ["geblumt", ["flowered"]],
    ["flüssig", ["fluid"]],
    ["albern", ["foolish"]],
    ["ausländisch", ["foreign"]],
    ["fremd", ["foreign", "alien", "weird"]],
    ["quadratisch", ["form of a square"]],
    ["ehemalig", ["former"]],
    ["vorhersehbar", ["forseeable"]],
    ["zerbrechlich", ["fragile"]],
    ["umsonst", ["free"]],
    ["selbstständig", ["freelance"]],
    ["selbstständig", ["freelance", "independent"]],
    ["frisch", ["fresh"]],
    ["verdrossen", ["fretful", "bad tempered"]],
    ["freundlich", ["friendly", "pleasant"]],
    ["befreundet", ["friendly", "chummy"]],
    ["ausgelassen", ["frisky"]],
    ["fundamental", ["fundamental"]],
    ["grundlegend", ["fundamental", "basic"]],
    ["komisch", ["funny", "weird"]],
    ["möbliert", ["furnished"]],
    ["eingerichtet", ["furnished", "equipped"]],
    ["echt", ["genuine"]],
    ["riesengroß", ["giant sized"]],
    ["begabt", ["gifted"]],
    ["gigantisch", ["gigantic"]],
    ["finster", ["gloomy", "dark"]],
    ["vergoldet", ["gold plated"]],
    ["preiswert", ["good value"]],
    ["brav", ["good", "well behaved"]],
    ["graziös", ["graceful"]],
    ["großartig", ["great"]],
    ["gierig", ["greedy"]],
    ["schaurig", ["gruesome"]],
    ["schuldlos", ["guiltless"]],
    ["halb", ["half"]],
    ["halbtags", ["half days"]],
    ["gehämmert", ["hammered"]],
    ["glücklich", ["happy"]],
    ["fröhlich", ["happy", "cheerful"]],
    ["hart", ["hard"]],
    ["schwierig", ["hard", "difficult"]],
    ["gesund", ["healthy"]],
    ["hertzhaft", ["hearty"]],
    ["heidnisch", ["heathen", "pagan"]],
    ["paradiesisch", ["heavenly"]],
    ["göttlich", ["heavenly", "divine"]],
    ["schwer beschädigt", ["heavily damaged"]],
    ["hilfsbereit", ["helpful"]],
    ["hoch", ["high"]],
    ["hochgestochen", ["highfalutin'"]],
    ["geschichtlich", ["historical"]],
    ["obdachlos", ["homeless"]],
    ["homosexual", ["homosexual"]],
    ["ehrlich", ["honest"]],
    ["geehrt", ["honored", "esteemed"]],
    ["waagerecht", ["horizontal"]],
    ["schwul", ["humid"]],
    ["humorlos", ["humorless"]],
    ["eisig", ["icy"]],
    ["identifizierbar", ["identifiable"]],
    ["übel", ["ill", "sick"]],
    ["unvollständig", ["imcomplete", "unfinished"]],
    ["versunken", ["immersed", "sunken"]],
    ["ungeduldig", ["impatient"]],
    ["unhöflich", ["impolite"]],
    ["zentral", ["important", "central"]],
    ["unmöglich", ["impossible"]],
    ["eindrucksvoll", ["impressive"]],
    ["fit", ["in good shape"]],
    ["schließlich", ["eventual"]],
    ["unangemessen", ["inappropriate"]],
    ["inklusiv", ["inclusive"]],
    ["inkompetent", ["incompetent"]],
    ["belanglos", ["inconsequential", "insignificant"]],
    ["ungelegen", ["inconvenient"]],
    ["unbestimmten", ["indefinite"]],
    ["berauscht", ["inebriated"]],
    ["unabwendbar", ["inevitable"]],
    ["wahnsinnig", ["insane"]],
    ["gefühllos", ["insensitive"]],
    ["gering", ["insignificant", "small"]],
    ["versichert", ["insured"]],
    ["klug", ["intelligent"]],
    ["intelligent", ["intelligent"]],
    ["absichtlich", ["intentional", "purposeful"]],
    ["inwendig", ["interior", "indoor"]],
    ["international", ["international"]],
    ["interrogativ", ["interrogative"]],
    ["introvertiert", ["introverted"]],
    ["engagiert", ["involved", "occupied with"]],
    ["unverletzlich", ["invulnerable"]],
    ["gereizt", ["irritated", "irritable"]],
    ["gezackt", ["jagged"]],
    ["zackig", ["jagged"]],
    ["gezackt", ["jagged"]],
    ["jüdisch", ["jewish"]],
    ["beruflich", ["job related"]],
    ["lustig", ["jolly", "jovial"]],
    ["berechtigt", ["justifiable"]],
    ["gerechtfertigt", ["justified"]],
    ["lieb", ["kind", "nice"]],
    ["beschriftet", ["labelled"]],
    ["entlassen", ["laid off"]],
    ["lächerlich", ["laughable"]],
    ["faul", ["lazy"]],
    ["bleifrei", ["leadfree"]],
    ["links", ["left"]],
    ["rechtmäßig", ["legal", "lawful", "legitimate"]],
    ["sagenhaft", ["legendary"]],
    ["legendär", ["legendary"]],
    ["hell", ["light"]],
    ["sympathisch", ["likeable"]],
    ["munter", ["lively", "cheerful"]],
    ["spritzig", ["lively", "zippy"]],
    ["einsam", ["lonely"]],
    ["lang", ["long"]],
    ["locker", ["loose", "relaxed"]],
    ["verloren", ["lost"]],
    ["lieblich", ["lovely", "nice"]],
    ["cholesterinarm", ["low cholesterol"]],
    ["phlegmatisch", ["low energy"]],
    ["zinsgünstig", ["low interest rate"]],
    ["loyal", ["loyal"]],
    ["lauwarm", ["lukewarm"]],
    ["prunkvoll", ["magnificent"]],
    ["überschaubar", ["manageable"]],
    ["männlich", ["masculine"]],
    ["fleischlos", ["meatless"]],
    ["gnadenlos", ["merciless"]],
    ["modern", ["modern"]],
    ["reglos", ["motionless"]],
    ["leistungsbereit", ["motivated"]],
    ["multikulturell", ["multicultural"]],
    ["vielseitig", ["multipurpose", "multifunctional"]],
    ["muskulös", ["muscular"]],
    ["musikalisch", ["musical"]],
    ["nackt", ["naked"]],
    ["schmal", ["narrow", "slender", "slim"]],
    ["überregional", ["national", "nationwide"]],
    ["vernetzt", ["networked"]],
    ["nett", ["nice"]],
    ["vernickelt", ["nickel plated"]],
    ["üblich", ["normal", "common", "accepted"]],
    ["nostalgisch", ["nostalgic"]],
    ["interessiert", ["interested", "engaged"]],
    ["kinderfeindlich", ["not child-friendly"]],
    ["ungenügend", ["not enough"]],
    ["besessen", ["obsessed"]],
    ["eisern", ["of iron"]],
    ["amtlich", ["official"]],
    ["öffentlich", ["official", "public"]],
    ["alt", ["old"]],
    ["astrein", ["on the level", "tottally legit"]],
    ["einmalig", ["one time", "once in a lifetime"]],
    ["einzig", ["only"]],
    ["offen", ["open"]],
    ["optimistisch", ["optomistic"]],
    ["stimmig", ["ordered", "coherent"]],
    ["ordentlich", ["orderly"]],
    ["originell", ["original"]],
    ["jenseits", ["other side"]],
    ["altmodisch", ["outdated"]],
    ["außen", ["outside"]],
    ["überbucht", ["overbooked"]],
    ["überfüllt", ["overfilled"]],
    ["überbelastet", ["overstrained"]],
    ["abgepackt", ["packaged"]],
    ["blass", ["pale", "white", "completely white"]],
    ["parallel", ["parallel"]],
    ["teilmöbliert", ["partly furnished"]],
    ["erbärmlich", ["pathetic"]],
    ["geduldig", ["patient"]],
    ["geduldig", ["patient", "calm"]],
    ["gemustert", ["patterned"]],
    ["eigenartig", ["peculiar"]],
    ["pessimistisch", ["pessimistic"]],
    ["physisch", ["physical"]],
    ["angenehm", ["pleasant", "agreeable"]],
    ["sinnlos", ["pointless", "senseless"]],
    ["polnisch", ["polish"]],
    ["poliert", ["polished"]],
    ["höflich", ["polite"]],
    ["politisch", ["political"]],
    ["arm", ["poor"]],
    ["tragbar", ["portable"]],
    ["möglich", ["possible", "doable"]],
    ["bevorzugt", ["preferable", "preferred"]],
    ["schwanger", ["pregnant"]],
    ["vorzeigbar", ["presentable"]],
    ["gängig", ["prevalent"]],
    ["unbezahlbar", ["priceless"]],
    ["progressiv", ["progressive"]],
    ["verheißen", ["promised"]],
    ["geschirmt", ["protected fr sth"]],
    ["stolz", ["proud"]],
    ["staatlich", ["public", "government"]],
    ["pünktlich", ["punctual", "timely"]],
    ["rein", ["pure"]],
    ["geheuer", ["questionable"]],
    ["selten", ["rare"]],
    ["lieber", ["rather", "prefer"]],
    ["roh", ["raw"]],
    ["realistisch", ["realistic"]],
    ["vernünftig", ["reasonable"]],
    ["rechteckig", ["rectangular"]],
    ["raffiniert", ["refined"]],
    ["verwandt", ["related"]],
    ["ähnlich", ["related", "analogue"]],
    ["entspannt", ["relaxed"]],
    ["erleichtert", ["relieved"]],
    ["erforderlich", ["required"]],
    ["reserviert", ["reserved"]],
    ["zurückhaltend", ["reserved"]],
    ["verantwortlich", ["responsible"]],
    ["reich", ["rich"]],
    ["rechts", ["right"]],
    ["reif", ["ripe", "mature"]],
    ["gebrannt", ["roasted", "burnt"]],
    ["römisch", ["roman", "roman catholic"]],
    ["romantisch", ["romantic"]],
    ["rau", ["rough", "rugged"]],
    ["grob", ["rough", "uncultured"]],
    ["rund", ["round"]],
    ["sicher", ["safe", "sound", "secure"]],
    ["gesalzen", ["salted"]],
    ["salzig", ["salty"]],
    ["gleich", ["same", "similar"]],
    ["befriedigend", ["satisfactory"]],
    ["satt", ["satisfied", "full"]],
    ["wild", ["savage", "rugged", "unruly"]],
    ["ungepflegt", ["scruffy", "ungroomed"]],
    ["saison", ["seasonal"]],
    ["gewürzt", ["seasoned"]],
    ["heimlich", ["secret"]],
    ["geheim", ["secret"]],
    ["betrüblich", ["sehr traurig"]],
    ["selektiv", ["selective"]],
    ["selbstsicher", ["self confidence"]],
    ["selbstbewusst", ["self confident"]],
    ["aufregend", ["sensational", "exciting", "excited"]],
    ["sinnvoll", ["sensible"]],
    ["gefühlvoll", ["sensitive"]],
    ["einfühlsam", ["sensitive"]],
    ["empfindlich", ["sensitive"]],
    ["getrennt", ["separate"]],
    ["schattig", ["shadowy"]],
    ["klapprig", ["shaky"]],
    ["glänzend", ["shiny"]],
    ["blank", ["shiny"]],
    ["angeberisch", ["showy", "braggy"]],
    ["schüchtern", ["shy"]],
    ["lautlos", ["silent"]],
    ["blöd", ["silly", "stupid"]],
    ["einfach", ["simple"]],
    ["ledig", ["single", "unmarried"]],
    ["gelegen", ["situated", "located"]],
    ["umfangreich", ["sizeable", "a lot"]],
    ["klein", ["small", "short"]],
    ["geräuchert", ["smoked"]],
    ["glatt", ["smooth", "slick", "slippery"]],
    ["gesellig", ["sociable"]],
    ["kontaktfreudig", ["sociable"]],
    ["sozialistisch", ["socialist"]],
    ["weich", ["soft,"]],
    ["ausverkauft", ["sold out"]],
    ["eher", ["sooner"]],
    ["sauer", ["sour"]],
    ["besonderer", ["special", "particular"]],
    ["scharf", ["spicy", "sharp"]],
    ["geistig", ["spiritual"]],
    ["gepunktet", ["spotted"]],
    ["federnd", ["springy"]],
    ["stationär", ["stationary"]],
    ["stehend", ["stationary", "upright"]],
    ["steil", ["steep"]],
    ["steif", ["stiff"]],
    ["noch", ["still", "still not", "not yet"]],
    ["gebeugt", ["stooped"]],
    ["geradeaus", ["straight ahead"]],
    ["streng", ["strict", "stern"]],
    ["gestreift", ["striped"]],
    ["modisch", ["stylish"]],
    ["untertan", ["subjected"]],
    ["genügend", ["sufficient"]],
    ["vortrefflich", ["superb"]],
    ["ausgezeichnet", ["superior"]],
    ["übernatürlich", ["supernatural"]],
    ["geschmeidig", ["flexible", "pliable"]],
    ["süß", ["sweet"]],
    ["symbolisch", ["symbolic"]],
    ["symptomatisch", ["symptomatic"]],
    ["zahm", ["tame"]],
    ["verworren", ["tangled"]],
    ["gezielt", ["targeted", "purpose directed"]],
    ["technisch", ["technical"]],
    ["mäßig", ["temperate"]],
    ["verlockend", ["tempting", "desirable"]],
    ["zart", ["tender", "delicate"]],
    ["gespannt", ["tense", "tight"]],
    ["fürchterlich", ["terrible", "awful"]],
    ["theoretisch", ["theoretical"]],
    ["sparsam", ["thrifty", "economical"]],
    ["kitzlig", ["ticklish"]],
    ["gefliest", ["tiled"]],
    ["winzig", ["tiny"]],
    ["niedlich", ["cute", "inexperienced"]],
    ["beschwipst", ["tipsy"]],
    ["lästig", ["tiresome"]],
    ["samt", ["together with"]],
    ["trainiert", ["trained"]],
    ["transparent", ["transparent"]],
    ["durchsichtig", ["transparent"]],
    ["dreieckig", ["triangular"]],
    ["vertrauenswürdig", ["trustworthy"]],
    ["türkis", ["turquoise"]],
    ["typisch", ["typical"]],
    ["hässlich", ["ugly"]],
    ["unerkannt", ["unacceptible", "unaccepted"]],
    ["unerträglich", ["unbearable"]],
    ["unglaublich", ["unbelievable"]],
    ["unfähig", ["uncapable"]],
    ["fraglich", ["uncertain", "doubtful"]],
    ["ungehindert", ["unchecked"]],
    ["unkreativ", ["uncreative"]],
    ["unzuverlässig", ["undependable"]],
    ["undiszipliniert", ["undisciplined"]],
    ["ungeteilt", ["undivided"]],
    ["arbeitslos", ["unemployed"]],
    ["uneben", ["uneven"]],
    ["unerwartet", ["unexpected"]],
    ["ungünstig", ["unfavorable"]],
    ["unvergesslich", ["unforgettable"]],
    ["unfreundlich", ["unfriendly"]],
    ["unauffällig", ["unimpressive"]],
    ["unverletzt", ["uninjured"]],
    ["unabsichtlich", ["unintentional"]],
    ["unnötig", ["unnecessary"]],
    ["unordentlich", ["unorderly"]],
    ["unvernünftig", ["unreasonable"]],
    ["widerspenstig", ["unruly", "stubborn"]],
    ["unsicher", ["unsure"]],
    ["unpünktlich", ["untimely", "not punctual"]],
    ["unantastbar", ["untouchable", "inviolable"]],
    ["unberührt", ["untouched", "pure"]],
    ["untrainiert", ["untrained"]],
    ["ungewöhnlich", ["unusual"]],
    ["gepolstert", ["upholstered"]],
    ["unterschiedlich", ["variable"]],
    ["vegetarisch", ["vegetarian"]],
    ["ehrwürdig", ["venerable", "dignified"]],
    ["senkrecht", ["vertical"]],
    ["allerbester", ["very best"]],
    ["gewaltig", ["violent"]],
    ["virtuell", ["virtual"]],
    ["nichtig", ["void", "futile"]],
    ["wasserdicht", ["watertight"]],
    ["gepflegt", ["well groomed"]],
    ["günstig", ["well priced", "good value"]],
    ["nass", ["wet"]],
    ["weit", ["wide"]],
    ["putzmunter", ["wide awake"]],
    ["weit", ["wide", "far"]],
    ["windig", ["windy"]],
    ["verwelkt", ["withered"]],
    ["wertlos", ["worthless"]]
];