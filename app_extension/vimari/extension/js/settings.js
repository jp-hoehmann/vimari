function getSettings() {
    return {
        'modifier': undefined,
        'excludedUrls': '',

        'hintToggle': 'e',
        'newTabHintToggle': 'o',
        'linkHintCharacters': 'uiaeosnrtdyxvlcwkhgfq',
        'detectByCursorStyle': false,

        'scrollUp': '',
        'scrollDown': '',
        'scrollLeft': '',
        'scrollRight': '',
        'scrollSize': 50,
        'scrollUpHalfPage': '',
        'scrollDownHalfPage': '',
        'goToPageTop': 'g g',
        'goToPageBottom': 'shift+g',

        'goBack': '',
        'goForward': '',
        'reload': '',
        'tabForward': '',
        'tabBack': '',
        'closeTab': '',
        'closeTabReverse': '',

        'openTab': '', // This doesn't map to anything from what I can tell
    };
}

window.getSettings = getSettings;
