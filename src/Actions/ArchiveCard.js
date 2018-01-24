export default function archiveCard(cardId, listId) {
    return dispatch => {
        dispatch({ type: 'ARCHIVE_POST', payload: { card, listId } })
    }
}
