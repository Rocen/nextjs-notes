import dayjs from 'dayjs';
import NotePreview from '@/components/NotePreview'
import EditButton from '@/components/EditButton'

export default function Note({ noteId, note }) {
  const { title, content, updateTime } = note

  return (
    <div className="note prose prose-slate dark:prose-invert">
      <div className="note-header">
        <h1 className="note-title text-black dark:text-white">{title}</h1>
        <div className="note-menu" role="menubar">
          <small className="note-updated-at text-black dark:text-white" role="status">
            Last updated on {dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}
          </small>
            <EditButton noteId={noteId} >Edit</EditButton>
        </div>
      </div>
      <NotePreview>{content}</NotePreview>
    </div>
  )
}