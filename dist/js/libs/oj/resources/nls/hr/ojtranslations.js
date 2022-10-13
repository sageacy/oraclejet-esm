define({"oj-message":{fatal:"Vrlo ozbiljno",error:"Pogreška",warning:"Upozorenje",info:"Podaci",confirmation:"Potvrda","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"Vrijednost nije očekivanog formata.",detail:"Unesite vrijednost u očekivanom formatu.","plural-separator":", ",hint:{summary:"Primjer: {exampleValue}",detail:"Unesite vrijednost u ovom formatu: '{exampleValue}'.","detail-plural":"Unesite vrijednost u ovim formatima: '{exampleValue}'."},optionHint:{detail:"Prihvaćena vrijednost za opciju '{propertyName}' glasi '{propertyValueValid}'.","detail-plural":"Prihvaćene vrijednosti za opciju '{propertyName}' glase '{propertyValueValid}'."},optionTypesMismatch:{summary:"Vrijednost za opciju '{requiredPropertyName}' obavezna je kad je opcija '{propertyName}' postavljena na '{propertyValue}'."},optionTypeInvalid:{summary:"Za opciju '{propertyName}' nije navedena vrijednost koja pripada očekivanoj vrsti."},optionOutOfRange:{summary:"Vrijednost {propertyValue} nalazi se izvan raspona za opciju '{propertyName}'."},optionValueInvalid:{summary:"Za opciju '{propertyName}' navedena je vrijednost '{propertyValue}' koja nije valjana."},number:{decimalFormatMismatch:{summary:"Navedena vrijednost nije u očekivanom numeričkom formatu."},shortLongUnsupportedParse:{summary:"'short' i 'long' nisu podržani za analizu konvertera.",detail:"Komponentu promijenite na readonly. readonly polja ne pozivaju funkciju analize u konverteru."},currencyFormatMismatch:{summary:"Navedena vrijednost nije u očekivanom formatu valute."},percentFormatMismatch:{summary:"Navedena vrijednost nije u očekivanom formatu postotka."},invalidNumberFormat:{summary:"Navedena vrijednost nije valjani broj.",detail:"Navedite valjani broj."}},color:{invalidFormat:{summary:"Format boje nije valjan.",detail:"Specifikacija opcije za format boje nije valjana."},invalidSyntax:{summary:"Specifikacija boje nije valjana.",detail:"Unesite vrijednost boje koja je u skladu s CSS3 standardom."}},datetime:{datetimeOutOfRange:{summary:"Vrijednost '{value}' izvan je raspona za '{propertyName}'.",detail:"Unesite vrijednost između '{minValue}' i '{maxValue}'.",hour:"h",minute:"min",second:"s",millisec:"ms",month:"mj.",day:"dan",year:"god.","month name":"naziv mjeseca",weekday:"radni dan"},dateFormatMismatch:{summary:"Navedena vrijednost nije u očekivanom formatu datuma."},invalidTimeZoneID:{summary:"Navedeni ID vremenske zone {timeZoneID} nije valjan."},nonExistingTime:{summary:"Vrijeme unosa ne postoji jer se nalazi tijekom prijelaza na ljetno računanje vremena."},missingTimeZoneData:{summary:"Nedostaju podaci za TimeZon. Pozovite obavezni 'ojs/ojtimezonedata' kako biste učitali podatke za TimeZone."},timeFormatMismatch:{summary:"Navedena vrijednost nije u očekivanom vremenskom formatu."},datetimeFormatMismatch:{summary:"Navedena vrijednost nije u očekivanom formatu za datum i vrijeme."},dateToWeekdayMismatch:{summary:"Dan '{date}' ne pada na '{weekday}'.",detail:"Unesite radni dan koji odgovara datumu."},invalidISOString:{invalidRangeSummary:"Vrijednost '{value}' nalazi se izvan raspona za polje '{propertyName}' u ISO 8601 nizu '{isoStr}'.",summary:"Navedeni '{isoStr}' nije valjani ISO 8601 niz.",detail:"Navedite valjani ISO 8601 niz."}}},"oj-validator":{length:{hint:{min:"Unesite {min} ili više znakova.",max:"Unesite {max} ili manje znakova.",inRange:"Unesite {min} do {max} znakova.",exact:"Unesite sljedeći broj znakova: {length}."},messageDetail:{tooShort:"Unesite {min} ili više znakova.",tooLong:"Nemojte unijeti više od {max} znakova."},messageSummary:{tooShort:"Ima premalo znakova.",tooLong:"Uneseno je previše znakova."}},range:{number:{hint:{min:"Unesite broj koji je jednak {min} ili veći.",max:"Unesite broj koji je jednak {max} ili manji.",inRange:"Unesite broj između {min} i {max}.",exact:"Unesite broj {num}."},messageDetail:{rangeUnderflow:"Unesite {min} ili veći broj.",rangeOverflow:"Unesite {max} ili manji broj.",exact:"Unesite broj {num}."},messageSummary:{rangeUnderflow:"Broj je premali.",rangeOverflow:"Broj je prevelik."}},datetime:{hint:{min:"Kao datum i vrijeme unesite {min} ili kasnije.",max:"Kao datum i vrijeme unesite {max} ili ranije.",inRange:"Unesite datum i vrijeme između {min} i {max}."},messageDetail:{rangeUnderflow:"Kao datum unesite {min} ili kasniji datum.",rangeOverflow:"Kao datum unesite {max} ili raniji datum."},messageSummary:{rangeUnderflow:"Datum i vrijeme raniji su od minimalnog datuma i vremena.",rangeOverflow:"Datum i vrijeme kasniji su od maksimalnog datuma i vremena."}},date:{hint:{min:"Kao datum unesite {min} ili kasniji datum.",max:"Kao datum unesite {max} ili raniji datum.",inRange:"Unesite datum između {min} i {max}."},messageDetail:{rangeUnderflow:"Kao datum unesite {min} ili kasniji datum.",rangeOverflow:"Kao datum unesite {max} ili raniji datum."},messageSummary:{rangeUnderflow:"Datum je raniji od minimalnog datuma.",rangeOverflow:"Datum je kasniji od maksimalnog datuma."}},time:{hint:{min:"Kao vrijeme unesite {min} ili kasnije vrijeme.",max:"Kao vrijeme unesite {max} ili ranije vrijeme.",inRange:"Unesite vrijeme između {min} i {max}."},messageDetail:{rangeUnderflow:"Kao vrijeme unesite {min} ili kasnije vrijeme.",rangeOverflow:"Kao vrijeme unesite {max} ili ranije vrijeme."},messageSummary:{rangeUnderflow:"Vrijeme je ranije od minimalnog vremena.",rangeOverflow:"Vrijeme je kasnije od maksimalnog vremena."}}},restriction:{date:{messageSummary:"Datum {value} odnosi se na onemogućeni unos.",messageDetail:"Odabrani datum nije dostupan. Pokušajte s drugim datumom."}},regExp:{summary:"Format nije točan.",detail:"Unesite dopuštene vrijednosti opisane u ovom regularnom izrazu: '{pattern}'."},required:{summary:"Vrijednost je obavezna.",detail:"Unesite vrijednost."}},"oj-ojEditableValue":{loading:"Učitava se",requiredText:"Obavezno",helpSourceText:"Saznajte više..."},"oj-ojInputDate":{done:"Gotovo",cancel:"Odustani",time:"Vrijeme",prevText:"Prethodno",nextText:"Sljedeće",currentText:"Danas",weekHeader:"Tj.",tooltipCalendar:"Odabir datuma.",tooltipCalendarTime:"Odaberite datum i vrijeme.",tooltipCalendarDisabled:"Odabir datuma onemogućen.",tooltipCalendarTimeDisabled:"Odabir datuma i vremena onemogućen.",picker:"Alat za odabir",weekText:"Tjedan",datePicker:"Birač datuma",inputHelp:"Za pristup kalendaru pritisnite tipku prema dolje ili tipku prema gore.",inputHelpBoth:"Pritisnite tipku prema dolje ili gore kako biste pristupili kalendaru te Shift + tipku prema dolje ili gore za pristup padajućem izborniku za vrijeme.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{cancelText:"Odustani",okText:"U redu",currentTimeText:"Sad",hourWheelLabel:"Sat",minuteWheelLabel:"Minuta",ampmWheelLabel:"AMPM",tooltipTime:"Odabir vremena.",tooltipTimeDisabled:"Odabir vremena onemogućen.",inputHelp:"Pritisnite tipku za dolje ili gore kako biste pristupili padajućem izborniku za vrijeme.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{required:{hint:"",messageSummary:"",messageDetail:""},regexp:{messageSummary:"",messageDetail:""},accessibleMaxLengthExceeded:"Prekoračena je maksimalna duljina {len}.",accessibleMaxLengthRemaining:"Preostalo znakova: {chars}."},"oj-ojInputPassword":{regexp:{messageDetail:"Vrijednost mora odgovarati sljedećem uzorku: '{pattern}'."},accessibleShowPassword:"Prikaži lozinku.",accessibleHidePassword:"Sakrij lozinku."},"oj-ojFilmStrip":{labelAccFilmStrip:"Prikazuje se stranica {pageIndex} od {pageCount}",labelAccArrowNextPage:"Odaberite Sljedeće kako bi se prikazala sljedeća stranica",labelAccArrowPreviousPage:"Odaberite Prethodno kako bi se prikazala prethodna stranica",tipArrowNextPage:"Sljedeće",tipArrowPreviousPage:"Prethodno"},"oj-ojDataGrid":{accessibleSortAscending:"{id} sortirano uzlazno",accessibleSortDescending:"{id} sortirano silazno",accessibleSortable:"{id} za sortiranje",accessibleActionableMode:"Prijeđite na način za akcije.",accessibleNavigationMode:"Prijeđite na način za navigaciju, pritisnite F2 kako biste prešli na način za uređivanje ili akcije.",accessibleEditableMode:"Prijeđite na način za uređivanje, pritisnite Escape kako biste izašli iz podatkovne rešetke.",accessibleSummaryExact:"Ovo je podatkovna rešetka s {rownum} stupaca i {colnum} redaka",accessibleSummaryEstimate:"Ovo je podatkovna rešetka s nepoznatim brojem redaka i stupaca",accessibleSummaryExpanded:"Trenutačno je proširen sljedeći broj redaka: {num}",accessibleRowExpanded:"Redak proširen",accessibleExpanded:"Prošireno",accessibleRowCollapsed:"Redak sakriven",accessibleCollapsed:"Sakriveno",accessibleRowSelected:"Odabran redak {row}",accessibleColumnSelected:"Odabran stupac {column}",accessibleStateSelected:"odabrano",accessibleMultiCellSelected:"Odabran sljedeći broj ćelija: {num}",accessibleColumnSpanContext:"{extent} široko",accessibleRowSpanContext:"{extent} visoko",accessibleRowContext:"Redak {index}",accessibleColumnContext:"Stupac {index}",accessibleRowHeaderContext:"Zaglavlje retka {index}",accessibleColumnHeaderContext:"Zaglavlje stupca {index}",accessibleRowEndHeaderContext:"Zaglavlje kraja retka {index}",accessibleColumnEndHeaderContext:"Zaglavlje kraja stupca {index}",accessibleRowHeaderLabelContext:"Oznaka na razini retka {level}",accessibleColumnHeaderLabelContext:"Oznaka na razini stupca {level}",accessibleRowEndHeaderLabelContext:"Oznaka na razini kraja retka {level}",accessibleColumnEndHeaderLabelContext:"Oznaka zaglavlja na razini kraja stupca {level}",accessibleLevelContext:"Oznaka {level}",accessibleRangeSelectModeOn:"Uključen način za dodavanje odabranog raspona ćelija.",accessibleRangeSelectModeOff:"Isključen način za dodavanje odabranog raspona ćelija.",accessibleFirstRow:"Došli ste do prvog retka",accessibleLastRow:"Došli ste do zadnjeg retka.",accessibleFirstColumn:"Došli ste do prvog stupca",accessibleLastColumn:"Došli ste do zadnjeg stupca.",accessibleSelectionAffordanceTop:"Pokazivač gornjeg odabira.",accessibleSelectionAffordanceBottom:"Pokazivač donjeg odabira.",msgFetchingData:"Dohvat podataka...",msgNoData:"Nema stavki za prikaz.",labelResize:"Promijeni veličinu",labelResizeWidth:"Promijeni širinu",labelResizeHeight:"Promijeni visinu",labelSortAsc:"Sortiraj uzlazno",labelSortDsc:"Sortiraj silazno",labelSortRow:"Poredaj redak ",labelSortRowAsc:"Poredaj redak uzlazno",labelSortRowDsc:"Poredaj redak silazno",labelSortCol:"Poredaj stupac",labelSortColAsc:"Poredaj stupac uzlazno",labelSortColDsc:"Poredaj stupac silazno",labelCut:"Izreži",labelPaste:"Zalijepi",labelCutCells:"Izreži",labelPasteCells:"Zalijepi",labelCopyCells:"Kopiraj",labelAutoFill:"Automatsko popunjavanje",labelEnableNonContiguous:"Omogući odabir neuzastupnih vrijednosti",labelDisableNonContiguous:"Onemogući odabir neuzastupnih vrijednosti",labelResizeDialogSubmit:"U redu",labelResizeDialogCancel:"Odustani",accessibleContainsControls:"Sadrži kontrole",labelSelectMultiple:"Odabir više ćelija",labelResizeDialogApply:"Primijeni",labelResizeFitToContent:"Prilagodba veličine",columnWidth:"Širina u pikselima",rowHeight:"Visina u pikselima",labelResizeColumn:"Promijeni veličinu stupca",labelResizeRow:"Prilagodba veličine retka",resizeColumnDialog:"Promijeni veličinu stupca",resizeRowDialog:"Prilagodba veličine retka",collapsedText:"Sakrij",expandedText:"Proširi",tooltipRequired:"Obavezno"},"oj-ojRowExpander":{accessibleLevelDescription:"Razina {level}",accessibleRowDescription:"Razina {level}, redak {num} od {total}",accessibleRowExpanded:"Redak istekao",accessibleRowCollapsed:"Redak sakriven",accessibleStateExpanded:"prošireno",accessibleStateCollapsed:"sakriveno"},"oj-ojStreamList":{msgFetchingData:"Dohvat podataka..."},"oj-ojListView":{msgFetchingData:"Dohvat podataka...",msgNoData:"Nema stavki za prikaz.",msgItemsAppended:"Do kraja proširen sljedeći broj stavki: {count}.",msgFetchCompleted:"Dohvaćene su sve stavke.",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",accessibleReorderTouchInstructionText:"Dvaput pritisnite i zadrite. Pričekajte zvuk, a zatim povucite u raspon.",accessibleReorderBeforeItem:"Prije {item}",accessibleReorderAfterItem:"Nakon {item}",accessibleReorderInsideItem:"U {item}",accessibleNavigateSkipItems:"Preskače se sljedeći broj stavki: {numSkip}",labelCut:"Izreži",labelCopy:"Kopiraj",labelPaste:"Zalijepi",labelPasteBefore:"Zalijepi ispred",labelPasteAfter:"Zalijepi nakon"},"oj-ojWaterfallLayout":{msgFetchingData:"Dohvat podataka..."},"oj-_ojLabel":{tooltipHelp:"Pomoć",tooltipRequired:"Obavezno"},"oj-ojLabel":{tooltipHelp:"Pomoć",tooltipRequired:"Obavezno"},"oj-ojInputNumber":{required:{hint:"",messageSummary:"",messageDetail:""},numberRange:{hint:{min:"",max:"",inRange:"",exact:""},messageDetail:{rangeUnderflow:"",rangeOverflow:"",exact:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Smanjenje",tooltipIncrement:"Povećanje"},"oj-ojTable":{accessibleAddRow:"Unesite podatke za dodavanje novog retka.",accessibleColumnContext:"Stupac {index}",accessibleColumnFooterContext:"Podnožje stupca {index}",accessibleColumnHeaderContext:"Zaglavlje stupca {index}",accessibleContainsControls:"Sadrži kontrole",accessibleColumnsSpan:"Obuhvaća sljedeći broj stupaca: {count}",accessibleRowContext:"Redak {index}",accessibleSortable:"{id} za sortiranje",accessibleSortAscending:"{id} sortirano uzlazno",accessibleSortDescending:"{id} sortirano silazno",accessibleStateSelected:"odabrano",accessibleStateUnselected:"odabir poništen",accessibleSummaryEstimate:"Tablica sa sljedećim brojem stupaca: {colnum} i više od sljedećeg broja redaka: {rownum}",accessibleSummaryExact:"Tablica sa sljedećim brojem stupaca: {colnum} i redaka: {rownum}",labelAccSelectionAffordanceTop:"Pokazivač gornjeg odabira",labelAccSelectionAffordanceBottom:"Pokazivač donjeg odabira",labelEnableNonContiguousSelection:"Omogući odabir neuzastupnih vrijednosti",labelDisableNonContiguousSelection:"Onemogući odabir neuzastupnih vrijednosti",labelResize:"Promijeni veličinu",labelResizeColumn:"Promijeni veličinu stupca",labelResizePopupSubmit:"U redu",labelResizePopupCancel:"Odustani",labelResizePopupSpinner:"Promijeni veličinu stupca",labelResizeColumnDialog:"Promijeni veličinu stupca",labelColumnWidth:"Širina u pikselima",labelResizeDialogApply:"Primijeni",labelSelectRow:"Odaberi redak",labelSelectAllRows:"Odabir svih redaka",labelEditRow:"Uređivanje retka",labelSelectAndEditRow:"Odaberite i uredite redak",labelSelectColumn:"Odaberi stupac",labelSort:"Poredaj",labelSortAsc:"Sortiraj uzlazno",labelSortDsc:"Sortiraj silazno",msgFetchingData:"Dohvat podataka...",msgNoData:"Nema podataka za prikaz.",msgInitializing:"Inicijalizira se...",msgColumnResizeWidthValidation:"Vrijednost za širinu mora biti cijeli broj.",msgScrollPolicyMaxCountSummary:"Prekoračen je maksimalan broj redaka za pomicanje po tablici.",msgScrollPolicyMaxCountDetail:"Pokušajte ponovo učitati s manjim skupom podataka.",msgStatusSortAscending:"{0} sortirano uzlaznim redoslijedom.",msgStatusSortDescending:"{0} sortirano silaznim redoslijedom.",tooltipRequired:"Obavezno"},"oj-ojTabs":{labelCut:"Izreži",labelPasteBefore:"Zalijepi ispred",labelPasteAfter:"Zalijepi nakon",labelRemove:"Ukloni ",labelReorder:"Ponovo poredaj",removeCueText:"Može se ukloniti"},"oj-ojCheckboxset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:"Odabir vrijednosti."}},"oj-ojRadioset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:"Odabir vrijednosti."}},"oj-ojSelect":{required:{hint:"",messageSummary:"",messageDetail:"Odabir vrijednosti."},searchField:"Polje za pretraživanje",noMatchesFound:"Nije pronađen nijedan rezultat",noMoreResults:"Nema više rezultata",oneMatchesFound:"Pronađen jedan rezultat",moreMatchesFound:"Pronađeno rezultata: {num}",filterFurther:"Dostupno još rezultata, dodatno filtrirajte."},"oj-ojSwitch":{SwitchON:"Uključeno",SwitchOFF:"Isključeno"},"oj-ojCombobox":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Nije pronađen nijedan rezultat",noMoreResults:"Nema više rezultata",oneMatchesFound:"Pronađen jedan rezultat",moreMatchesFound:"Pronađeni rezultati: {num}",filterFurther:"Dostupno još rezultata, dodatno filtrirajte."},"oj-ojSelectSingle":{required:{hint:"",messageSummary:"",messageDetail:"Odabir vrijednosti."},noMatchesFound:"Nije pronađen nijedan rezultat",oneMatchFound:"Pronađen jedan rezultat",multipleMatchesFound:"Pronađeno rezultata: {num}",nOrMoreMatchesFound:"Pronađeno {num} ili više rezultata",cancel:"Odustani",labelAccOpenDropdown:"proširi",labelAccClearValue:"očisti vrijednost",noResultsLine1:"Rezultati nisu pronađeni",noResultsLine2:"Nismo pronašli ništa što odgovara vašem pretraživanju."},"oj-ojInputSearch2":{cancel:"Odustani",noSuggestionsFound:"Nije pronađen nijedan prijedlog"},"oj-ojInputSearch":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Nije pronađen nijedan rezultat",oneMatchesFound:"Pronađen jedan rezultat",moreMatchesFound:"Pronađeno rezultata: {num}"},"oj-ojTreeView":{treeViewSelectorAria:"TreeView alat za odabir {rowKey}",retrievingDataAria:"Dohvat podataka za čvor: {nodeText}",receivedDataAria:"Primljeni podaci za čvor: {nodeText}"},"oj-ojTree":{stateLoading:"Učitava se...",labelNewNode:"Novi čvor",labelMultiSelection:"Višestruki odabir",labelEdit:"Uredi",labelCreate:"Stvori",labelCut:"Izreži",labelCopy:"Kopiraj",labelPaste:"Zalijepi",labelPasteAfter:"Zalijepi nakon",labelPasteBefore:"Zalijepi ispred",labelRemove:"Ukloni",labelRename:"Preimenuj",labelNoData:"Nema podataka"},"oj-ojPagingControl":{labelAccPaging:"Paginacija",labelAccPageNumber:"Učitan sadržaj stranice {pageNum}",labelAccNavFirstPage:"Prva stranica",labelAccNavLastPage:"Zadnja stranica",labelAccNavNextPage:"Sljedeća stranica",labelAccNavPreviousPage:"Prethodna stranica",labelAccNavPage:"Stranica",labelLoadMore:"Prikaži više...",labelLoadMoreMaxRows:"Dosegnuto maksimalno ograničenje od {maxRows} redaka",labelNavInputPage:"Stranica",labelNavInputPageMax:"od {pageMax}",fullMsgItemRange:"{pageFrom}-{pageTo} od {pageMax} stavki",fullMsgItemRangeAtLeast:"{pageFrom}-{pageTo} od najmanje {pageMax} stavki",fullMsgItemRangeApprox:"{pageFrom}-{pageTo} od približno {pageMax} stavki",msgItemRangeNoTotal:"{pageFrom}-{pageTo} stavki",fullMsgItem:"{pageTo} od {pageMax} stavki",fullMsgItemAtLeast:"{pageTo} od najmanje {pageMax} stavki",fullMsgItemApprox:"{pageTo} od približno {pageMax} stavki",msgItemNoTotal:"Broj stavki: {pageTo}",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"od",msgItemRangeOfAtLeast:"od najmanje",msgItemRangeOfApprox:"od približno",msgItemRangeItems:"stavki",tipNavInputPage:"Idi na stranicu",tipNavPageLink:"Idi na stranicu {pageNum}",tipNavNextPage:"Sljedeće",tipNavPreviousPage:"Prethodno",tipNavFirstPage:"Prvo",tipNavLastPage:"Zadnje",pageInvalid:{summary:"Unesena vrijednost stranice nije valjana.",detail:"Unesite vrijednost veću od 0."},maxPageLinksInvalid:{summary:"Vrijednost za maxPageLinks nije valjana.",detail:"Unesite vrijednost veću od 4."}},"oj-ojMasonryLayout":{labelCut:"Izreži",labelPasteBefore:"Zalijepi ispred",labelPasteAfter:"Zalijepi nakon"},"oj-panel":{labelAccButtonExpand:"Proširi",labelAccButtonCollapse:"Sakrij",labelAccButtonRemove:"Ukloni",labelAccFlipForward:"Prebaci naprijed",labelAccFlipBack:"Prebaci natrag",tipDragToReorder:"Povucite za promjenu redoslijeda",labelAccDragToReorder:"Povucite za promjenu redoslijeda, dostupan kontekstni izbornik"},"oj-ojChart":{labelDefaultGroupName:"Grupa {0}",labelSeries:"Serija",labelGroup:"Grupa",labelDate:"Datum",labelValue:"Vrijednost ",labelTargetValue:"Odredište",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Postotak",labelLow:"Donja vrijednost",labelHigh:"Gornja vrijednost",labelOpen:"Otvori",labelClose:"Zatvori",labelVolume:"Kapacitet",labelQ1:"Q1",labelQ2:"Q2",labelQ3:"Q3",labelMin:"Min.",labelMax:"Maks.",labelOther:"Ostalo",tooltipPan:"Pomicanje",tooltipSelect:"Odabir određenog područja",tooltipZoom:"Zumiranje određenog područja",componentName:"Grafikon"},"oj-dvtBaseGauge":{componentName:"Mjerač"},"oj-ojDiagram":{promotedLink:"{0} veza",promotedLinks:"Broj veza: {0}",promotedLinkAriaDesc:"Neizravno",componentName:"Dijagram"},"oj-ojGantt":{componentName:"Gantt",accessibleDurationDays:"{0} dana",accessibleDurationHours:"{0} h",accessibleTaskInfo:"Vrijeme početka je {0}, vrijeme završetka je {1}, trajanje je {2}",accessibleMilestoneInfo:"Vrijeme je {0}",accessibleRowInfo:"Redak {0}",accessibleTaskTypeMilestone:"Ključni datum",accessibleTaskTypeSummary:"Sažetak",accessiblePredecessorInfo:"Broj prethodnika: {0}",accessibleSuccessorInfo:"Broj nasljednika: {0}",accessibleDependencyInfo:"Vrsta ovisnosti {0}, povezuje {1} s {2}",startStartDependencyAriaDesc:"od početka do početka",startFinishDependencyAriaDesc:"od početka do završetka",finishStartDependencyAriaDesc:"od završetka do početka",finishFinishDependencyAriaDesc:"od završetka do završetka",tooltipZoomIn:"Povećaj prikaz",tooltipZoomOut:"Smanji prikaz",labelLevel:"Razina",labelRow:"Redak",labelStart:"Početak",labelEnd:"Završetak",labelDate:"Datum",labelBaselineStart:"Odobreni početak",labelBaselineEnd:"Odobreni završetak",labelBaselineDate:"Odobreni datum",labelDowntimeStart:"Početak neaktivnosti",labelDowntimeEnd:"Kraj neaktivnosti",labelOvertimeStart:"Početak prekovremenog rada",labelOvertimeEnd:"Kraj prekovremenog rada",labelAttribute:"Atribut",labelLabel:"Oznaka",labelProgress:"Napredak",labelMoveBy:"Pomakni za",labelResizeBy:"Promijeni veličinu za",taskMoveInitiated:"Pokrenuto premještanje zadatka",taskResizeEndInitiated:"Pokrenut završetak promjene veličine zadatka",taskResizeStartInitiated:"Pokrenut početak promjene veličine zadatka",taskMoveSelectionInfo:"Odabrano još {0}",taskResizeSelectionInfo:"Odabrano još {0}",taskMoveInitiatedInstruction:"Za pomicanje upotrijebite tipke sa strelicama",taskResizeInitiatedInstruction:"Za promjenu veličine upotrijebite tipke za strelicama",taskMoveFinalized:"Dovršeno premještanje zadatka",taskResizeFinalized:"Dovršena promjena veličine zadatka",taskMoveCancelled:"Poništeno premještanje zadatka",taskResizeCancelled:"Poništena promjena veličine zadatka",taskResizeStartHandle:"Pokazivač početka promjene veličine zadatka",taskResizeEndHandle:"Pokazivač završetka promjene veličine zadatka"},"oj-ojLegend":{componentName:"Kazalo",tooltipExpand:"Proširi",tooltipCollapse:"Sakrij"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Ostalo",labelGroup:"Grupa",labelSize:"Veličina",labelAdditionalData:"Dodatni podaci",componentName:"Okvir {0}"},"oj-ojPictoChart":{componentName:"Slikovni grafikon"},"oj-ojSparkChart":{componentName:"Grafikon"},"oj-ojSunburst":{labelColor:"Boja",labelSize:"Veličina",tooltipExpand:"Proširi",tooltipCollapse:"Sakrij",componentName:"Kružno, raspršeno"},"oj-ojTagCloud":{componentName:"Oblak za oznake"},"oj-ojThematicMap":{componentName:"Tematska karta",areasRegion:"Područja",linksRegion:"Veze",markersRegion:"Markeri"},"oj-ojTimeAxis":{componentName:"Vremenska os"},"oj-ojTimeline":{componentName:"Vremenska crta",accessibleItemDesc:"Opis glasi {0}.",accessibleItemEnd:"Vrijeme završetka je {0}.",accessibleItemStart:"Vrijeme početka je {0}.",accessibleItemTitle:"Naslov glasi {0}.",labelSeries:"Serija",tooltipZoomIn:"Povećaj prikaz",tooltipZoomOut:"Smanji prikaz",labelStart:"Početak",labelEnd:"Završetak",labelAccNavNextPage:"Sljedeća stranica",labelAccNavPreviousPage:"Prethodna stranica",tipArrowNextPage:"Sljedeće",tipArrowPreviousPage:"Prethodno",navArrowDisabledState:"Onemogućeno",labelDate:"Datum",labelTitle:"Naslov ",labelDescription:"Opis",labelMoveBy:"Pomakni za",labelResizeBy:"Promijeni veličinu za",itemMoveInitiated:"Pokrenuto premještanje stavke",itemResizeEndInitiated:"Pokrenut završetak promjene veličine stavke",itemResizeStartInitiated:"Pokrenut početak promjene veličine stavke",itemMoveSelectionInfo:"Odabrano još {0}",itemResizeSelectionInfo:"Odabrano još {0}",itemMoveInitiatedInstruction:"Za pomicanje upotrijebite tipke sa strelicama",itemResizeInitiatedInstruction:"Za promjenu veličine upotrijebite tipke za strelicama",itemMoveFinalized:"Dovršeno premještanje stavke",itemResizeFinalized:"Dovršena promjena veličine stavke",itemMoveCancelled:"Poništeno premještanje stavke",itemResizeCancelled:"Poništena promjena veličine stavke",itemResizeStartHandle:"Pokazivač početka promjene veličine stavke",itemResizeEndHandle:"Pokazivač završetka promjene veličine stavke"},"oj-ojTreemap":{labelColor:"Boja",labelSize:"Veličina",tooltipIsolate:"Izoliraj",tooltipRestore:"Vrati",componentName:"Stablo"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"B",labelScalingSuffixTrillion:"T",labelScalingSuffixQuadrillion:"Q",labelInvalidData:"Podaci nisu valjani",labelNoData:"Nema podataka za prikaz",labelClearSelection:"Očisti odabrano",labelDataVisualization:"Data Visualization",stateSelected:"Odabrano",stateUnselected:"Nije odabrano",stateMaximized:"Povećano",stateMinimized:"Minimizirano",stateExpanded:"Prošireno",stateCollapsed:"Sakriveno",stateIsolated:"Izolirano",stateHidden:"Sakriveno",stateVisible:"Vidljivo",stateDrillable:"Može se analizirati",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} od {1}",accessibleContainsControls:"Sadrži kontrole"},"oj-ojNavigationList":{defaultRootLabel:"Navigacijski popis",hierMenuBtnLabel:"Gumb hijerarhijskog izbornika",selectedLabel:"odabrano",previousIcon:"Prethodno",msgFetchingData:"Dohvat podataka...",msgNoData:"Nema stavki za prikaz.",overflowItemLabel:"Više",accessibleReorderTouchInstructionText:"Dvaput pritisnite i zadržite. Pričekajte zvuk, a zatim povucite u raspon.",accessibleReorderBeforeItem:"Prije {item}",accessibleReorderAfterItem:"Nakon {item}",labelCut:"Izreži",labelPasteBefore:"Zalijepi ispred",labelPasteAfter:"Zalijepi nakon",labelRemove:"Ukloni",removeCueText:"Može se ukloniti"},"oj-ojSlider":{noValue:"ojSlider nema vrijednost",maxMin:"Maksimum ne smije biti manji od minimuma ni jednak minimumu",startEnd:"value.start ne smije biti veće od value.end",valueRange:"Vrijednost mora biti unutar raspona između minimuma i maksimuma",optionNum:"Opcija {option} nije broj",invalidStep:"Korak nije valjan; korak mora biti > 0",lowerValueThumb:"sličica za manju vrijednost",higherValueThumb:"sličica za veću vrijednost"},"oj-ojDialog":{labelCloseIcon:"Zatvori"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Unos skočnog prozora. Pritisnite F6 za navigaciju između skočnog prozora i povezane kontrole.",ariaLiveRegionInitialFocusNone:"Otvorio se skočni prozor. Pritisnite F6 za navigaciju između skočnog prozora i povezane kontrole.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Unos skočnog prozora. Skočni prozor može se zatvoriti navigacijom do zadnje veze unutar skočnog prozora.",ariaLiveRegionInitialFocusNoneTouch:"Otvorio se skočni prozor. Prijeđite na sljedeću vezu kako biste uspostavili fokus unutar skočnog prozora.",ariaFocusSkipLink:"Dvaput pritisnite kako biste prešli na otvoreni skočni prozor.",ariaCloseSkipLink:"Dvaput pritisnite kako biste zatvorili otvoreni skočni prozor."},"oj-ojRefresher":{ariaRefreshLink:"Aktivirajte vezu kako biste osvježili sadržaj",ariaRefreshingLink:"Osvježava se sadržaj",ariaRefreshCompleteLink:"Osvježavanje dovršeno"},"oj-ojSwipeActions":{ariaShowStartActionsDescription:"Prikaži akcije za početak",ariaShowEndActionsDescription:"Prikaži akcije za završetak",ariaHideActionsDescription:"Sakrij akcije"},"oj-ojIndexer":{indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",indexerOthers:"#",ariaDisabledLabel:"Odgovarajuće zaglavlje grupe nije pronađeno",ariaOthersLabel:"broj",ariaInBetweenText:"Između {first} i {second}",ariaKeyboardInstructionText:"Pritisnite Enter za odabir vrijednosti.",ariaTouchInstructionText:"Dvaput pritisnite i zadržite kako biste otvorili način za poteze, a zatim povucite gore ili dolje za prilagodbu vrijednosti."},"oj-ojMenu":{labelCancel:"Odustani",ariaFocusSkipLink:"Fokus je unutar izbornika, dvaput dodirnite ili povucite kako biste fokus premjestili na prvu stavku izbornika."},"oj-ojColorSpectrum":{labelHue:"Nijansa",labelOpacity:"Neprozirnost",labelSatLum:"Zasićenost/sjajnost",labelThumbDesc:"Četverosmjerni klizač za spektar boja."},"oj-ojColorPalette":{labelNone:"Ništa"},"oj-ojColorPicker":{labelSwatches:"Uzorci",labelCustomColors:"Prilagođene boje",labelPrevColor:"Prethodna boja",labelDefColor:"Zadana boja",labelDelete:"Izbriši",labelDeleteQ:"Izbrisati?",labelAdd:"Dodaj",labelAddColor:"Dodaj boju",labelMenuHex:"Heks.",labelMenuRgba:"RGBa",labelMenuHsla:"HSLa",labelSliderHue:"Nijansa",labelSliderSaturation:"Zasićenost",labelSliderSat:"Zas.",labelSliderLightness:"Svjetlina",labelSliderLum:"Sjajnost",labelSliderAlpha:"Alfa",labelOpacity:"Neprozirnost",labelSliderRed:"Crvena",labelSliderGreen:"Zelena",labelSliderBlue:"Plava"},"oj-ojFilePicker":{dropzoneText:"Ispustite datoteke ovdje ili pritisnite za učitavanje",singleFileUploadError:"Datoteke učitavajte jednu po jednu.",singleFileTypeUploadError:"Ne možete učitati datoteke koje pripadaju vrsti {fileType}.",multipleFileTypeUploadError:"Ne možete učitati datoteke koje pripadaju vrsti: {fileTypes}.",dropzonePrimaryText:"Povuci i ispusti",secondaryDropzoneText:"Odaberite datoteku ili je ovdje ispustite.",secondaryDropzoneTextMultiple:"Odaberite datoteke ili ih ovdje ispustite.",unknownFileType:"nepoznato"},"oj-ojProgressbar":{ariaIndeterminateProgressText:"U tijeku"},"oj-ojMessage":{labelCloseIcon:"Zatvori",categories:{error:"Pogreška",warning:"Upozorenje",info:"Informacije",confirmation:"Potvrda"}},"oj-ojSelector":{checkboxAriaLabel:"Odabir potvrdnog okvira {rowKey}",checkboxAriaLabelSelected:" odabrano",checkboxAriaLabelUnselected:" odabir poništen"},"oj-ojMessages":{labelLandmark:"Poruke",ariaLiveRegion:{navigationFromKeyboard:"Ulazite u područje za poruke. Pritisnite F6 za povratak na ranije fokusirani element.",navigationToTouch:"U regiji za poruke postoje nove poruke. Upotrijebite kotačić za sinkronizaciju kako biste se svratili na oznaku za poruke.",navigationToKeyboard:"U regiji za poruke postoje nove poruke. Pritisnite F6 kako biste se vratili na regiju najnovije poruke.",newMessage:"Kategorija poruke {category}. {summary}. {detail}."}},"oj-ojMessageBanner":{close:"Zatvori",navigationFromMessagesRegion:"Ulazite u područje za poruke. Pritisnite F6 za povratak na ranije fokusirani element.",navigationToMessagesRegion:"U regiji za poruke postoje nove poruke. Pritisnite F6 kako biste se vratili na regiju najnovije poruke.",error:"Pogreška",warning:"Upozorenje",info:"Informacije",confirmation:"Potvrda"},"oj-ojConveyorBelt":{tipArrowNext:"Sljedeće",tipArrowPrevious:"Prethodno"}});