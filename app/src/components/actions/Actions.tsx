import { useForm } from 'react-hook-form'

import { Application } from '../../assets/icons'

import './Actions.css'

type ActionsProps = {
  onSavePdf: () => void
  applicationId: string
  setApplicationId: (id: string) => void
}

type ActionsForm = {
  applicationId: string
}

const Actions: React.FC<ActionsProps> = ({
  onSavePdf,
  applicationId,
  setApplicationId,
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
          <input id="applicationId" {...register('applicationId')} />
        </div>
      </form>
      <button className="button" onClick={onSavePdf}>
        Save PDF
      </button>
    </div>
  )
}

export default Actions
