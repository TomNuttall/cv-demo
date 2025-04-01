import './Actions.css'

type ActionsProps = {
  onSavePdf: () => void
  applicationId: string
  setApplicationId: (id: string) => void
}

const Actions: React.FC<ActionsProps> = ({
  onSavePdf,
  applicationId,
  setApplicationId,
}) => {
  return (
    <div className="actions">
      <button className="actions__print" onClick={onSavePdf}>
        Save PDF
      </button>
      <div className="actions__input">
        <label htmlFor="applicationId">Id</label>
        <input
          id="applicationId"
          name="applicationId"
          type="text"
          value={applicationId}
          placeholder=""
          onChange={(e) => setApplicationId(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Actions
