import { useForm } from 'react-hook-form'
import { Application } from '../../assets/icons'

import './Actions.css'

type ActionsProps = {
  onSavePdf: () => void
  applicationId: string
  setApplicationId: (id: string) => void
  myApplications?: string[]
}

type ActionsForm = {
  applicationId: string
}

const Actions: React.FC<ActionsProps> = ({
  onSavePdf,
  applicationId,
  setApplicationId,
  myApplications,
}) => {
  const { register, handleSubmit } = useForm<ActionsForm>({
    defaultValues: { applicationId },
  })

  const onSubmit = (data: ActionsForm) => {
    setApplicationId(data.applicationId)
  }

  return (
    <div className="actions">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="actions__form">
          <div className="actions__label">
            <Application title="applications" />
            <label htmlFor="applicationId">Application</label>
          </div>
          {myApplications && (
            <>
              <select id="applicationId" {...register('applicationId')}>
                <option value="">--Please choose an option--</option>
                {myApplications.map((option) => (
                  <option
                    key={option}
                    value={option}
                    selected={applicationId === option}
                  >
                    {option}
                  </option>
                ))}
              </select>
              <input type="submit" />
            </>
          )}
        </div>
      </form>
      <button className="button" onClick={onSavePdf}>
        Save PDF
      </button>
    </div>
  )
}

export default Actions
