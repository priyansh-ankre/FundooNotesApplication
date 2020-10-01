export class NoteModel {
    constructor(
        private title: String,
        private description: String,
        private isPinned: false,
        private color,
        private isArchived: false,
        private labelIdList: [],
        private reminder,
        private collaberators: []
    ) {
    }
}
