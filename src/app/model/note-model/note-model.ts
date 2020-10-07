export class NoteModel {
    constructor(
        private title: string,
        private description: string,
        private isPinned: boolean,
        private color: string,
        private isArchived: boolean,
        private labelIdList: [],
        private reminder:[],
        private collaberators: []
    ) {
    }
}
